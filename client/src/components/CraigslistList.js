import React from 'react';
import CraigslistListItem from './CraigslistListItem';

const CraigslistList = ({ list, onButtonClick, toggleShowHide }) => {
  const renderedList = list[0] || [];
  return (
    <div className="container">
      <div className="row">
        {renderedList.map((item, i) => {
          if (item.show) {
            return (
              <div className="col-4">
                <CraigslistListItem item={item} key={i} toggleShowHide={toggleShowHide} />
              </div>
            );
          }
          return (
            <div>
              <h3>CraigslistList</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CraigslistList;
