import React from 'react'

var randomNumberTo15 = () => Math.floor(Math.random() * 15)
var randomNumberTo50 = () => Math.floor(Math.random() * 50)

const TwitterListItem = ({image, text}) => (
  <div className="ui fluid card right">
      <div className="content">
      <div className="right floated meta">14h</div>
       <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" /> Elliot
    </div>  
    <div className="image">
       <img src={image} />
       <p>{text}</p>
    </div>
    <div className="content">
      <span className="right floated">
        <i className="heart outline like icon"></i>
        {randomNumberTo50()} likes
      </span>
      <i className="comment icon"></i>
      {randomNumberTo15()} comments
    </div>
    <div className="extra content">
      <div className="ui large transparent left icon input">
        <i className="heart outline icon"></i>
         <input type="text" placeholder="Add Comment..." />
      </div>
    </div>
  </div>  
)

export default TwitterListItem
