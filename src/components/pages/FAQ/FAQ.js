import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import './FAQ.css';
import Navbar from "../../Navbar/Navbar";

const faqData = [
  {
    id: "1",
    question: "What is AI inference?",
    answer:
      "It's particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.",
  },
  {
    id: "2",
    question:
      "What is the difference between AI inference at the edge and in the cloud?",
    answer:
      "Edge AI inference processes data locally on devices, while cloud inference happens on remote servers. Edge computing offers lower latency and better privacy, while cloud provides more computational power.",
  },
  {
    id: "3",
    question:
      "What are the key benefits of Gcore Inference at the Edge for end users?",
    answer:
      "Key benefits include reduced latency, improved privacy, lower bandwidth usage, and real-time processing capabilities.",
  },
  {
    id: "4",
    question: "Is Gcore Inference at the Edge suitable for AIoT systems?",
    answer:
      "Yes, Gcore Inference at the Edge is well-suited for AIoT systems, offering low-latency processing and reduced bandwidth requirements.",
  },
  {
    id: "5",
    question: "Why is the NVIDIA L40S GPU good for AI inference?",
    answer:
      "The NVIDIA L40S GPU offers exceptional performance for AI inference tasks, with optimized architecture for machine learning workloads.",
  },
];

function FAQ() {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div className="faq-section">
      <div style={{ paddingBottom: "50px" }}>
        <Navbar />

      </div>
      <Container>


        <h1 className="text-center mb-5">Frequently asked questions</h1>
        <Accordion
          activeKey={activeKey}
          onSelect={(key) => setActiveKey(key || "")}
          className="faq-accordion"
        >
          {faqData.map((item) => (
            <Accordion.Item
              key={item.id}
              eventKey={item.id}
              className="faq-item"
            >
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

export default FAQ;
