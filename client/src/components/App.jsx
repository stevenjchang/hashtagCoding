import React from 'react'
import TweetList from './TweetList.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesFromServer: []
    }
    this.getImagesFromServer = this.getImagesFromServer.bind(this)
  }

  componentDidMount() {
    this.getImagesFromServer()
  }

  getImagesFromServer() {
    axios.get('/images')
      .then((result) => {
        let cleanResult = result.data.data,
            imagesArray =[];
        cleanResult.map((item) => imagesArray.push(item.images.low_resolution.url))
        this.setState({imagesFromServer: imagesArray})
      })
      .catch((err) => console.log('***Error in getImagesFromServer - App.jsx', err))
  }

  render () {
    return (
      <div>

        <TweetList images={this.state.imagesFromServer} />
        
      </div>
    )
  }
}

export default App
