import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Tarun = () => {
    const [cards, setcard] = useState([])

   useEffect(() => {
    var config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setcard(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
   }, [])
   
    

    

  return (
   <>
    <div className="cards">
       {
          cards.map((card,i)=>{
            return(
              <>
              <div className='card' key={i}><p className='cardsss'>{card.title}</p></div> 
              </>
            )
          })
       }  
    </div>
   </>
  )
}

export default Tarun