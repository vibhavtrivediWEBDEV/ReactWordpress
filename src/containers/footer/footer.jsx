import React from 'react'
import "./footer.css"
import Feature from '../../components/feature/feature'


const footer = () => {




    function head(){
        return(
            <>
             <h3>links</h3>
             <h3>company</h3>
             <h3>get in touch</h3>
            </>
        )
    }



    function foot(){
        return(
            <>
             <p>hi there</p>
             <p>hi there</p>
             <p>hi there</p>
            </>
        )
    }




    return (
        <div className='gpt-footer section-padding'>
          <div className='gpt-footer-heading'>
            <h1 className='gradient-text'>do you want to step in to the<br /> future before others</h1>      
          </div> 
          <div className='gpt-footer-btn'>
              <button type='button'>request early access</button>
          </div> 
          <div className='gpt-footer-container'>
          <Feature /> 
          <div className='gpt-footer-content-main'>
          
          <h1>gpt-3</h1>
          <h5>crecherwoord k12 <br />all rights reserved</h5>
          
          </div> 
          <div className='gpt-footer-content-links'>
          {head()} {foot()}  {foot()} {foot()} {foot()}  </div> 
          </div> 
          <center>&copy; vibhav trivedi & company</center>     
        </div>
        
        
    )
}

export default footer
