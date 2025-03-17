import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

const FlexibleSolution = () => {
  return (
    <Container  className="px-3">
      <div className="text-center mt-5">
        <Badge
          bg="dark"
          text="light"
          className="px-4 py-3 rounded-pill"
          style={{ fontSize: "1.3rem" }}
        >
          <i className="bi bi-box"></i> Model Serving, Your Way
        </Badge>
        <h1
          className="mt-3 fw-bold"
          style={{
            fontSize: "clamp(32px, 5vw, 60px)", // Responsive font size
            lineHeight: "1.2",
          }}
        >
          A flexible solution for
          <br />
          diverse use cases
        </h1>
      </div>
      <br />
      <div className="py-5">
        <Row className="g-4">
          {cardData.map((card, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm   text-start">
                <Card.Body>
                  <Card.Title
                    className="fw-bold"
                    style={{
                      fontSize: "clamp(20px, 2vw, 30px)", // Responsive title
                      marginBottom: "10px",
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <ul
                    style={{
                      fontSize: "clamp(14px, 1.5vw, 18px)",
                      paddingLeft: "2px",
                      lineHeight: "1.8",
                      listStyle: "none",
                    }}
                  >
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          color: "#6c757d",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "black",
                            fontSize: "18px",
                            marginRight: "8px",
                          }}
                        >
                          •
                        </span>
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

export default FlexibleSolution;
