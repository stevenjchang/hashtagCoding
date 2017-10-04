import React from 'react'
import axios from 'axios'
import { Grid, Image } from 'semantic-ui-react'
import CraigslistListItem from './CraigslistListItem.jsx'

class CraigslistList extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      result: []
    }
    
    this.getCraigslist = this.getCraigslist.bind(this);
  }

  getCraigslist() {
    axios
      .get('/craigslist_scraper')
      .then((result) => {
        console.log('craigslist =>', result.data)
        this.setState({ result: result.data })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getCraigslist}>Fetch CraigsList</button>
        <Grid centered={true} divided='vertically'>
          <Grid.Row columns={3} stretched={true} textAlign={'center'}>
            {this.state.result.map((item, i) => {
              return (
                <Grid.Column>
                  <CraigslistListItem item={item} key={i}></CraigslistListItem>
                </Grid.Column>)}
            )}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default CraigslistList;
