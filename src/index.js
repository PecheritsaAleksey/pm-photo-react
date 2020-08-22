import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import firebaseApp from "./firebaseApp";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

firebaseApp.analytics();

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
