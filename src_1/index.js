import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";

import notes from "./ReduxReducers/notes";


let store_notes = createStore(
  notes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <App store_notes={store_notes}/>,
  document.getElementById("root")
);
