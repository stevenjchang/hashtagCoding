import { connect } from 'react-redux'
import { getCraigslistJobs } from '../actions'
import CraigslistJobs_List from '../components/CraigslistJobs_List'

const mapStateToProps = state => {
  return {
    list: state.craigslistJobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick_getCraigslistJobs: (jobType, jobCategory) => {
      dispatch(getCraigslistJobs(jobType, jobCategory))
    }
  }
}

const CraigslistJobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CraigslistJobs_List)

export default CraigslistJobsContainer
