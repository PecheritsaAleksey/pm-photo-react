import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import About from "./components/About/About";
import Price from "./components/Price/Price";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Login from "./components/Admin/Auth/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/price" component={Price} />
          <Route path="/wedding/:name" component={Gallery} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
