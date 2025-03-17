import React from "react";
import './Footer.css';

import GuinnessLogo from '../../assets/img/guinness.png';
import EcoCertLogo from '../../assets/img/ecocert.png';
import CommerceLogo from '../../assets/img/commerce.png';
import MastercardLogo from '../../assets/img/mastercard.png';
import PayPalLogo from '../../assets/img/paypal.png';
import RupayLogo from '../../assets/img/rupay.png';
import VisaLogo from '../../assets/img/visa.png';
import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Atom as Tiktok,
  Globe,
} from "lucide-react";


function Footer() {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center py-5"
      style={{ backgroundColor: "#000" }}
    >


      <Container>
        <Row className="mb-5">
          <Col lg={4}>
            <div className="mb-4">
              <Globe size={40} color="white" />
              <h4 className="mt-2">GCORE</h4>
            </div>
            <p className="text-gray-400">
              Powerful solutions to help your business grow globally. Experience
              our superior performance, proven by the largest online businesses.
            </p>
            <div className="d-flex mt-4">
              <a href="#" className="me-3">
                <Linkedin className="social-icon" />
              </a>
              <a href="#" className="me-3">
                <Github className="social-icon" />
              </a>
              <a href="#" className="me-3">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="me-3">
                <Youtube className="social-icon" />
              </a>
              <a href="#" className="me-3">
                <Tiktok className="social-icon" />
              </a>
            </div>
          </Col>

          <Col lg={2} className="mt-5 mt-lg-0">
            <h5 className="mb-4">Products</h5>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link mb-2">
                CDN
              </a>
              <a href="#" className="footer-link mb-2">
                Hosting
              </a>
              <a href="#" className="footer-link mb-2">
                Streaming Platform
              </a>
              <a href="#" className="footer-link mb-2">
                Storage
              </a>
              <a href="#" className="footer-link mb-2">
                DDoS Protection
              </a>
              <a href="#" className="footer-link mb-2">
                Software Development
              </a>
              <a href="#" className="footer-link mb-2">
                Cloud
              </a>
              <a href="#" className="footer-link mb-2">
                IT Infrastructure Management
              </a>
            </div>
          </Col>

          <Col lg={2} className="mt-5 mt-lg-0">
            <h5 className="mb-4">Company</h5>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link mb-2">
                About
              </a>
              <a href="#" className="footer-link mb-2">
                Customers
              </a>
              <a href="#" className="footer-link mb-2">
                Case studies
              </a>
              <a href="#" className="footer-link mb-2">
                Careers
              </a>
              <a href="#" className="footer-link mb-2">
                Blog
              </a>
              <a href="#" className="footer-link mb-2">
                Press
              </a>
              <a href="#" className="footer-link mb-2">
                Legal information
              </a>
              <a href="#" className="footer-link mb-2">
                Site map
              </a>
            </div>
          </Col>

          <Col lg={2} className="mt-5 mt-lg-0">
            <h5 className="mb-4">Resources</h5>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link mb-2">
                Status page
              </a>
              <a href="#" className="footer-link mb-2">
                API Documentation
              </a>
              <a href="#" className="footer-link mb-2">
                Internet peering points
              </a>
              <a href="#" className="footer-link mb-2">
                Product Documentation
              </a>
              <a href="#" className="footer-link mb-2">
                Looking Glass
              </a>
              <a href="#" className="footer-link mb-2">
                Developer Tools
              </a>
            </div>
          </Col>

          <Col lg={2} className="mt-5 mt-lg-0">
            <h5 className="mb-4">Contact</h5>
            <div className="d-flex flex-column">
              <a href="tel:+35220880507" className="footer-link mb-2">
                + 352 208 80 507
              </a>
              <a href="mailto:sales@gcorelabs.com" className="footer-link mb-2">
                sales@gcorelabs.com
              </a>
              <div className="mt-4">
                <h5 className="mb-3">Contact</h5>
                <a
                  href="mailto:support@gcorelabs.com"
                  className="footer-link mb-2 d-block"
                >
                  support@gcorelabs.com
                </a>
                <a
                  href="mailto:info@gcorelabs.com"
                  className="footer-link mb-2 d-block"
                >
                  info@gcorelabs.com
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="certification-subscribe-section">
          <Row className="align-items-center ">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center">
                <img
                  src={GuinnessLogo}
                  alt="Guinness World Records"
                  className="certification-icon"
                />
                <img
                  src={EcoCertLogo}
                  alt="Eco Cert"
                  className="certification-icon"
                />
                <img
                  src={CommerceLogo}
                  alt="Made for Commerce"
                  className="certification-icon"
                />
              </div>
            </Col>
            <Col lg={4} className="mb-4 mb-lg-0">
              <h5 className="subscribe-title mb-0">
                Subscribe to discover the latest updates, news, and features
              </h5>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-lg-end subscribe-form">
                <div className="subscribe-input-group">
                  <input
                    type="email"
                    placeholder="Enter your E-mail"
                    className="subscribe-input"
                  />
                  <button className="subscribe-button">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="mt-5 border-secondary">
          <Col lg={8} className="mb-4 mb-lg-0">
            <p className="footer-bottom">
              This site is protected by reCAPTCHA. Google's{" "}
              <a href="#" className="footer-link">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="footer-link">
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <p className="footer-bottom">
              PG-Core Labs S.A. © 2015-2024 All rights reserved. Principal place
              of business and postal address: 2.-4, Rue Edmond Reuter, L-5326
              Contern, Luxembourg
            </p>
          </Col>
          <Col lg={4} className="payment-icons-container">
            <div className="payment-icons-wrapper">
              <img
                src={MastercardLogo}
                alt="Mastercard"
                className="payment-icon"
              />
              <img src={PayPalLogo} alt="PayPal" className="payment-icon" />
              <img
                src={RupayLogo}
                alt="Mastercard SecureCode"
                className="payment-icon"
              />
              <img src={VisaLogo} alt="Visa" className="payment-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
