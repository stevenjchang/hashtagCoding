import React from 'react'

const CraigslistJobs_ListItem = ({ item, toggleShowHide }) => {
  return (
    <div className="col-md-8 col-md-offset-2">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <a href={item.href} style={{"color": "white"}}>
        <h3 className="panel-title">
          {/* <span className="glyphicon glyphicon-play"></span> */}
            {item.title} 
          <span style={{"color": "black", "font-style": "italic", "font-size": ".85em"}}> ~ ( {item.neighborhood} )</span></h3></a>
      </div>
      <div className="panel-body block">
        {(item.images) ? <img src={'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg'}></img> : <p>No image</p>}
        <span className="pull-right">
        <button className="btn btn-danger btn-xs" onClick={() => toggleShowHide(item.id, item.show)}>Hide Post</button>
        </span>
        <button className="btn btn-sucess btn-xs">Show </button>
      </div>
    </div>
    </div>
  )
}

export default CraigslistJobs_ListItem
