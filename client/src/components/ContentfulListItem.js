import React from 'react'

const ContentfulListItem = ({ link }) => {
  const dt = link.dateTime;
  const date = dt[5] + dt[6] + '/' + dt[8] + dt[9] + '/' + dt[0] + dt[1] + dt[2] + dt[3];
  return (
    <div>
      <h2> {link.title} </h2>
      <a href={link.url}> <img src={link.image.fields.file.url} height="350" width="500"></img> </a>
      <p> posted: {date} </p>
    </div>
  )
}

export default ContentfulListItem
