import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { Tooltip } from 'react-tooltip';
import './tooltip.css'
// import 'react-tooltip/dist/index.css';

   

const tooltips = [
    {
      id: 'tooltip1',
      options: [
        { value: 'background', label: 'Option 1' },
        { value: 'color', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    }
 
  ];
  
  // const TooltipExample = (props) => {
  //   const [cardBackground, setCardBackground] = useState(''); 
  //   const handleSelectChange = (tooltipId, selectedValue) => {
  //       // Handle the select change here
  //       if (selectedValue === 'background') {
  //         setCardBackground('url(`https://images.openai.com/blob/cf717bdb-0c8c-428a-b82b-3c3add87a600/ChatGPT_Diagram.svg?width=10&height=10&quality=50`)');
  //       } else if (selectedValue === 'color') {
  //         setCardBackground('red');
  //       } else {
  //         setCardBackground('');
  //       }
  //     };
  
  //   const renderTooltips = () => {
  //     return tooltips.map((tooltip) => (
  //       <span key={tooltip.id} id={tooltip.id} data-tooltip={"Please Choose The Item you want to Insert in This Card"} className="tooltip">
  //         <select onChange={(e) => handleSelectChange(tooltip.id, e.target.value)}>
  //           {tooltip.options.map((option) => (
  //             <option key={option.value} value={option.value}>
  //               {option.label}
  //             </option>
  //           ))}
  //         </select>
  //       </span>
  //     ));
  //   };
  
  //   return (
  //     <div className="tool_container">
  //       <div className="content">
  //         Hover over the text to see tooltips:
  //         <div  className="tooltip-container" >{renderTooltips()}</div>
  //       </div>
  //     </div>
  //   );
  // };
  
  

// tooltip end ) ;

const Carousel = (props) => {
    const [cards, setcards] = useState([])
    const [fontSize, setFontSize] = useState(13);
    const [icon, seticon] = useState(true)
    
    const [cardCurrentStyle,setcardCurrentStyle] = useState("")

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
        //   const newFontSize = Math.floor((props.height / 200) * 18);
        if (props.height < 580 && props.column == 1) {
            setFontSize("36");
        }
        else {
            setFontSize(Math.floor((props.height / 200) * 18));
        }
    }, [props.height])




    const styles = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.column}, 1fr)`,
    };
    const CardGRadstyles = {
        background: gradient,
        height: props.height
    };
    const CardIMGstyles = {
        background: NOgradient,
        height: props.height,
        borderLeft: `3px solid ${props.gradient}`

    };
    const CardBackgroundTYpe = {
        background: `red`,
        height: props.height,
        borderLeft: `3px solid ${props.gradient}`

    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        // slidesToScroll: 1,
    };

    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 200,
    //     rows: 2,
    //     slidesPerRow: 3
    //   };

    // my tooltip comopnent start-----------


    

    // show ICON 

    const showIcon =()=>{
        seticon(false)
    }
/////  this card style 
var type = props.type ;

if(type == "b"){
    setcardCurrentStyle(CardIMGstyles)
}
else if(type == "c"){
    setcardCurrentStyle(CardBackgroundTYpe)
}
else{
    setcardCurrentStyle(CardGRadstyles)   
}
// style={{background:cardBackground}}

    //------------------------------- end 

    return (
        <Slider {...settings}>
            {
                cards.slice(0, 3).map((card, i) => (
                    <>
                        <div className="DPcard" style={{ padding: '14px' }}>
                            <div className="container-card  bg-green-box"  >    {/*style={cardCurrentStyle} */}
                                <svg width={props.height / 5} height={props.height / 5} viewBox="0 0 120 120" fill="red" xmlns="http://www.w3.org/2000/svg">
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
                                {
                                    icon ? <p  style={{ float: 'right' }}  onClick={showIcon}>❓</p>
                                        :
                                        <div style={{ background: '#fff' }}>
                                            {/* <TooltipExample /> */}
                                        </div>
                                }
                                <p className="card-title" style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize}px`, fontFamily: props.currentFontFamily }}>{card.title.slice(0, 20)}</p>
                                {/* <p className="card-description">it's OK</p> */}
                            </div>
                        </div>
                    </>
                ))
            }
        </Slider>
    );
};

export default Carousel;
