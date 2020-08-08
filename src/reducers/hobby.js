const initialState = {
  list: [],
  activeID: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      break;
    }

    case "SET_ACTIVE_HOBBY": {
      break;
    }

    default:
      return state;
  }
};

export default hobbyReducer;
