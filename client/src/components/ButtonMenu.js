import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonMenu = ({ onClickCraigslist, onClickTwitter }) => (
  <div>
    <Button inverted color='purple' onClick={onClickCraigslist}>CLL</Button>
    <Button inverted color='blue' onClick={onClickTwitter}>T</Button>
    <h3>is it work</h3>
  </div>
)

export default ButtonMenu
