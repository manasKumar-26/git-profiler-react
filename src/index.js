import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";
const Store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
