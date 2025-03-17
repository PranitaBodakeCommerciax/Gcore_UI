import React from "react";
import { Container } from "react-bootstrap";
import "./AIChipAnimation.css";

const AIChipAnimation = () => {

  return (

    <Container className="ai-chip-container">
      <div className="ai-chip">
        <div className="chip-core">AI</div>
        <div className="chip-lines">
          <span className="glow-line top"></span>
          <span className="glow-line bottom"></span>
          <span className="glow-line left"></span>
          <span className="glow-line right"></span>
        </div>
        <div className="connected-icons">
          <div className="icon icon-top-left"></div>
          <div className="icon icon-top-right"></div>
          <div className="icon icon-bottom-left"></div>
          <div className="icon icon-bottom-right"></div>
        </div>
      </div>
    </Container>
  );
};

export default AIChipAnimation;




