import React from 'react';

const createImageSourceUrl = (imageId) => {
  return `https://images.craigslist.org/${imageId.split(',')[0].substring(2)}_300x300.jpg`;
};

const CraigslistListItem = ({ item, toggleShowHide }) => {
  return (
    <div className="">
      <div className="panel panel-primary">
        <a href={item.href} target="_blank">
          <p className="panel-title listing-title">
            {item.title}
            <span
              className="listing-title-neighborhood"> ~ ( {item.neighborhood ? item.neighborhood : 'no location'}
              )
            </span>
            <span style={{ color: 'red' }}>{item.price}</span>
          </p>
        </a>
      </div>
      <div className="panel-body block">
        <div className="panel-body-img-car">
          {(item.images) ?
            <img
              className="img-test"
              src={createImageSourceUrl(item.images)}
            />
          : <img
            className="panel-body-img"
            src="http://via.placeholder.com/65x65"
            alt="job-listing"
          />}
        </div>
        <span className="pull-right">
          <button className="btn btn-success btn-sm">Save Job</button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => toggleShowHide(item.id, item.show)}
          >Hide Job
          </button>
        </span>
      </div>
    </div>
  );
};

export default CraigslistListItem;
