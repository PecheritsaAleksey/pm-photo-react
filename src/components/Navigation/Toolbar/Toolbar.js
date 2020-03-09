import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Toolbar.css";

const Toolbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Image src={require("../../../static/logo.png") }/>
        </Link>
      </div>
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto centred">
            <Link className="nav-link" to="/price">
              Price
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Toolbar;
