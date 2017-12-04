import { connect } from 'react-redux';
import { getCraigslistJobs } from '../actions';
import CraigslistJobsList from '../components/CraigslistJobsList';

const mapStateToProps = (state) => {
  return {
    list: state.craigslistJobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick_getCraigslistJobs: (jobType, jobCategory) => {
      dispatch(getCraigslistJobs(jobType, jobCategory));
    },
  };
};

const CraigslistJobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CraigslistJobsList);

export default CraigslistJobsContainer;
