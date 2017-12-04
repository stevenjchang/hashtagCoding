const craigslist = (state = [], action) => {
  switch (action.type) {
    case 'GET_CRAIGSLIST_FEED':
      return [
        action.data.data,
      ];
    case 'TOGGLE_SHOW_HIDE':
      return state.map((listing, index) => {
        return listing.map((item, i) => {
          if (item.id === action.id) {
            return Object.assign({}, item, {
              show: !item.show,
            });
          }
          return item;
        });
      });
    default:
      return state;
  }
};

export default craigslist;
