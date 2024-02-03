import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import backgroundColor from "./counter/backgroundColor";
import todoReducer from "./todo/todoReducer";
import studentReducer from "./student/studentReducer";

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  backgroundColor: backgroundColor,
  todo: todoReducer,
  student: studentReducer,
});

// export default
export default rootReducer;
