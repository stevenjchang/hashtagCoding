import { connect } from 'react-redux'
import { getCraigslistFeed, getTwitterFeed } from '../actions'
import ButtonMenu from '../components/ButtonMenu'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCraigslist: () => dispatch(getCraigslistFeed()),
    onClickTwitter: () => dispatch(getTwitterFeed())
  }
}

const Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonMenu)

export default Button
