import React, { useEffect, useState } from "react";
import "./app.css"
import Gsap from  "./components/Gsap/Gsap"

// import Artical from './components/artical/artical'
import Brand from './components/brand/brand'
import Cta from './components/cta/cta'
import Feature from './components/feature/feature'
import Nav from './components/nav/nav'
import Blog from './containers/blog/blog'
import Features from './containers/Features/Features'
import Header from './containers/header/header'
import Possibility from './containers/possibility/possibility'
import Footer from './containers/footer/footer'
import Whatgta from './containers/whatgta/whatgta'
import Tarun from "./containers/Tarun/Tarun";
import axios from "axios";
import Photo from "./containers/Camera";
import Print from "./containers/Print";
// import Game from "./containers/Game";
import GradientCard from "./components/GradientCard/GradientCard";
import Table from "./components/Table/Table";
import Carousel from "./components/Carousel/Carousel";
import ReactTooltip from 'react-tooltip';
import Dragable from "./components/Drag/DraggablePhoto";
import Drag from "./components/Drag/Drag";
import Game from "./components/Game/Game"
import Emoji from "./components/Emoji/Emoji";
import Mojis from "./components/Emoji/Mojis";
import Coding from "./components/Coding";
import SeliniumForm from "./components/SeliniumForm";


function App() {

  const [color, setColor] = useState("#333");
  const [background, setbackground] = useState(`url('')`)
  const [h, seth] = useState(340);
  const [length, setlength] = useState(2);
  const [col, setcol] = useState(3);
  const [bgimg, setbgimg] = useState("");
  const [bgty, setbgty] = useState("")
  const [currentFontFamilyIndex, setCurrentFontFamilyIndex] = useState(0);

  const fontFamilies = [
    'Acme, sans-serif',
    'Baloo Bhai 2, cursive',
    'Baloo Bhaina 2, cursive',
    'Comforter Brush, cursive',
    'Estonia, cursive',
    'Poppins, sans-serif',
    'Raleway, sans-serif',
    'Sacramento, cursive'
  ];

  const handleButtonClick = () => {
    const nextIndex =
      currentFontFamilyIndex === fontFamilies.length - 1
        ? 0
        : currentFontFamilyIndex + 1;
    setCurrentFontFamilyIndex(nextIndex);
  };

  const currentFontFamily = fontFamilies[currentFontFamilyIndex];
  const unsplashBaseUrl = 'https://source.unsplash.com';
  const Iwidth = 1200;
  const Iheight = 700;

  const backgroundStyle = { background: `url(${unsplashBaseUrl}/${Iwidth}x${Iheight}/?${bgimg})`,borderLeft:`${col}px solid ${color}`,height:'100vh' }

  return (  
    <div className="app">
      <div className="gradient-bg" style={bgimg == ""?{background:''}:backgroundStyle}>
        <Nav setColor={setColor} setcol={setcol} seth={seth} setlength={setlength} setbgty={setbgty} changefont={handleButtonClick} setbgimg={setbgimg} />
        {/* <GradientCard  type={bgty} length={length} height={parseInt(h)} gradient={color} column={col} currentFontFamily={currentFontFamily} />  */}
        {/* <Table  type={bgty} length={length} height={parseInt(h)} gradient={color} column={col} currentFontFamily={currentFontFamily}/>  */}
        {/* <Print />  <Photo /> */}
        {/* <Carousel type={bgty} length={length} height={parseInt(h)} gradient={color} column={col} currentFontFamily={currentFontFamily} /> */}

        {/* <DraggablePhoto h={100} /> */}
        {/* <Dragable setColor={setColor} setcol={setcol} seth={seth} setlength={setlength} setbgty={setbgty} changefont={handleButtonClick} /> */}
        <Drag type={bgty} length={length} height={parseInt(h)} gradient={color} column={col} currentFontFamily={currentFontFamily} bgimg={bgimg} />
        {/* <Gsap />     */}
     {/* <Wrapper> */}
     {/* <div className="wrapper">
     <Emoji />
     </div> */}
     {/* <Mojis /> */}
     {/* </Wrapper> */}
  
     <div style={{background:'#fff'}}>
     {/* <Coding /> */}
     {/* <SeliniumForm /> */}
     </div>
    
      </div>

      {/* <Whatgta /> */}
      {/* <Cta /> 
        <Blog /> */}

    </div>
  )
}
export default App;

