import { connect } from 'react-redux'
import { getContentfulFeed, getCraigslistFeed, getCraigslistJobs, getInstagramFeed, getJobs, getTwitterFeed } from '../actions'
import ButtonMenu from '../components/ButtonMenu'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContentful: () => dispatch(getContentfulFeed()),
    onClickCraigslist: () => dispatch(getCraigslistFeed()),
    onClick_getCraigslistJobs: () => dispatch(getCraigslistJobs()),
    onClickInstagram: () => dispatch(getInstagramFeed()),
    onClickGetJobs: () => dispatch(getJobs()),
    onClickTwitter: () => dispatch(getTwitterFeed())
  }
}

const Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonMenu)

export default Button
