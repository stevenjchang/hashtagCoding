import React from 'react'
import TweetList from './TweetList.jsx'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TweetListWithMui from './TweetListWithMui.jsx'
import TabsNavbar from './TabsNavbar.jsx'

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

  getImagesInstagram() {
    axios.get('/images/instagram')
      .then((result) => {
        console.log('client result =>', result.data.statuses)
        let cleanResult = result.data.data,
            imagesArray =[];
        cleanResult.map((item) => imagesArray.push({image: item.images.low_resolution.url}))
        this.setState({imagesFromServer: imagesArray})
      })
      .catch((err) => console.log('***Error in getImagesFromServer - App.jsx', err))
  }

  getImagesTwitter() {
    axios.get('/images/twitter')
      .then((result) => {
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
          console.log('imagesArray.length =>', imagesArray.length)
          console.log('tweetsArray.length =>', tweetsArray.length)
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
        <MuiThemeProvider>
          <div>
            <TabsNavbar title="My AppBar" />
            <button onClick={this.getImagesInstagram}>Instagram</button>
            <button onClick={this.getImagesTwitter}>Twitter</button>
            <TweetList images={this.state.imagesFromServer} /> 
            {/* <TweetListWithMui images={this.state.imagesFromServer} /> */}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
