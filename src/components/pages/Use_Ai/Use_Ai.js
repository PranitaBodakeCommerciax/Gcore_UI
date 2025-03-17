import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faImage, faWaveSquare, faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faMicrosoft, faAws, faHackerNews, faGolang } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../Navbar/Navbar";
import "./Use_Ai.css"; // Importing external CSS

const Use_Ai = () => {
  return (
    <div>
      <Container className="landing-container">
        <Navbar />

        <div className="button-group">
          <button className="active-button">
            <span>🚀</span> What Is?
          </button>
          <button className="inactive-button">How It Works?</button>
        </div>

        <div className="text-center my-3 pt-3">
          <h1 className="fw-bold text-animation">
            Use AI faster and more <br /> efficiently right on your device!
          </h1>
          <br /><br />
          <Row className="align-items-start">
            <Col lg={5} className="d-flex justify-content-center">
            <Card
                style={{
                  position: "relative",
                  border: "1px solid black",
                  height: "450px",
                  width: "350px",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                  backgroundColor: "rgb(10, 5, 5)",
                  backgroundImage: `
          radial-gradient(circle at top left, rgba(255, 102, 51, 0.8), transparent 50%),
          linear-gradient(to right, rgba(10, 5, 5, 0.9), rgba(0, 0, 0, 0.8)),
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
        `,
                  backgroundSize: "cover, cover, 70px 70px, 70px 70px",
                  backgroundPosition: "center, center, center, center",
                  color: "white",
                  overflow: "hidden",
                }}
              >


                {/* Random small glowing dots */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      width: "1.5px",
                      height: "1.5px",
                      background: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
                    }}
                  ></div>
                ))}
                {/* Glowing Line Animations */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  {/* Horizontal Glowing Line (Right Direction) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "-10%",
                      width: "60px",
                      height: "2px",
                      background: "rgba(255, 102, 51, 0.9)",
                      boxShadow: "0 0 10px rgba(255, 102, 51, 0.9)",
                      animation: "glowRight 1s linear infinite",
                    }}
                  ></div>

                  {/* Horizontal Glowing Line (Left Direction) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-10%",
                      width: "60px",
                      height: "2px",
                      background: "rgba(255, 102, 51, 0.9)",
                      boxShadow: "0 0 10px rgba(255, 102, 51, 0.9)",
                      animation: "glowLeft 1s linear infinite",
                    }}
                  ></div>

                  {/* Vertical Glowing Line (Down Direction) */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-10%",
                      left: "25%",
                      width: "2px",
                      height: "60px",
                      background: "rgba(255, 102, 51, 0.9)",
                      boxShadow: "0 0 10px rgba(255, 102, 51, 0.9)",
                      animation: "glowDown 1s linear infinite",
                    }}
                  ></div>

                  {/* Vertical Glowing Line (Up Direction) */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-10%",
                      left: "75%",
                      width: "2px",
                      height: "60px",
                      background: "rgba(255, 102, 51, 0.9)",
                      boxShadow: "0 0 10px rgba(255, 102, 51, 0.9)",
                      animation: "glowUp 1s linear infinite",
                    }}
                  ></div>
                </div>

                <Card.Body className="d-flex flex-column justify-content-end text-center">
                  <h5 className="text-animation" style={{ whiteSpace: "nowrap", color: "white" }}>
                    Try Gcore Inference At The Edge:
                  </h5>
                  <h5 className="text-animation" style={{ color: "white" }}>
                    Speed Up AI,
                    Reduce Latency
                  </h5>
                </Card.Body>

                {/* Keyframe Animations */}
                <style>
                  {`
          @keyframes glowRight {
            0% { left: -10%; }
            100% { left: 110%; }
          }

           @keyframes glowLeft {
             0% { right: -10%; }
             100% { right: 110%; }
           }

           @keyframes glowDown {
             0% { top: -10%; }
             100% { top: 110%; }
           }

           @keyframes glowUp {
             0% { bottom: -10%; }
             100% { bottom: 110%; }
          }
        `}
                </style>
              </Card>

            </Col>

            <Col lg={7} className="text-lg-start text-center align-self-start mt-3">
              <h3 className="fw-bold text-animation">
                Gcore Inference at the Edge reduces the<br />
                latency of your ML model output and improves <br />
                the performance of AI-enabled applications.
              </h3>
              <p className="text-muted text-animation">
                It's particularly useful for AI apps that need immediate processing <br />
                and minimal delay, like generative AI and real-time object <br />
                detection.
              </p>

              <section className="mt-5">
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                  <Button variant="light" className=" motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faGoogle} size="lg" className="me-2" style={{ color: "#EA4335" }} /> Text Generation
                  </Button>
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faMicrosoft} size="lg" className="me-2" style={{ color: "#00A4EF" }} /> Image Generation
                  </Button>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 mt-2">
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faAws} size="lg" className="me-2" style={{ color: "#FF9900" }} /> Speech Recognition
                  </Button>
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faHackerNews} size="lg" className="me-2" style={{ color: "#FF6600" }} /> Text Classification
                  </Button>
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faGolang} size="lg" className="me-2" style={{ color: "#00ADD8" }} /> Speed
                  </Button>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 mt-2">
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faMicrochip} size="lg" className="me-2" style={{ color: "#6A1B9A" }} /> Neural Processing
                  </Button>
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faImage} size="lg" className="me-2" style={{ color: "#0073E6" }} /> Image Classification
                  </Button>
                  <Button variant="light" className="motion-button rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faWaveSquare} size="lg" className="me-2" style={{ color: "#26C6DA" }} /> Speech Recognition
                  </Button>
                </div>
              </section>

           

            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Use_Ai;
