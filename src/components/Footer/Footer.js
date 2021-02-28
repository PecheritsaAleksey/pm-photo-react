import React from "react";
import { Image } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://vk.com/pmphotokrasnoyarsk">
          <Image className="widget" src={require("../../static/vk.png")} />
        </a>
        <a href="http://instagram.com/mariapokareva">
          <Image
            className="widget"
            src={require("../../static/instagram.png")}
          />
        </a>
      </div>
      <div className="developer">
          <p>Site by <a href="https://www.instagram.com/pecheritsa_alex/">Aleksey Pecheritsa</a></p>
      </div>
    </footer>
  );
};

export default Footer;
