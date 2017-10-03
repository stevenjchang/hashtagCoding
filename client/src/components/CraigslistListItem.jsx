import React from 'react'

const CraigslistListItem = ({item}) => {
  if (item.images) {

  }
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.neighborhood} ~ {item.price}</p>
      {(item.images) ? <img src={'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg'}></img> : <p>No image</p>}
      <p>{item.href}</p>
      <br></br>
    </div>
  )
}

export default CraigslistListItem;
