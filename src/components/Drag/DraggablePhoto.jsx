import React, { useEffect, useRef, useState } from 'react';
import { useSprings, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import clamp from 'lodash.clamp';
import swap from 'lodash-move';
import axios from 'axios';


// import styles from './drag.css';

const fn = (order, active = false, originalIndex = 0, curIndex = 0, y = 0) => (index) =>
  active && index === originalIndex
    ? {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: 1,
        shadow: 15,
        immediate: (key) => key === 'zIndex',
        config: (key) => (key === 'y' ? config.stiff : config.default),
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: 0,
        shadow: 1,
        immediate: false,
      };

function DraggableList({ items },props) {

  
  const [fontSize, setFontSize] = useState(13);
 
  const gradient = `linear-gradient(71deg, #080509, #1a171c, ${props.gradient})`;
  const NOgradient = `linear-gradient(71deg, #080509, #1a171c, #333)`;




  const styles = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.column}, 1fr)`,
  };
  const CardGRadstyles = {
    background: gradient,
    height:props.height 
  };
  const CardIMGstyles = {
    background: NOgradient ,
    height:props.height ,
    borderLeft : `3px solid ${props.gradient}`

  };

  
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1);
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder;
  });

  return (
    <div style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale,
            color: 'red'
          }}
        >
          {/* Card div */}
          <div className="DPcard">
                  <div className="container-card  bg-green-box"   style={props.type == "b" ? CardIMGstyles:CardGRadstyles} >
                    <svg width={20} height={20} viewBox="0 0 120 120" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4582)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4582)" stroke-width="2"></rect>
                     
                      <path d="M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z" fill={props.gradient}></path>
                      <defs>
                        <linearGradient id="paint0_linear_1366_4582" x1="120.194" y1="119.827" x2="-13.1225" y2="17.1841" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#61A0FF" stop-opacity="0.7"></stop>
                          <stop offset="0.489583" stop-color="#61A0FF" stop-opacity="0"></stop>
                          <stop offset="1" stop-color="#61A0FF" stop-opacity="0.7"></stop>
                        </linearGradient>
                        <radialGradient id="paint1_radial_1366_4582" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                          <stop stop-color="#87A1FF"></stop>
                          <stop offset="1" stop-color="#16161D" stop-opacity="0.2"></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                    
                     <p className="card-title" style={{ fontSize: `${fontSize}px`,lineHeight:`${fontSize}px`,fontFamily: props.currentFontFamily}}>{props.card}</p>
                   {/* <p className="card-description">it's OK</p> */} 
                  </div>
                </div>
        </animated.div>
      ))}
    </div>
  );
  
}

export default function Dragable(props) {

  const [cards, setcards] = useState([])
  const [fontSize, setFontSize] = useState(13);
 
  const gradient = `linear-gradient(71deg, #080509, #1a171c, ${props.gradient})`;
  const NOgradient = `linear-gradient(71deg, #080509, #1a171c, #333)`;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        // data.slice(0,psrops.length)
        setcards(data)
      })
      .catch((error) => {
        console.log(error);
      });
      const newFontSize = Math.floor((props.height / 200) * 18);
      if(props.height < 580 && props.column == 1){
        setFontSize("36");
      }
      else{
        setFontSize(newFontSize);
      }
     
     
     


  }, [])

  return (
    <div className="flex fill center">
      <DraggableList  setColor={props.setColor} setcol={props.setcol} seth={props.seth} setlength={props.setlength} setbgty={props.setbgty} card={cards}   items={'Lorem ipsum dolor sit'.split(' ')} />
    </div>
  );
}
