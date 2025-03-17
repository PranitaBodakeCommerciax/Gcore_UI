import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaDocker, FaCloud, FaMicrochip, FaServer, FaCube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import "./Product.css";  // Import the CSS file

const services = [  // Renamed from Product to services
  {
    icon: <FaMicrochip size={25} color="orangered" />, 
    title: "AI GPU Infrastructure", 
    description: [
      "Virtual Machines and Bare Metal servers with ",
      "A100 and H100 NVIDIA GPUs for LLM training and ",
      "high-performance computing",
    ],
  },
  {
    icon: <FaServer size={25} color="orangered" />, 
    title: "AI IPU Infrastructure", 
    description: [
      "Virtual and dedicated instances powered by ",
      "Graphcore AI processors designed to accelerate ", 
      "ML workloads",
    ],
  },
  {
    icon: <FaCube size={25} color="orangered" />, 
    title: "Container as a Service", 
    description: [
      "Serverless solution for running ",
      "containerized applications and ML models",
      " in the cloud",
    ],
  },
  {
    icon: <FaCode size={25} color="orangered" />, 
    title: "FastEdge", 
    description: [
      "Low-latency edge computing for deploying",
      "serverless applications",
    ],
  },
  {
    icon: <FaDocker size={25} color="orangered" />, 
    title: "Managed Kubernetes", 
    description: [
      "Fully managed Kubernetes clusters with ",
      "GPU worker node support for ",
      "AI/ML workloads",
    ],
  },
  {
    icon: <FaCloud size={25} color="orangered" />, 
    title: "Object Storage", 
    description: [
      "Scalable S3-compatible cloud storage",
      "for storing and retrieving any amount of",
      "data"
    ],
  },
];

const Product = () => {  // Renamed component to match export
  return (
    <Container fluid className="py-5 bg-black">
      <div>
        <Navbar />
      </div>
      <h2 className="text-white text-center mb-4" style={{ fontSize: "2rem" }}>
        Try other Gcore products
      </h2>
      <br />
      <Row className="gx-1 gy-4 justify-content-center">
        {services.map((service, index) => (
          <Col xl={4} lg={4} md={6} sm={12} xs={12} key={index} className="d-flex justify-content-center">
            <Card className="custom-card text-light border-0 text-center p-4">
              <div className="icon-container" style={{ textAlign: "left" }}>{service.icon}</div>
              <Card.Title className="mt-3" style={{ fontSize: "1.4rem" }}>{service.title}</Card.Title>
              <Card.Text className="text-secondary mt-2" style={{ fontSize: "1rem" }}>
                {service.description.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Card.Text><br></br><br></br><br></br>
              <a href="#" className="text-light learn-more" style={{ fontSize: "1rem" }}>
                Learn More &gt;
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;  // Fixed export
