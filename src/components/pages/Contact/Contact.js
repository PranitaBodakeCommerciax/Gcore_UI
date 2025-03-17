import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Navbar/Navbar";
import "./Contact.css"; // Import CSS

const Contact = () => {
  return (
    <>
      <Container className="contact-container">
        <Navbar />
        <div className="contact-wrapper">
          <div className="contact-box">
            <h1 className="contact-title">Contact us to discuss your project</h1>
            <p className="contact-text">
              Get in touch with us, and we’ll guide you through running your ML model
              on Gcore<br></br> Inference at the Edge. Together, we’ll explore how our service
              can<br></br> benefit your end users.
            </p>
            <button className="btn btn-light mt-4 contact-btn">Talk to an expert</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
