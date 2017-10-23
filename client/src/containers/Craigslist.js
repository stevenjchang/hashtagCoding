import { connect } from 'react-redux'
import { getCraigslistFeed, ToggleCraigslistItem } from '../actions'
import CraigslistList from '../components/CraigslistList'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = state => {
  return {
    list: state.craigslist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(getCraigslistFeed())
    },
    toggleShowHide: (id) => {
      dispatch(ToggleCraigslistItem(id))
    }
  }
}

const Craigslist = connect(
  mapStateToProps,
  mapDispatchToProps
)(CraigslistList)

export default Craigslist
