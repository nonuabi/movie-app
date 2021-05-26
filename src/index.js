import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers";

const store = createStore(combineReducers);
console.log("store :: ", store);
console.log("Before State :: ", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
