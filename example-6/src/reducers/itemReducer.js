// src / reducers / itemReducer.js
const initialState = {
  items: [],
}

let reducer = (state=initialState, action) => {
  if(action.type == "UPDATE_ITEMS") {
    let items = action.payload;
    state.items = items;
  }
  return state;
};

export default reducer;
