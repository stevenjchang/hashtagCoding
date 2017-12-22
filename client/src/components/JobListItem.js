import React from 'react';
import '../css/CraigslistJobs_ListItem.css';

const JobListItem = ({ item, toggleShowHide }) => {
  return (
    <div className="col-md-7 col-md-offset-2">

      <div className="col-md-2">
        {(item.images) ?
          <img
            className="panel-body-img"
            src={`https://images.craigslist.org/, ${item.images.split(',')[0].substring(2)}, _300x300.jpg`}
            alt="job-listing"
          />
          : <img
            className="panel-body-img"
            src="http://via.placeholder.com/65x65"
            alt="job-listing"
          />}
      </div>

      <div className="panel panel-primary col-md-10">
        <div className="panel-heading">
          <a href={item.href} target="_blank">
            <p className="panel-title listing-title">
              {item.title}
              <span className="listing-title-location"> ~ ( {item.location ? item.location : 'no location'} )
              </span>
            </p>
            <p className="listing-company">at {item.company}</p>
          </a>
        </div>

        <div className="panel-body block">
          <span className="listing-site"> {item.site} </span>
          <span className="pull-right">
            <button className="btn btn-success btn-xs">Save Job</button>
            <button
              className="btn btn-danger btn-xs"
              onClick={() => toggleShowHide(item.id, item.show)}
            >Hide Job
            </button>
          </span>
          {/* <button className="btn btn-sucess btn-xs">Show </button> */}
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
