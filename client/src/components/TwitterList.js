import React from 'react'
import { Grid, Button, Image } from 'semantic-ui-react'
import TwitterListItem from './TwitterListItem'

const TwitterList = ({ images, onButtonClick }) => {
  let renderedImages = images[0] ? images[0] : [];
  return (
    <div>
      <Grid centered={true}> 
        <Grid.Row columns={3} divided={true} stretched={true} textAlign={"right"}>
          {renderedImages.map((item, i) => {
            return (
              <Grid.Column>
                <TwitterListItem image={item.image} key={i} text={item.text} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid> 
    </div>
  )
}

export default TwitterList
