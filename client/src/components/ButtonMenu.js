import React from 'react'

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
        <button className='btn btn-default btn-md' inverted color='purple' onClick={this.props.onClickCraigslist}>CraigsList</button>
        <button className='btn btn-default btn-md' inverted color='red' onClick={this.props.onClickInstagram}>Instagram</button>
        <button className='btn btn-default btn-md' inverted color='blue' onClick={this.props.onClickTwitter}>Twitter</button>
        <button className='btn btn-default btn-md' inverted color='orange' onClick={this.props.onClickContentful}>CMS</button>
        <button className='btn btn-default btn-md' inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Computer Gigs</button>
        <button className='btn btn-default btn-md' inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Event Gigs</button>
      </div>
    )
  }
}

export default ButtonMenu
