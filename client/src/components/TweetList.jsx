import React from 'react'
import Tweet from './Tweet.jsx'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class TweetList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const tweetArray = ['hashtag', 'coding', 'willbesuccessful'];
    
    return (
      <div>
        <AppBar title="My AppBar" />
        <RaisedButton label="Default" />
        {this.props.images.map((item, i) => 
          <Tweet image={item.image} key={i} text={item.text} /> 
        )}   
      </div>
    )
  }
}

export default TweetList
