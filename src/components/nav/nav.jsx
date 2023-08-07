import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./nav.css"
import logo from "../../assets/logo.svg"



const Nav = (props) => {

    const [togglemenu, settogglemenu] = useState(false)
    const [thiscolor, setthiscolor] = useState("")

    const handleColorChange = (e) => {
        props.setColor(e.target.value);
        setthiscolor(e.target.value)
    }

    const handleColchange = (e) => {
        props.setcol(e.target.value)
    }

    const handleheightchange = (e) => {
        props.seth(e.target.value)

    }
    const handlelengthtchange = (e) => {
        props.setlength(e.target.value)

    }
    const handlecardtchange = (e) => {
        props.setbgty(e.target.value)

    }
    const handleimageurl = (e) => {
        props.setbgimg(e.target.value)
    }


    return (

       <>
        <br/>
        <div className="gpt-navbar" style={{borderBottom:` 2px solid ${thiscolor}`}}>
            <div className='gpt-navbar-links' style={{marginTop:'5px'}}>
                <div className='gpt-navbar-links-logo' >
              <h1  style={{color:`${thiscolor}`,letterSpacing:'3px',marginLeft:'-40px',fontWeight:'700',fontSize:'30px'}}>!ColorLess.</h1>
                </div>
                <div className='gpt-navbar-links-container'>



                    <p>
                        No of Cards :<input type='number' style={{ width: '100px', color: thiscolor }} value={props.length} onChange={handlelengthtchange} />
                    </p>
                    <p>
                        <input type="color" style={{ width: '40px', color: thiscolor }} value={props.color} onChange={handleColorChange} />

                    </p>
                    <p>
                        COLUMN : <input className='col_inp' style={{ width: '40px', color: thiscolor }} value={props.col} onChange={handleColchange} />
                    </p>
                    <p>
                        Height :<input type='number' style={{ width: '90px', color: thiscolor }} min="300" value={props.h} onChange={handleheightchange} />
                    </p>
                    <p>
                        NO GRADIENT:<input type='text' style={{ width: '40px' }} value={props.bgty} onChange={handlecardtchange} />
                    </p>
                    <p onClick={props.changefont} style={{ width: '100px', color: '#fff',marginTop:'12px' }} >
                        FONT CHANGE
                    </p>
                    <p>
                        BACKGROUND :<input type='text' style={{ width: '130px', color: `#fff` ,fontSize:'20px',marginTop:'10px' }} min="300" value={props.bgimg} onChange={handleimageurl} />
                    </p>
                    <p style={{marginTop:'10px'}}>
                       <input  id='text' type='checkbox' style={{marginTop:'-40px', width: '130px', color: `#fff`}} />text
                    </p>
                </div>
            </div>
            <div className='gpt-navbar-sign'>
                <p><a href="http://www.google.com" target="_blank" rel="noopener noreferrer"></a></p>
                {/* <button  type='button'>DOWNLOAD CSS CODE</button>                */}
            </div>
            <div className='gpt-navbar-menu'>
                {togglemenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => settogglemenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => settogglemenu(true)} />
                }
                {togglemenu && (
                    <div className='gpt-navbar-menu-container'>
                        <div className='gpt-navbar-menu-container-links scale-up-center'>
                            <p><a href='#home'>home</a></p>
                            <p><a href='#home'>home</a></p>
                            <p><a href='#home'>home</a></p>
                            <p><a href='#home'>home</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
       </>
    )
}

export default Nav;
