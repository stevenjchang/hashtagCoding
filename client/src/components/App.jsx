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

import { connect } from 'react-redux'
import { getCraigslistFeed, getTwitterFeed } from '../actions'

import ButtonMenu from '../containers/ButtonMenu'

const App = ({onClickCraigslist, onClickTwitter}) => (
  <div>
    <Menubar />
    <ButtonMenu />

    <Twitter />
    <Craigslist />
    <Links />
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SubmitLink /> */}
  </div>
)

export default App
