//NPM package
import React from "react";
import ReactDOM from "react-dom";

//Router Package
import { BrowserRouter as Router } from "react-router-dom";

//Provider package
import { Provider } from "react-redux";

// Component files
import App from "./App";

// Redux store
import store from "./redux/store";

// Css files
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


