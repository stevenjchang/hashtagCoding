import react from 'react'
import { Grid } from 'semantic-ui-react'
import CraigslistJobs_ListItem from './CraigslistJobs_ListItem'

const CraigslistJobs_List = ({ }) => {
  return (
    <Grid centered={true} divided='vertically'>
      <Grid.Row columns={3} stretched={true} textAlign={'center'}>
        <CraigslistJobs_ListItem />
      </Grid.Row>
    </Grid>
  )
}

export default CraigslistJobs_List
