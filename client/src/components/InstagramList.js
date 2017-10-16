import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Image } from 'semantic-ui-react'
import InstagramListItem from './InstagramListItem'

const InstagramList = ({ images }) => {
  let renderedList = images[0] ? images[0].data : [];
  
  return (
    <div>
      <Grid centered={true} divided='vertically'>
        <Grid.Row columns={3} stretched={true} textAlign={'center'}>
          {renderedList.map((item, i) => {
            return (
              <Grid.Column>
                <InstagramListItem image={item.images.low_resolution.url} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default InstagramList
