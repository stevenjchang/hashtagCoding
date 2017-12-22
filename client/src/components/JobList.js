import React from 'react';
import JobListItem from './JobListItem';

const JobList = ({ list }) => {
  const renderedList = list || [];
  return (
    <div>
      {renderedList.map((item, i) => (
        <JobListItem item={item} key={i} />
      ))}
    </div>
  );
};

export default JobList;
