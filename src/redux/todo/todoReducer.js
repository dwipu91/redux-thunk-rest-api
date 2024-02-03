import { TODO_ADD, TODO_DELETE, TODO_EIDET } from "./actionTypes";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];

    case TODO_DELETE:
      return state.filter((data) => data !== action.payload);

    case TODO_EIDET:
      return state.find((data) => data === action.payload);

    default:
      return state;
  }
};

// export defoult
export default todoReducer;
