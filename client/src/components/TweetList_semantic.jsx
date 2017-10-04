import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Tweet_semantic from './Tweet_semantic.jsx'

const TweetList_semantic = ({images}) => {
  let imagesComponent = <div>before</div>;
  if (images) {
    imagesComponent = (
      <div>
        <Grid centered={true}> 
          <Grid.Row columns={3} divided={true} stretched={true} textAlign={"right"}>
          {images.map((item, i) => {
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
