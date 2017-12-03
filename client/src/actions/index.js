import axios from 'axios'

export const getContentfulFeed = (dispatch) => {
  return dispatch => axios.get('/contentful')
    .then(res => res.items)
    .then(
      data => dispatch({ type: 'GET_CONTENTFUL_FEED', data }),
      err  => dispatch({ type: 'GET_CONTENTFUL_FEED_ERROR', err })
    )
}

export const getCraigslistFeed = (dispatch) => {
  return dispatch => axios.get('/craigslist')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_CRAIGSLIST_FEED', data }),
      err  => dispatch({ type: 'GET_CRAIGSLIST_FEED_ERROR', err })
    )
}

export const getInstagramFeed = (dispatch) => {
  return dispatch => axios.get('/images/instagram')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_INSTAGRAM_FEED', data }),
      err  => dispatch({ type: 'GET_INSTAGRAM_FEED_ERROR', err })
    )
}

export const getTwitterFeed = (dispatch) => {
  return dispatch => axios.get('/images/twitter')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_TWITTER_FEED', data }),
      err  => dispatch({ type: 'GET_TWITTER_FEED_ERROR', err })
    )
}

export const ToggleCraigslistItem = (id, showStatus) => {
  return dispatch => axios.post('/craigslist/toggle_post/'+id, {showStatus})
    .then(res => res)
    .then(
      data => dispatch({ type: 'TOGGLE_SHOW_HIDE', id }),
      err  => dispatch({ type: 'TOGGLE_SHOW_HIDE_ERROR', err })
    )

  dispatch({type: 'TOGGLE_SHOW_HIDE', id})
}

export const getCraigslistJobs = (jobType, jobCategory) => {
  return dispatch => axios.get('/craigslist/jobs', {jobType, jobCategory})
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_CRAIGSLIST_JOBS', data }),
      err  => dispatch({ type: 'GET_CRAIGSLIST_JOBS_ERROR', err})
    )
}

export const getJobs = () => {
  return dispatch => axios.get('/glassdoor/jobs')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_JOBS', data}),
      err => dispatch({ type: 'GET_JOBS_ERROR', err})
    )
}
