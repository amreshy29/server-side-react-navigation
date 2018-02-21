let initialState = {
  products: []
};
const PLPReducer = (state = initialState, action) => {

  switch (action.type){
      case "GET_DATA":
      case "SEARCH":
          return Object.assign({},state, action.data);
          return Object.assign({},state, action.data);
      default:
          return state;
  }
};

export  default PLPReducer;