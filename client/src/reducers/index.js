import { combineReducers } from 'redux';
import contentful from './contentful';
import craigslist from './craigslist';
import craigslistJobs from './craigslistJobs';
import instagram from './instagram';
import jobs from './jobs';
import twitter from './twitter';
// import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  contentful,
  craigslist,
  craigslistJobs,
  instagram,
  jobs,
  twitter,
  // routing: routerReducer
});

export default rootReducer;
