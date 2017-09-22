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
        {this.props.images.map((item, i) => 
          <Tweet image={item.image} key={i} text={item.text} /> 
        )}   
      </div>
    )
  }
}

export default TweetList
