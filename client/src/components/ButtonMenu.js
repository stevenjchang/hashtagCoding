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
      <div className='text-center' style={{marginBottom:'35px', marginTop:'25px'}}>
        <h2>Steve's Job Search Aggregator</h2>
        <h4>See all your job searches at once</h4>
        <button className='btn btn-default btn-sm' inverted color='purple' onClick={this.props.onClickCraigslist}>CraigsList</button>
        <button className='btn btn-default btn-sm' inverted color='red' onClick={this.props.onClickInstagram}>Instagram</button>
        <button className='btn btn-default btn-sm' inverted color='blue' onClick={this.props.onClickTwitter}>Twitter</button>
        <button className='btn btn-default btn-sm' inverted color='orange' onClick={this.props.onClickContentful}>CMS</button>
        <button className='btn btn-default btn-sm' inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Computer Gigs</button>
        <button className='btn btn-default btn-sm' inverted color='purple' onClick={this.props.onClick_getCraigslistJobs}>CL Event Gigs</button>
      </div>
    )
  }
}

export default ButtonMenu
