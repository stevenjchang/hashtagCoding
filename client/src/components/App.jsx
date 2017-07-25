import React from 'react'
import TweetList from './TweetList.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getImagesFromServer = this.getImagesFromServer.bind(this)
  }

  getImagesFromServer() {
    axios.get('/images')
      .then((result) => console.log('success in getImages, data', result))
      .catch((err) => console.log('Error in getImagesFromServer - App.jsx', err))
  }

  render () {
    return (
      <div>
        <TweetList />
        <button onClick={this.getImagesFromServer}>Btn</button>
      </div>
    )
  }
}

export default App
