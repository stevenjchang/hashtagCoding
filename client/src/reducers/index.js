import { combineReducers } from 'redux'
import todos from './todos.jsx'
import visibilityFilter from './visibilityFilter.jsx'
// import { routerReducer } from 'react-router-redux'

import apiCall from './apiCall.jsx'

const todoApp = combineReducers({
  apiCall,
  todos,
  visibilityFilter,
  // routing: routerReducer
})

export default todoApp
