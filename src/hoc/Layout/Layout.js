import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

import "./Layout.css";

  
export default class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar />
        {this.props.children}
        <Footer/>
      </Auxiliary>
    );
  }
}
