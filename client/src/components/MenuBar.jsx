import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class MenuBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted color='blue'>
        <Menu inverted secondary color='blue' inverted widths={7}>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}

export default MenuBar
