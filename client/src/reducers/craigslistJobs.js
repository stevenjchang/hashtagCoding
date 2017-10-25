const craigslistJobs = (state = [], action) => {
  switch (action.type) {

    case 'GET_CRAIGSLIST_JOBS':
      return action.data.data

    default:
      return state
      
  }
}

export default craigslistJobs
