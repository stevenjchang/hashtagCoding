import { combineReducers } from 'redux'
import todos from './todos.jsx'
import visibilityFilter from './visibilityFilter.jsx'
import instagram from './instagram'
// import { routerReducer } from 'react-router-redux'

import apiCall from './apiCall.jsx'

const todoApp = combineReducers({
  apiCall,
  todos,
  visibilityFilter,
  instagram
  // routing: routerReducer
})

export default todoApp
