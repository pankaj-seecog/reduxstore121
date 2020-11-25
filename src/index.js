import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import {Provider} from 'react-redux';
//named import createStore
//store uses reducer
//reducer contains 2 arguments 1.state of whole Store 2. action object
//action object contains 1.type 2.payload
let iniState = {
  count: 0
};
let rootReducer = (state = iniState, action) => {
  if (action.type == "INC") {
    return {
      count: state.count + 1
    };
  } else if (action.type == "DEC") {
    return {
      count: state.count - 1
    };
  } else if (action.type == "RESET") {
    return {
      count: 0
    };
  }
  return state;
};

let store = createStore(rootReducer);
console.log("The store is ", store);
console.log("The current state of application/storte is ", store.getState());

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById("root"));
