const twitter = (state = [], action) => {
  switch (action.type) {
    case 'GET_TWITTER_FEED':
      return [
        action.data.data,
      ];
    default:
      return state;
  }
};

export default twitter;
