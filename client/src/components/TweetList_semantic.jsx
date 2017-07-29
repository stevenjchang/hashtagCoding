import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Tweet_semantic from './Tweet_semantic.jsx'

const TweetList_semantic = ({images}) => {
  let imagesComponent = <div>before</div>;
  if (images) {
    imagesComponent = (
      <div>
         <Grid> 
        <Grid.Row columns={3}>
        
        {images.map((item, i) => {
          return (<Grid.Column>
          {/* <Image src={item.image} key={i}/> */}
          <Tweet_semantic image={item.image} key={i} />
          </Grid.Column>
          )}
        )}
        
        </Grid.Row>
         </Grid> 
      </div>
    )
  }
  

  return imagesComponent
  
}

export default TweetList_semantic
