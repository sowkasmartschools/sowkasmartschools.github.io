import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Button, Form, FormControl, Container, Col} from 'react-bootstrap';
import Logo from './../img/logo.png';
function NavigationBar() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand="lg" sticky="top" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="200"
              height="80"
              className="d-inline-block align-middle"
              alt="Sowka Smart Schools logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
              <NavDropdown title="Our Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="/forSchools">For Schools</NavDropdown.Item>
                <NavDropdown.Item href="/generalAndHigher">General &amp; Higher</NavDropdown.Item>
                <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Our Directors</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Form.Row className="d-flex align-items-end">
                <Col><FormControl type="text" placeholder="Search" className="mr-sm-2" /></Col>
                <Col><Button variant="outline-dark" type="Submit" disabled>Search</Button></Col>
              </Form.Row>
            </Form>
          </Navbar.Collapse>
          </Container>
        </Navbar>        
      </div>
    );
  }
  
  export default NavigationBar;  