import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { BiBoltCircle, BiFile, BiImage, BiUser, BiMicrophone, BiUpArrowAlt } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaSlack, FaGoogle, FaAws, FaMicrosoft, FaDocker, FaGithub, FaGitlab, FaAtlassian } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";


const icons = [
  { Component: FaSlack, name: "Slack" },
  { Component: FaGoogle, name: "Google" },
  { Component: FaAws, name: "AWS" },
  { Component: FaMicrosoft, name: "Microsoft" },
  { Component: FaDocker, name: "Docker" },
  { Component: FaGithub, name: "GitHub" },
  { Component: FaGitlab, name: "GitLab" },
  { Component: FaAtlassian, name: "Atlassian" }
];

const Experience = () => {
  return (
    <Container>
      <div
        fluid
        className="text-center py-5 d-flex flex-column justify-content-center align-items-center"
      // style={{ background: "#fdf8f2"}}
      >
        <div style={{ paddingBottom:"50px" }}>
          <Navbar />

        </div>
        {/* , height: "100vh"  */}
        <Row>
          <Col>
            <h2
              className="fw-bold"
              style={{
                fontSize: "2.5rem",
                position: "relative",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1rem",
                  color: "#E06666",
                  fontWeight: "bold",
                  letterSpacing: "-2px",
                }}
              >
                &gt; &gt; &gt;
              </span>
              Experience it now
              <span
                style={{
                  position: "absolute",
                  right: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1rem",
                  color: "#E06666",
                  fontWeight: "bold",
                  letterSpacing: "-2px",
                }}
              >
                &lt; &lt; &lt;
              </span>
            </h2>

            {/* <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>Experience it now</h2><br></br> */}
            <p className="text-muted" style={{ fontSize: "1.2rem" }}>
              Try Gcore Inference at the Edge for yourself using our playground.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <div
            className="d-flex gap-1 p-1"
            style={{
              background: "linear-gradient(to right, #f8d7da, #fdf8f2, #d1ecf1)",
              borderRadius: "50px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "15px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {icons.map(({ Component, name }, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "50%",

                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px"
                }}
              >
                <Component size={25} color="#ff5722" title={name} />
              </div>
            ))}
          </div>
        </Row>
      </div>

      <div className="text-center mt-5 position-relative px-3 px-md-5">
        {/* Main Card */}
        <div className="p-4 p-md-5 rounded shadow-lg main-card bg-white position-relative" style={{ overflow: "hidden" }}>

          {/* Centered Half-Circle */}
          <div style={{ height: "100px" }}>
            <div
              className="d-flex flex-column align-items-center justify-content-center position-absolute"
              style={{
                height: "150px",
                width: "330px",
                borderTopLeftRadius: "150px",
                borderTopRightRadius: "150px",
                background: "linear-gradient(to bottom, rgb(228, 240, 248), #fafafa)",
                textAlign: "center",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <br />
              <br />
              <BiBoltCircle size={40} color="orange" style={{ marginBottom: "10px" }} />
              <h3>Discover the AI Realm</h3>
            </div>
          </div>
          <br />
          <br />
          <br />
         
          {/* Features Section */}
          <Row className="mt-5 pt-3">
            <Col md={6} className="mb-3">
              <Card className="p-1 border-light shadow-sm" >
                <Card.Body className="d-flex align-items-center">
                  <BiFile size={25} color="green" className="me-2" />
                  <div style={{ textAlign: "left" }}>
                    <h6 className="mb-1">Text Generate</h6>
                    <p className="small">A white rabbit on a black Harley Davidson riding down a desert road</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="p-1 border-light shadow-sm ">
                <Card.Body className="d-flex align-items-center">
                  <BiImage size={25} color="gold" className="me-2" />
                  <div style={{ textAlign: "left" }}>
                    <h6 className="mb-1">Generate Image</h6>
                    <p className="small">A white rabbit on a black Harley Davidson riding down a desert road</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="p-1 border-light shadow-sm ">
                <Card.Body className="d-flex align-items-center">
                  <BiUser size={25} color="blue" className="me-2" />
                  <div style={{ textAlign: "left" }}>
                    <h6 className="mb-1">Avatar Generate</h6>
                    <p className="small">A white rabbit on a black Harley Davidson riding down a desert road</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-3">
              <Card className="p-1 border-light shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <BiMicrophone size={25} color="purple" className="me-2" />
                  <div style={{ textAlign: "left" }}>
                    <h6 className="mb-1">Speech Recognition</h6>
                    <p className="small">A white rabbit on a black Harley Davidson riding down a desert road</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f4f4f4",
              borderRadius: "25px",
              padding: "10px 15px",
              width: "100%",

              margin: "20px auto",
            }}
          >
            <Form.Control
              type="text"
              placeholder="A white rabbit on a black Harley Davidson riding down a desert road"
              style={{
                border: "none",
                background: "transparent",
                flexGrow: 1,
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "5px",
              }}
            >
              <BiUpArrowAlt size={20} />
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-muted small mt-2">
            Free Research Preview. May produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
