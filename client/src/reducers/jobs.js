const jobs = (state = [], action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return action.data.data;
    default:
      return state;
  }
};

export default jobs;
