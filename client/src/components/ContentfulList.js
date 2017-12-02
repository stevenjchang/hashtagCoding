import React from 'react'
import axios from 'axios'

const ContentfulList = ({ links }) => {
  let renderedList = links[0] ? links[0] : [];
  return (
    <div> 
      {renderedList.map((item, i) => {
        return (
          <ContentfulListItem link={item.fields} key={i} />
        )
      })}
    </div>
  )
}

export default ContentfulList;
