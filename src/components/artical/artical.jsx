import React from 'react'
import  './artical.css'


const Artical = ({imgurl,date,title}) => {
    return (
        <div className='gpt-artical-container'>
           <div className='gpt-artical-container-image'>
           <img src={imgurl} />
           </div>
           <div className='gpt-artical-container-content'>
           <p>{date}</p>
           <h3>{title}</h3>
           <p>Read full artical</p>
           </div>
        </div>
    )
}

export default Artical;
