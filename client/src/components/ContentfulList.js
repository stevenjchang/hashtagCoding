import React from 'react'
import axios from 'axios'
import client from '../../../contentful.config.js'
import { Button } from 'semantic-ui-react'
import ContentfulListItem from './ContentfulListItem'

class Contentful_old extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: []
    }
    
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    client.getEntries({content_type: 'links'})
    .then((entry) => this.setState({links: entry.items}))
  }

  render() {
    return (
      <div>
        {this.state.links.map((item, i) => 
          <Link item={item.fields} key={i}></Link>
        )}
      </div>
    )
  }
}

const Contentful = ({ links }) => {
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


export default Contentful;
