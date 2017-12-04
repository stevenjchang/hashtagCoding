const contentful = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTENTFUL_FEED':
      return [
        action.data,
      ];
    default:
      return state;
  }
};

export default contentful;
