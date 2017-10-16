import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonMenu = ({ onClickContentful, onClickCraigslist, onClickInstagram, onClickTwitter }) => (
  <div>
    <Button inverted color='purple' onClick={onClickCraigslist}>CraigsList</Button>
    <Button inverted color='red' onClick={onClickInstagram}>Instagram</Button>
    <Button inverted color='blue' onClick={onClickTwitter}>Twitter</Button>
    <Button inverted color='orange' onClick={onClickContentful}>CMS</Button>
  </div>
)

export default ButtonMenu
