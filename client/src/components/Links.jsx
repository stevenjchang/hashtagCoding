import React from 'react'
import axios from 'axios'
import Link from './Link.jsx'

class Links extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: []
    };

    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    axios.get('/links')
      .then((result) => this.setState({links: result.data}) )
  }

  render() {
    return (
      <div>Links
        <button onClick={this.getLinks}>Get Links</button>
        {this.state.links.map((item, i) => 
          <Link item={item} key={i}></Link>
          
          
        )}
      </div>
    )
  }
}

export default Links;

// class TweetList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
  
//   render() {
//     const tweetArray = ['hashtag', 'coding', 'willbesuccessful'];
    
//     return (
//       <div>
//         {this.props.images.map((item, i) => 
//           <Tweet image={item.image} key={i} text={item.text} /> 
//         )}   
//       </div>
//     )
//   }
// }