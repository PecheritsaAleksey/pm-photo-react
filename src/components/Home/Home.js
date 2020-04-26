import React from "react";
import Previews from "../Gallery/Previews/Previews";
import { Image } from "react-bootstrap";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const Home = () => {
  return (
    <Auxiliary>
      <Image src={require("../../static/5rpQb7wPCgQ.jpg")} fluid/>
      <Previews />
    </Auxiliary>
  );
};

export default Home;
