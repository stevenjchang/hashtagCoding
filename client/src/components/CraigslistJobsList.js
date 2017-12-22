import React from 'react';
import CraigslistJobsListItem from './CraigslistJobsListItem';

const CraigslistJobsList = ({ list }) => {
  let renderedList = list || [];
  return (
    <div className="container-fluid">
      {renderedList.map((item, i) => {
        if (item.show) {
          return (
            <CraigslistJobsListItem item={item} key={i} />
          );
        }
        return (<div>no jobs</div>);
      })}
    </div>
  );
};

export default CraigslistJobsList;
