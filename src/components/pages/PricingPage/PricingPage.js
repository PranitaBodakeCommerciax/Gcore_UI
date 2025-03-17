import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Cpu, MemoryStick as Memory, Star } from "lucide-react";
import "./PricingPage.css";

const plans = [
  {
    gpu: "1× NVIDIA L40S GPU",
    price: "€2.40",
    specs: [
      { icon: <Cpu size={16} />, text: "16 vCPU memory" },
      { icon: <Cpu size={16} />, text: "48GB GPU memory" },
      { icon: <Memory size={16} />, text: "23GB RAM" },
      { icon: <Star size={16} />, text: "4B-21B parameters" },
    ],
  },
  {
    gpu: "2× NVIDIA L40S GPU",
    price: "€9.30",
    specs: [
      { icon: <Cpu size={16} />, text: "32 vCPU" },
      { icon: <Cpu size={16} />, text: "96GB GPU memory" },
      { icon: <Memory size={16} />, text: "46GB RAM" },
      { icon: <Star size={16} />, text: "21B-41B parameters" },
    ],
  },
  {
    gpu: "2× NVIDIA L40S GPU",
    price: "€4.70",
    specs: [
      { icon: <Cpu size={16} />, text: "64 vCPU" },
      { icon: <Cpu size={16} />, text: "192GB GPU memory" },
      { icon: <Memory size={16} />, text: "92GB RAM" },
      { icon: <Star size={16} />, text: "41B-70B parameters" },
    ],
  },
];

const heading = "Use dedicated GPUs to scale custom models and production apps";

const headingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const PricingPage = () => {
  return (
    <div className="pricing-section">
      <Container>
        {/* Heading Animation */}
        <motion.h1
          className="text-center mb-5"
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
        >
          {heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnimation}
              style={{
                display: "inline-block",
                marginRight: "6px",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Pricing Cards */}
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="pricing-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="text-center">
                      <div className="gpu-title">{plan.gpu}</div>
                      <div className="price-text mt-4">
                        {plan.price}
                        <span className="price-subtext">/month</span>
                      </div>
                    </div>

                    <hr className="border-secondary" />

                    <ul className="list-unstyled mb-2 flex-grow-1">
                      {plan.specs.map((spec, i) => (
                        <li key={i} className="d-flex align-items-center mb-3">
                          <span className="me-2">{spec.icon}</span>
                          {spec.text}
                        </li>
                      ))}
                    </ul>

                    <hr className="border-secondary" />

                    <motion.button
                      whileHover={{ backgroundColor: "#e24820", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="custom-button w-100 mt-2 mb-2"
                    >
                      Order Now
                    </motion.button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Storage Text Animation */}
        <motion.div
          className="text-center mt-5"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="storage-text">
            Storage (Pod volume/container disk): 0.10 EUR for 1 GB per month
          </p>
          <p className="beta-warning">
            During the early beta period, Inference at the Edge is free! Until
            general availability, we recommend that you don't use it for
            mission-critical tasks or production environments.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default PricingPage;
