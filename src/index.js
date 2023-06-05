import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// import store from "./redux/Reducer/ProductReducer"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
