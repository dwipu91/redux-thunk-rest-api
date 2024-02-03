import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

// redux middleware
const middelware = [thunk];

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelware))
);

// export default
export default store;
