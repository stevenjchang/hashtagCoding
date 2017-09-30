import React from 'react'

const Link = ({item}) => {
  console.log('item =>', item);
  console.log('item.something =>', item.image.fields.file.url)
  return (
    <div>
      <h2> {item.title} </h2>
      <a href={item.url} >
        <img src={item.image.fields.file.url} height="350" width="500"></img>
      </a>
    </div>
  )
}

export default Link;
