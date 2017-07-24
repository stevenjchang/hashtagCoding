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
        {tweetArray.map((item) => 
          <Tweet something={item} /> 
        )}   
           {/* <Tweet something='hello'/>    */}
      </div>
    )
  }
}

export default TweetList
