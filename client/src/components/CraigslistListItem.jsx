import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CraigslistListItem = ({item}) => {
  if (item.images) {

  }
  return (
    <Card.Group>
    <Card fluid={true}>
      <Card.Content>
      <h3>{item.title}</h3>
      <p>{item.neighborhood} ~ <span style={{color: "red"}}>{item.price}</span></p>
      {(item.images) ? <img src={'https://images.craigslist.org/' + item.images.split(',')[0].substring(2) + '_300x300.jpg'}></img> : <p>No image</p>}
      <a href={item.href}><p>link</p></a>
      <br></br>
      </Card.Content>
    </Card>
    </Card.Group>
  )
}

export default CraigslistListItem;
