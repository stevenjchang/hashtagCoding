import { connect } from 'react-redux';
import { getCraigslistFeed, ToggleCraigslistItem } from '../actions';
import CraigslistList from '../components/CraigslistList';

const mapStateToProps = (state) => {
  return {
    list: state.craigslist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(getCraigslistFeed());
    },
    toggleShowHide: (id, showStatus) => {
      dispatch(ToggleCraigslistItem(id, showStatus));
    },
  };
};

const Craigslist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CraigslistList);

export default Craigslist;
