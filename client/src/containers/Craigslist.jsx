import { connect } from 'react-redux'
import { getCraigslistFeed } from '../actions'
import CraigslistList from '../components/redux_components/CraigslistList'

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
    list: state.apiCall
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(getCraigslistFeed())
    }
  }
}

const Craigslist = connect(
  mapStateToProps,
  mapDispatchToProps
)(CraigslistList)

export default Craigslist
