import React, { useState } from 'react'

function Addvedio({addcard}) {

const [vedio ,setvedio] = useState({
    id:'5',
    title : 'cow',
    views : '330 views'
})

    function handleclick(e){
        e.preventDefault()
        console.log(vedio)
        addcard(vedio)
        console.log("add vedio")
     
    }
    function handlechange(e){
      console.log(e.target.name, e.target.value)
      setvedio({...vedio ,[e.target.name]: e.target.value })
      
    }
     
    return (
        <div >
            <br />
            <form className='card' >
                <input type="text" name='title' onChange={handlechange} />
                <input type="text"  name='views' onChange={handlechange}  />
                <input type="submit" onClick={(e)=>handleclick(e)} value="submit" name='submit' />

            </form>
        </div>
    )
}

export default Addvedio