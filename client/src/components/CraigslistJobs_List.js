import React from 'react'
import { Grid } from 'semantic-ui-react'
import CraigslistJobs_ListItem from './CraigslistJobs_ListItem'

const CraigslistJobs_List = ({ list }) => {
  let renderedList = list ? list : [];
  return (
    <Grid centered={true} divided='vertically'>
      <Grid.Row columns={1} stretched={true} textAlign={'left'}>
        {renderedList.map((item, i) => {
          if (item.show) {
            return (
              <Grid.Column key={i}>
                <CraigslistJobs_ListItem item={item} />
              </Grid.Column>
            )
          }
        })}
      </Grid.Row>
    </Grid>
  )
}

export default CraigslistJobs_List
