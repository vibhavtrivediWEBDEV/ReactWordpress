import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';
import './drag.css';
import axios from 'axios';


const useGesture = createUseGesture([dragAction, pinchAction]);

export default function Drag(props) {
  const [cards, setCards] = useState([]);
  const [loginX, setloginX] = useState(523.177)
  const [loginY, setloginY] = useState(523.177)
  const [fontSize, setFontSize] = useState(13);
  const [para, setpara] = useState()
  const [currentStyle, setCurrentStyle] = useState(`translate3d(427.5px, 60px, 0px) scale(1) rotateZ(0deg)`);


  const gradient = `linear-gradient(71deg, #080509, #1a171c, ${props.gradient})`;
  const NOgradient = `linear-gradient(71deg, #080509, #1a171c, #333)`;

  const CardGRadstyles = {
    background: gradient,
    height: props.height,
  };
  const CardIMGstyles = {
    background: NOgradient,
    height: props.height,
    borderLeft: `3px solid ${props.gradient}`,
  };

  const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null;
  };


  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    setpara(document.querySelector('#text').checked)
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const data = response.data;
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });

    const newFontSize = Math.floor((props.height / 200) * 18);
    if (props.height < 580 && props.column === 1) {
      setFontSize('36');
    } else {
      setFontSize(newFontSize);
    }

    const storedTransform = getCookie('cardTransform');
    setCurrentStyle(storedTransform);
        return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
    };



  },);


  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = React.useRef(null);
  const submitRef = React.useRef(null);
  const inputRef1 = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const ParaRef = React.useRef(null);
  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        api.start({ x, y });
        setloginY(x)
        setloginY(y)

      },
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
        if (first) {
          const { width, height, x, y } = ref.current.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - ms * memo[2];
        const y = memo[1] - ms * memo[3];
        api.start({ scale: s, rotateZ: a, x, y });

        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }
  );

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        submitRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
    },
    {
      target: submitRef,
    }
  );

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        inputRef1.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
    },
    {
      target: inputRef1,
    }
  );

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        inputRef2.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
    },
    {
      target: inputRef2,
    }
  );

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        ParaRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
    },
    {
      target: ParaRef,
    }
  );

  // form logic 


  const handleButtonClick = (e) => {
    document.cookie = `cardTransform=${currentStyle}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

  }

  return (
    <div style={{ height: `${90}px`, width: `${props.column}00px`, color: `${props.color}` }}>
      {
        para ? <p contentEditable={true} spellCheck={false} className='loginFont' style={{ color: `${props.gradient}`, fontFamily: `${props.currentFontFamily}` }} ref={ParaRef}>Welcome to our customizable heaven where your unique vision comes alive.</p> : ""
      }

      <animated.div className="card" ref={ref} style={style}  >
        <div
          className="login-box container-card  bg-box"
          style={props.type === 'b' ? CardIMGstyles : CardGRadstyles}
        >
          <h2 style={{ fontFamily: `${props.currentFontFamily}` }}>LOGIN</h2>
          <form style={{ padding: '10px', fontFamily: `${props.currentFontFamily}` }}>
            <div className="user-box">
              <input type="text" name="" required="" ref={inputRef1} />
              <label style={{ color: `${props.gradient}` }}>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" ref={inputRef2} />
              <label style={{ color: `${props.gradient}` }}>Password</label>
            </div>
            <animated.a
              href="#"
              style={{
                background: props.gradient,
                float: 'right',
                boxShadow: `0 0 20px ${props.gradient}`,
                transform: `translate3d(${style.x}px, ${style.y}px, 0) scale(${style.scale}) rotateZ(${style.rotateZ}deg)`,
              }}
              onClick={(e) => handleButtonClick(currentStyle)}
              ref={submitRef}
            >
              Submit
            </animated.a>
          </form>
        </div>

      </animated.div>
    </div>
  )
}
