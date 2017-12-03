import React from 'react'
import CraigslistJobs_ListItem from './CraigslistJobs_ListItem'

const CraigslistJobs_List = ({ list }) => {
  let renderedList = list ? list : [];
  return (
    <div className='container-fluid'>
      {renderedList.map((item, i) => {
        if (item.show) {
          return (
            <CraigslistJobs_ListItem item={item} key={i}/>
          )}
      })}
    </div>
  )
}

export default CraigslistJobs_List
