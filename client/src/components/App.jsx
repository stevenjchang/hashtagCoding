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
import { Button } from 'semantic-ui-react'

const App = ({onClickCraigslist, onClickTwitter}) => (
  <div>
    <Menubar />
    <Button inverted color='purple' onClick={onClickCraigslist}>CL</Button>
    <Button inverted color='blue' onClick={onClickTwitter}>T</Button>
    <Twitter />
    <Craigslist />
    <Links />
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SubmitLink /> */}
  </div>
)

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCraigslist: () => dispatch(getCraigslistFeed()),
    onClickTwitter: () => dispatch(getTwitterFeed())
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppConnected
