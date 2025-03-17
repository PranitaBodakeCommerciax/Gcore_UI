import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import './Model_Serving.css';



const cardData = [
  {
    title: "IT / Technology",
    items: [
      "Generative AI applications",
      "Chatbots and virtual assistants",
      "AI tools for software engineers",
      "Data augmentation",
    ],
  },
  {
    title: "Retail",
    items: [
      "Smart grocery with self-checkout",
      "Real-time user behavior analysis",
    ],
  },
  {
    title: "Automotive",
    items: [
      "Fast response to road conditions",
      "Advanced driver assistants",
      "Vehicle personalization",
    ],
  },
  {
    title: "Gaming",
    items: [
      "AI content and map generation",
      "AI bot real-time customization",
      "Real-time player analytics",
    ],
  },
  {
    title: "Hospitality",
    items: [
      "Personalized recommendations",
      "Smart inventory management",
      "Efficiency improvements",
    ],
  },
  {
    title: "Manufacturing",
    items: [
      "Real-time defect detection",
      "Rapid response feedback",
      "AI tools for engineers",
      "Prevention of bottlenecks",
    ],
  },
];

const Model_Serving = () => {
  return (
    <Container className="flexible-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="text-center">
        <Badge className="badge-custom">
          <i className="bi bi-box"></i> Model Serving, Your Way
        </Badge>
        <h1 className="heading">
          A flexible solution for
          <br />
          diverse use cases
        </h1>
      </div>
      <div className="card-container">
        <Row className="g-4">
          {cardData.map((card, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card style={{height:"200px",textAlign:"left"}}>
                <Card.Body>
                  <Card.Title className="card-title-custom">
                    {card.title}
                  </Card.Title>
                  <ul className="card-list">
                    {card.items.map((item, i) => (
                      <li key={i}>
                        <span>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Model_Serving;
