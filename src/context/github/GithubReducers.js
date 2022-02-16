const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
