import React from 'react'

const Tweet = ({image, text}) => {
  return (
    <div>
      <h1>Title</h1>
      <img src={image} style={{height:300, width:300, display: "inline-block"}} />
      <p>{text}</p>
    </div>
  )
  
}

export default Tweet