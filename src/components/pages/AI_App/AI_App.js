import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import "./AI_App.css"; // Import the CSS file

const AI_App = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="hero-section">
        <Button className="ai-button">
          <span className="ai-icon">✨</span>
          &nbsp;&nbsp; AI Potential
        </Button><br></br>
        <h1 >Unleash your AI <br /> application's full potential</h1>
      </div>

      {/* Features Section */}
      <Container className="features-container">
        {/* First Row */}
        <Row className="gy-3">
          <Col lg={8}>
            <Card className="feature-card">
              <Card.Title>Low-latency global network</Card.Title>
              <Card.Text className="text-secondary">
                Minimize model response time with our <span className="text-white">160+ location CDN</span>,
                providing an average global latency of 30 ms.
              </Card.Text>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="feature-card">
              <Card.Title>Single end-point for all AI tasks</Card.Title>
              <Card.Text className="text-secondary">
                Gcore offers automated infrastructure management for AI applications while offering.
              </Card.Text>
            </Card>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="gy-3 mt-3">
          <Col md={6} lg={4}>
            <Card className="feature-card">
              <Card.Title>Data privacy and security</Card.Title>
              <Card.Text className="text-secondary">
                Use pre-trained foundational models from the Gcore ML Model Hub or your own trained models.
              </Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="feature-card">
              <Card.Title>Unlimited object storage</Card.Title>
              <Card.Text className="text-secondary">
                Use scalable <span className="text-white">S3-compatible</span> cloud storage that grows with your needs.
              </Card.Text>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="feature-card">
              <Card.Title>Pre-trained and custom ML models</Card.Title>
              <Card.Text className="text-secondary">
                Use pre-trained foundational models from the <span className="text-white">Gcore ML Model Hub</span> or your own trained models.
              </Card.Text>
            </Card>
          </Col>
        </Row>

        {/* Third Row */}
        <Row className="gy-3 mt-3">
          <Col lg={8}>
            <Card className="feature-card">
              <Card.Title>Model autoscaling</Card.Title>
              <Card.Text className="text-secondary">
                Set up autoscaling to handle load spikes. Use and pay for only the resources your model requires.
              </Card.Text>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="feature-card">
              <Card.Title>NVIDIA L40S GPUs</Card.Title>
              <Card.Text className="text-secondary">
                Boost model performance with the latest <span className="text-white">NVIDIA</span> accelerator, perfect for <span className="text-white">GenAI and LLM</span> inference.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AI_App;
