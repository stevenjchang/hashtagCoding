import React from 'react'
import Footer from './Footer.js'
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'

// import CraigslistList from './CraigslistList.jsx'
import CraigslistList from './redux_components/CraigslistList'

import Links from './Links.jsx'
import Menubar from './MenuBar.jsx'
import SubmitLink from './SubmitLink.jsx'

import Craigslist from './../containers/Craigslist.jsx'
import Twitter from './../containers/Twitter'

const App = () => (
  <div>
    <Menubar />
    <Twitter />
    <Craigslist />
    <Links />
    <Craigslist /> 
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SubmitLink />
  </div>
)

export default App
