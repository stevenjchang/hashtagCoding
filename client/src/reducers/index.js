import { combineReducers } from 'redux'
import contentful from './contentful'
import craigslist from './craigslist'
import instagram from './instagram'
import twitter from './twitter'
// import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  contentful,
  craigslist,
  instagram,
  twitter
  // routing: routerReducer
})

export default rootReducer
