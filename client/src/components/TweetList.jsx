import React from 'react'
import Tweet from './Tweet.jsx'

class TweetList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const tweetArray = ['hashtag', 'coding', 'willbesuccessful'];
    
    return (
      <div>
        {this.props.images.map((image, i) => 
          <Tweet image={image} key={i} /> 
        )}   
      </div>
    )
  }
}

export default TweetList
