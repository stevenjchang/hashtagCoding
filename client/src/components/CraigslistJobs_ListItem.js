import React from 'react'

const CraigslistJobs_ListItem = ({ item, toggleShowHide }) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{item.title}</h3>
        </div>
        <div className="panel-body">
        <p>{item.neighborhood} ~ <span style={{color: "red"}}>{item.price}</span></p>
        {(item.images) ? <img src={'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg'}></img> : <p>No image</p>}
        <a href={item.href}><p>link</p></a>
        <p>id: {item.id} </p>
        <p>showStatus: {item.show.toString()}</p>
        <button onClick={() => toggleShowHide(item.id, item.show)}>Hide Post</button>
        <br></br>
      </div>
    </div>
  )
}

export default CraigslistJobs_ListItem
