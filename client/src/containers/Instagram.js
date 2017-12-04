import { connect } from 'react-redux';
import { getInstagramFeed } from '../actions';
import InstagramList from '../components/InstagramList';

const mapStateToProps = (state) => {
  return {
    images: state.instagram,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(getInstagramFeed()),
  };
};

const Instagram = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InstagramList);

export default Instagram;
