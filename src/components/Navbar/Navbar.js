import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar py-0 px-0"
      style={{ borderRadius: "16px" }}
    >
      <Container className="px-1">
        <Navbar.Brand href="#home">
          <img
            src="https://placehold.co/30x30/orange/orange"
            alt="Logo"
            className="d-inline-block align-top rounded-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavDropdown
              title={<span className="me-2">Products</span>}
              id="products-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="me-2">Pricing</span>}
              id="products-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Price 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Price 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Price 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={<span className="me-2">Resources</span>}
              id="resources-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Resource 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Resource 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resource 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="me-2">Partners</span>}
              id="partners-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Partner 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Partner 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Partner 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="me-2">Why Gcore</span>}
              id="why-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Reason 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Reason 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reason 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant="light"
            size="sm"
            className="rounded-3 ms-lg-3 my-2 my-lg-0"
          >
            Sign up for free
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
