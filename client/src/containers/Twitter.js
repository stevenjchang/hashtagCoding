import { connect } from 'react-redux';
import { getTwitterFeed } from '../actions';
import TwitterList from '../components/TwitterList';

const mapStateToProps = (state) => {
  return {
    images: state.twitter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(getTwitterFeed()),
  };
};

const Twitter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TwitterList);

export default Twitter;
