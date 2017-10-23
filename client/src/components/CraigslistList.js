import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import CraigslistListItem from './CraigslistListItem'

const CraigslistList = ({ list, onButtonClick, toggleShowHide }) => {
  let renderedList = list[0] ? list[0] : [];
  return (
      <Grid centered={true} divided='vertically'>
        <Grid.Row columns={3} stretched={true} textAlign={'center'}>
          {renderedList.map((item, i) => {
            return (
              <Grid.Column key={i}>
                <CraigslistListItem item={item} key={i} toggleShowHide={toggleShowHide} />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
  )
}

export default CraigslistList
