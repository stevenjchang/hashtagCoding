import React from 'react'
import JobListItem from './JobListItem'

const JobList = ({ list }) => {
  console.log('list', list)
  let renderedList = list ? list : [];
  return (
    <div>
      {renderedList.map((item, i) => {
        return (
          <JobListItem item={item} key={i} />
        )
      })}
    </div>
  )
}

export default JobList
