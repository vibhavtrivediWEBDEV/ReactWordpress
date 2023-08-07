import React, { useState } from 'react'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import "./header.css"

const Header = () => {

    
    setInterval(add, 3000)
    const [increment, setincrement] = useState(3741)

    function add() {
        const count = 3741
        setincrement(increment + 1)


    }

    return (
        <div className='gpt-header section-padding' id='home'>
            <div className='gpt-header-content'>
                <h1 className='gradient-text'> let's build someting amazing with open AI </h1>
                <p>Even though the apple 12 is a year old, it is still one of the fastest and best artificial intelegence available. The nicest part about buying it right now is that you won't have to pay a lot of money for it.</p>
                <div className='gpt-header-content-input'>
                    <input type="email" placeholder='your email' />
                    <button type='button'>get started</button>
                </div>
                <div className='gpt-header-content-people'>
                    <img src={people} />
                    <p  ><span className='gradient-text' onChange={add}>{increment} +</span>  people requested access visit in last 24 hours</p>
                </div>
            </div>
            <div className='gpt-header-image'>
                <img src={ai} />
            </div>
        </div>
    )
}

export default Header
