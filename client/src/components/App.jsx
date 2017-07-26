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
    this.getImagesFromServer = this.getImagesFromServer.bind(this)
  }

  componentDidMount() {
    // this.getImagesFromServer()
    this.getImagesFromServerTwitter()
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

  getImagesFromServerTwitter() {
    axios.get('/images')
      .then((result) => {
        let cleanResult = result.data.statuses,
            imagesArray = [],
            tweetsArray = [];
        cleanResult.map((item) => {
          console.log('item =>', item)
          if (item.entities.media) { 
            imagesArray.push(
              {
                image: item.entities.media[0].media_url,
                text: item.text
              }
            ) 
          } else {
          tweetsArray.push(item.text)
          console.log('imagesArray.length =>', imagesArray.length)
          console.log('tweetsArray.length =>', tweetsArray.length)
          // console.log('tweetsArray :', tweetsArray)
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
             <TweetList images={this.state.imagesFromServer} /> 
            {/* <TweetListWithMui images={this.state.imagesFromServer} /> */}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
