import React from 'react'
import ButtonMenu from '../containers/ButtonMenu'
import Contentful from '../containers/Contentful'
import Craigslist from './../containers/Craigslist'
import Menubar from './MenuBar'
import Instagram from '../containers/Instagram'
import Twitter from './../containers/Twitter'

const App = () => (
  <div>
    <Menubar />
    <ButtonMenu />
    <Contentful />
    <Instagram />
    <Twitter />
    <Craigslist />
  </div>
)

export default App
