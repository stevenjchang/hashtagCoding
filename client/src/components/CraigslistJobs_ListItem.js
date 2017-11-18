import React from 'react'
import '../css/CraigslistJobs_ListItem.css'

const CraigslistJobs_ListItem = ({ item, toggleShowHide }) => {
  return (
    <div className="col-md-8">

      <div className="col-md-2">
      {(item.images) ? <img className="panel-body-img" src={'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg'} /> : <img className="panel-body-img" src="http://via.placeholder.com/65x65" />}
      </div>

      <div className="panel panel-primary col-md-10">
        <div className="panel-heading">
          <a href={item.href}>
            <h7 className="panel-title listing-title">
              {item.title} <span style={{"color": "black", "font-style": "italic", "font-size": ".70em"}}> ~ ( {item.neighborhood ? item.neighborhood : "no location"} )
              </span>
            </h7>
          </a>
        </div>

        <div className="panel-body block">
          <span className="pull-right">
          <button className="btn btn-success btn-xs">Save Job</button>
          <button className="btn btn-danger btn-xs" onClick={() => toggleShowHide(item.id, item.show)}>Hide Job</button>
          </span>
          {/* <button className="btn btn-sucess btn-xs">Show </button> */}
        </div>
        
      </div>
    </div>
  )
}

export default CraigslistJobs_ListItem
