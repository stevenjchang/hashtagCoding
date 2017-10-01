import React from 'react'
import axios from 'axios'
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
      .get('/craigslist')
      .then((result) => {
        console.log('craigslist =>', result.data)
        this.setState({ result: result.data })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getCraigslist}>Fetch CraigsList</button>
        {this.state.result.map((item, i) =>
          <CraigslistListItem item={item} key={i}></CraigslistListItem>
        )}
      </div>
    )
  }
}

export default CraigslistList;
