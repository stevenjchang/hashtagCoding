import { connect } from 'react-redux'
import { getTwitterFeed } from '../actions'
import TweetList from '../components/TweetList_semantic.jsx'

const mapStateToProps = state => {
  return {
    images: state.apiCall
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(getTwitterFeed());
    }
  }
}

const Twitter = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TweetList)

export default Twitter
