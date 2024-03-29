import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./Reducers";

const initialState = {};
const middleware = [thunk];
const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store;

if (ReactReduxDevTools) {
  store = createStore(
    rootReducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
