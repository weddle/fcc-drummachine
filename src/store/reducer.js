import * as actionTypes from "./actionTypes";

const initialState = {
  display: "NULL"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_SET:
      return state;
    default:
      return state;
  }
};

export default reducer;
