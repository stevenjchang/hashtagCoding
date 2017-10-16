import React from 'react'
import { Grid, Button, Image } from 'semantic-ui-react'
import Tweet_semantic from './Tweet_semantic.jsx'

const TweetList_semantic = ({ images, onButtonClick }) => {
  let renderedImages = images[0] ? images[0] : [];
  let imagesComponent = <div>before</div>;
  if (images) {
    imagesComponent = (
      <div>
        <Button inverted color='blue' onClick={onButtonClick}>Twitter</Button>
        <Grid centered={true}> 
          <Grid.Row columns={3} divided={true} stretched={true} textAlign={"right"}>
          {renderedImages.map((item, i) => {
            return (
              <Grid.Column>
                <Tweet_semantic image={item.image} key={i} text={item.text} />
              </Grid.Column>
            )
          })}
          </Grid.Row>
        </Grid> 
      </div>
    )
  }
  return imagesComponent
}

export default TweetList_semantic
