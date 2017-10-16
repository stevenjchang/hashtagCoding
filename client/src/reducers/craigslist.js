const craigslist = (state = [], action) => {
  switch (action.type) {
    case 'GET_CRAIGSLIST_FEED':
      return [
        action.data.data
      ]
    default: 
      return state
  }
}

export default craigslist
