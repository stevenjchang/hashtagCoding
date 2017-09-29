import React from 'react'

const Link = ({image, text, item}) => {
  return (
    <div>
      <h1>Title</h1>
      <img src={image} style={{height:300, width:300, display: "inline-block"}} />
      <p>{text}</p>
      <p>item: {item.name}</p>
    </div>
  )
}

export default Link;
