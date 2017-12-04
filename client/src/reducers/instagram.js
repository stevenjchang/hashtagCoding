const instagram = (state = [], action) => {
  switch (action.type) {
    case 'GET_INSTAGRAM_FEED':
      return [
        action.data.data,
      ];
    default:
      return state;
  }
};

export default instagram;
