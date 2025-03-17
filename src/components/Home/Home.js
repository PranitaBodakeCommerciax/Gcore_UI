import React from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./Home.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="background-style">
      {/* Grid Background */}
      <div className="grid-style"></div>

      {/* Navbar */}
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Navbar.Brand className="text-white fw-bold">GCORE</Navbar.Brand>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {["Products", "Pricing", "Resources", "Partners", "Why Gcore"].map((item, index) => (
                <motion.div key={index} initial="hidden" animate="visible" variants={fadeIn}>
                  <Nav.Link className="nav-link-custom" href="#">
                    {item}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
            <motion.div className="d-flex" initial="hidden" animate="visible" variants={fadeIn}>
              <Button variant="outline-light" className="btn-rounded mx-2">
                Contact us
              </Button>
              <Button className="btn-signup">Sign up for free</Button>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="text-center mt-5 pt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Button className="btn-beta">✨ Beta Release</Button><br></br>
              <h1 className="hero-title">Inference at the Edge</h1>
              <p className="hero-description">
                Boost your AI application's speed and efficiency globally by bringing inference closer to your users.
                Enjoy customization and cost-efficiency for a best-in-class inference experience.
              </p>
            </motion.div>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} className="mb-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button className="btn-primary-custom">Get started</Button>
                </motion.div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button className="btn-secondary-custom">Book a demo</Button>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
