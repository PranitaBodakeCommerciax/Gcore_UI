import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import "./Global_Network.css";  // Import the CSS file

function Global_Network() {
  return (
    <div className="main-container">
      <Container className="hero-section text-center">
        <div className="navbar-container">
          <Navbar />
        </div>

        <Button className="custom-button">
          <span >🌍</span>&nbsp;&nbsp; Global Network
        </Button><br></br><br></br><br></br>

        <h1 >
          A truly global network <br /> for lightning-fast inference
        </h1>
        <p className="hero-text">
          <br />
          Gcore global network consists of more than 160 locations, <br /> allowing you
          to reach your users anywhere in the world.
        </p>
      </Container>
    </div>
  );
}

export default Global_Network;
