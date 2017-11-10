import React from 'react'
import { Button } from 'semantic-ui-react'

class ButtonMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.onClick_getCraigslistJobs();
  }
  render() {
    return (
      <div>
        <Button inverted color='purple' onClick={this.props.onClickCraigslist}>CraigsList</Button>
        <Button inverted color='red' onClick={this.props.onClickInstagram}>Instagram</Button>
        <Button inverted color='blue' onClick={this.props.onClickTwitter}>Twitter</Button>
        <Button inverted color='orange' onClick={this.props.onClickContentful}>CMS</Button>
        <Button inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Computer Gigs</Button>
        <Button inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Event Gigs</Button>
      </div>
    )
  }
}

export default ButtonMenu
