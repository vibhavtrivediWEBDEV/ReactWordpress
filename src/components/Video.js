import React from 'react'

function Video({title,views}) {
  return (
    <div className='card' style={{float:'left',margin:'0 75px'}}>
    <img height={400} src={`https://source.unsplash.com/600x800/?${title}`} alt="" />
    <h4>{title}</h4>
    <p>{views}</p>
    </div>
  )
}

export default Video;