import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";

//function logger(obj, next, action)

const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      //middleware code
      console.log("Action_type = ", action.type);
      next(action);
    };
  };
};

const store = createStore(combineReducers, applyMiddleware(logger));
console.log("store :: ", store);
console.log("Before State :: ", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
