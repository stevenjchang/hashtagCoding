import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Image } from 'semantic-ui-react'
import CraigslistListItem from './CraigslistListItem'

const CraigslistList = ({ list, onButtonClick }) => {
  let renderedList = list[0] ? list[0] : [];
  return (
    <div>
      <Button inverted color='purple' onClick={onButtonClick}>onButtonClick</Button>
      <Grid centered={true} divided='vertically'>
        <Grid.Row columns={3} stretched={true} textAlign={'center'}>
          {renderedList.map((item, i) => {
            return (
              <Grid.Column>
                <CraigslistListItem item={item} key={i}></CraigslistListItem>
              </Grid.Column>)}
          )}
        </Grid.Row>
      </Grid>
    </div>
  )
}



// CraigslistList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default CraigslistList
