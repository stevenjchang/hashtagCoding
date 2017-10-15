import axios from 'axios'

export const getCraigslistFeed = (dispatch) => {
  return dispatch => axios.get('/craigslist_scraper')
    .then(res => {
      console.log('res2 =>', res) 
      return res
    })
    .then(
      data => dispatch({ type: 'GET_CRAIGSLIST_FEED', data}),
      err => dispatch({ type: 'GET_CRAIGSLIST_FEED_ERROR', err })
    )
}

export const getTweeterFeed = () => {
  return {
    type: 'GET_TWITTER_FEED'
  }
}
