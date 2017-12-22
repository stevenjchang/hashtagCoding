import { connect } from 'react-redux';
import { getContentfulFeed } from '../actions';
import ContentfulList from '../components/ContentfulList';

const mapStateToProps = (state) => {
  return {
    links: state.contentful,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(getContentfulFeed()),
  };
};

const Contentful = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentfulList);

export default Contentful;
