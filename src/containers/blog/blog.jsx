import React from 'react'
import Artical from '../../components/artical/artical'
import "./blog.css"
import blog01 from "../../assets/blog01.png"
import blog02 from "../../assets/blog02.png"
import blog03 from "../../assets/blog03.png"
import blog04 from "../../assets/blog04.png"
import blog05 from "../../assets/blog05.png"

const blog = () => {
    return (
        <div className='gpt-blog section-padding' id='blog'>
        <div className='gpt-blog-heading'>
            <h1 className='gradient-text'>A lot is happening,<br /> we are blogging about it.</h1>
        </div>
        <div className='gpt-blog-container'>
            <div className='gpt-blog-container-groupA'>
            <Artical imgurl={blog01} date ="1-1-22" title="this is a title of blooging images." />
            </div>
            <div className='gpt-blog-container-groupB'>
             <Artical imgurl={blog02} date ="1-1-22" title="this is a title of blooging images."  />
            <Artical imgurl={blog03} date ="1-1-22" title="this is a title of blooging images."  />
            <Artical imgurl={blog04} date ="1-1-22" title="this is a title of blooging images."  />
            <Artical imgurl={blog05} date ="1-1-22" title="this is a title of blooging images."  />
           
            </div>
        </div>
           
        </div>
    )
}

export default blog;
