import React from 'react'
import axios from 'axios'
import MenuBar from './MenuBar.jsx'
import TweetList from './TweetList.jsx'
import TweetList_semantic from './TweetList_semantic.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesFromServer: []
    }
    this.getImagesInstagram = this.getImagesInstagram.bind(this)
    this.getImagesTwitter = this.getImagesTwitter.bind(this)
  }

  componentDidMount() {
    // this.getImagesInstagram()
    // this.getImagesTwitter()
  }

  // getImagesInstagram() {
  //   axios.get('/images/instagram')
  //     .then((result) => {
  //       let cleanResult = result.data.data,
  //           imagesArray =[];
  //       cleanResult.map((item) => imagesArray.push({image: item.images.low_resolution.url}))
  //       this.setState({imagesFromServer: imagesArray})
  //     })
  //     .catch((err) => console.log('***Error in getImagesFromServer - App.jsx', err))
  // }

  getImagesTwitter() {
    console.log('twitter call init')
    axios.get('/images/twitter')
      .then((result) => {
        console.log('twitter call received')
        let cleanResult = result.data.statuses,
            imagesArray = [],
            tweetsArray = [];
        cleanResult.map((item) => {
          if (item.entities.media) { 
            imagesArray.push({
              image: item.entities.media[0].media_url,
              text: item.text
            }) 
          } else {
          tweetsArray.push(item.text)
          }
        })
        this.setState({imagesFromServer: imagesArray})
      })
      // .then(() => this.setState({imagesFromServer: imagesArray}))
      .catch((err) => console.log('uh oh error', err))
  }

  render () {
    return (
      <div>
        <MenuBar />
        <button onClick={this.getImagesInstagram}>Instagram</button>
        <button onClick={this.getImagesTwitter}>Twitter</button>
        {/* <TweetList images={this.state.imagesFromServer} />  */}
        <TweetList_semantic images={this.state.imagesFromServer} /> 
      </div>
    )
  }
}

export default App
