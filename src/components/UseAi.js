import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faImage, faWaveSquare, faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faMicrosoft, faAws, faHackerNews, faGolang } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "white",
          backgroundImage: `
      linear-gradient(rgb(235, 235, 224) 1px, transparent 1px),
      linear-gradient(90deg, rgb(235, 235, 224) 1px, transparent 1px)
    `,
          backgroundSize: "70px 70px",
          height: "180px",
          width: "100%",
        }}
      >
        <div className="text-center my-3 pt-3">
          <h1 className="fw-bold">
            Use AI faster and more <br /> efficiently right on your device!
          </h1>
          <br /><br />
          <Row className="align-items-start">
            <Col lg={5} className="d-flex justify-content-center">
              <Card
                style={{
                  border: "1px solid black",
                  height: "450px",
                  width: "350px",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-end text-center">
                  <h5 style={{ whiteSpace: "nowrap" }}>
                    Try Gcore Inference At The Edge:
                  </h5>
                  <h5>Speed Up AI, Reduce Latency</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={7} className="text-lg-start text-center align-self-start mt-3">
              <h3 className="fw-bold">
                Gcore Inference at the Edge reduces the<br /> latency of your ML model output and improves <br />
                the performance of AI-enabled applications.
              </h3>
              <p className="text-muted">
                It's particularly useful for AI apps that need immediate processing <br />
                and minimal delay, like generative AI and real-time object <br /> detection.
              </p>

              <section className="mt-5">
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faGoogle} size="lg" className="me-2" style={{ color: "#EA4335" }} /> Text Generation
                  </Button>
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faMicrosoft} size="lg" className="me-2" style={{ color: "#00A4EF" }} /> Image Generation
                  </Button>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 mt-2">
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faAws} size="lg" className="me-2" style={{ color: "#FF9900" }} /> Speech Recognition
                  </Button>
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faHackerNews} size="lg" className="me-2" style={{ color: "#FF6600" }} /> Text Classification
                  </Button>
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faGolang} size="lg" className="me-2" style={{ color: "#00ADD8" }} /> Speed
                  </Button>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 mt-2">
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faMicrochip} size="lg" className="me-2" style={{ color: "#6A1B9A" }} /> Neural Processing
                  </Button>
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
                    <FontAwesomeIcon icon={faImage} size="lg" className="me-2" style={{ color: "#0073E6" }} /> Image Classification
                  </Button>
                  <Button variant="light" className="rounded-pill d-flex align-items-center p-3 shadow">
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

export default LandingPage;



