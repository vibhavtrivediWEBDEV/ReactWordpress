import React from 'react'
import "./Features.css"
import Feature from '../../components/feature/feature'


function createcard(featuresData){
    return(
        <Feature 
        title = {featuresData.title}
       text = {featuresData.text}
       />
    )
}

const featuresData =[
    {
        title:"full stack developer",
        text:"the future is now and you just need it to realize it. step into future today & make it happen "
    },
    {
        title:"python backend",
        text:"the future is now and you just need it to realize it. step into future today & make it happen "
    },
    {
        title:"react must ",
        text:"the future is now and you just need it to realize it. step into future today & make it happen "
    },
    {
        title:"trying to do logic changes ",
        text:"the future is now and you just need it to realize it. step into future today & make it happen "
    }
]

const Features = () => {
    return (
        <div className='gpt-features section-padding' id='lib'>
          <div className='gpt-features-heading'>
          <h1 className='gradient-text'>the future is now and you just need it to realize it. step into future today & make it happen . </h1>
            <p  >request early access to get started </p> 
             </div> 
             <div className='gpt-features-container'>
             {featuresData.map(createcard)}   
             </div>  
        </div>
    )
}

export default Features;
