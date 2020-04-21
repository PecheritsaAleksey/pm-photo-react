import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as firebase from "firebase";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNMQxbh2_eUgTZtlnG5woStzOk6iVuW30",
  authDomain: "mariapokareva-92d0f.firebaseapp.com",
  databaseURL: "https://mariapokareva-92d0f.firebaseio.com",
  projectId: "mariapokareva-92d0f",
  storageBucket: "mariapokareva-92d0f.appspot.com",
  messagingSenderId: "474641122697",
  appId: "1:474641122697:web:fc7821d7c4a164b4408d58",
  measurementId: "G-S6PVN0J19H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
