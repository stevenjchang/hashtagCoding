import React from 'react'

const Link = ({item}) => {
  const dt = item.dateTime;
  const date = dt[5] + dt[6] + '/' + dt[8] + dt[9] + '/' + dt[0] + dt[1] + dt[2] + dt[3];
  return (
    <div>
      <h2> {item.title} </h2>
      <a href={item.url}> <img src={item.image.fields.file.url} height="350" width="500"></img> </a>
      <p> posted: {date} </p>
    </div>
  )
}

export default Link;
