import axios from 'axios'
import client from '../../../contentful.config.js'

export const getContentfulFeed = (dispatch) => {
  return dispatch => client.getEntries({content_type: 'links'})
    .then(res => res.items)
    .then(
      data => dispatch({ type: 'GET_CONTENTFUL_FEED', data }),
      err => dispatch({ type: 'GET_CONTENTFUL_FEED_ERROR', err })
    )
}

export const getCraigslistFeed = (dispatch) => {
  return dispatch => axios.get('/craigslist')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_CRAIGSLIST_FEED', data }),
      err => dispatch({ type: 'GET_CRAIGSLIST_FEED_ERROR', err })
    )
}

export const getInstagramFeed = (dispatch) => {
  return dispatch => axios.get('/images/instagram')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_INSTAGRAM_FEED', data }),
      err => dispatch({ type: 'GET_INSTAGRAM_FEED_ERROR', err })
    )
}

export const getTwitterFeed = (dispatch) => {
  return dispatch => axios.get('/images/twitter')
    .then(res => res)
    .then(
      data => dispatch({ type: 'GET_TWITTER_FEED', data }),
      err => dispatch({ type: 'GET_TWITTER_FEED_ERROR', err })
    )
}

export const ToggleCraigslistItem = (id) => {
  return dispatch => dispatch({type: 'TOGGLE_SHOW_HIDE', id})
}
