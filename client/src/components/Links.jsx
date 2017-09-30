import React from 'react'
import axios from 'axios'
import Link from './Link.jsx'
import {createClient} from 'contentful'
import ENV from '../../../apikey.json'

// class Links extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       links: []
//     };

//     this.getLinks = this.getLinks.bind(this);
//   }

//   getLinks() {
//     axios.get('/links')
//       .then((result) => this.setState({links: result.data}) )
//   }

//   render() {
//     return (
//       <div>Links
//         <button onClick={this.getLinks}>Get Links</button>
//         {this.state.links.map((item, i) => 
//           <Link item={item} key={i}></Link>
//         )}
//       </div>
//     )
//   }
// }

class Links_with_Contentful extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: []
    }
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    const client = createClient({
      space: ENV.CONTENTFUL_SPACE_ID,
      accessToken: ENV.CONTENTFUL_DELIVERY_API
    })
    client.getEntries({content_type: 'links'})
    .then((entry) => {
      console.log('this is entry =>', entry.items);
      this.setState({links: entry.items})
    })
  }

  render() {
    return (
      <div>Links
      <button onClick={this.getLinks}>Get Links</button>
        {this.state.links.map((item, i) => 
          <Link item={item.fields} key={i}></Link>
        )}
      </div>
    )
  }
}

export default Links_with_Contentful;
