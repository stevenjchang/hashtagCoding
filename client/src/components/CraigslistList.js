import React from 'react';
import CraigslistListItem from './CraigslistListItem';

const CraigslistList = ({ list, onButtonClick, toggleShowHide }) => {
  const renderedList = list[0] || [];
  return (
    <div>
      {renderedList.map((item, i) => {
        if (item.show) {
          return (
            <CraigslistListItem item={item} key={i} toggleShowHide={toggleShowHide} />
          );
        }
        return (
          <div>
            <h3>CraigslistList</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CraigslistList;
