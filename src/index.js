import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducer/index";

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
