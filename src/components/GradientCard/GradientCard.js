import React, { useEffect, useState } from 'react'
import "./Slider.css"
import axios from 'axios';

function GradientCard(props) {

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

  return (
    <>
      <div className="container">
        <div className="gradient-cards" style={styles}>
          {
            cards.slice(0,props.length).map((card, i) => (
              <>
                <div className="DPcard">
                  <div className="container-card  bg-green-box"   style={props.type == "b" ? CardIMGstyles:CardGRadstyles} >
                    <svg width={props.height/5} height={props.height/5} viewBox="0 0 120 120" fill="red" xmlns="http://www.w3.org/2000/svg">
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
                    
                     <p className="card-title" style={{ fontSize: `${fontSize}px`,lineHeight:`${fontSize}px`,fontFamily: props.currentFontFamily}}>{card.title.slice(0,20)}</p>
                   {/* <p className="card-description">it's OK</p> */} 
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default GradientCard;