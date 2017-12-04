import { connect } from 'react-redux';
import { getJobs } from '../actions';
import JobList from '../components/JobList';

const mapStateToProps = (state) => {
  return {
    list: state.jobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGetJobs: () => {
      dispatch(getJobs());
    },
  };
};

const JobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobList);

export default JobsContainer;
