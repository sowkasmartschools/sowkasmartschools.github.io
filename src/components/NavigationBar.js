import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Button, Form, FormControl, Container, Col} from 'react-bootstrap';
import Logo from './../img/logo.png';
function NavigationBar() {
    const navigationBarStyle = {
      backgroundColor: '#FFFFFF',
      // color: '#FFFFFF'
    };  
    return (
      <div>
        <Navbar variant="light" expand="lg" sticky="top" className="justify-content-between" style={navigationBarStyle}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="auto"
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
                <NavDropdown.Item><Link to="/forSchools">For Schools</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/generalAndHigher">General &amp; Higher</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/business">Business</Link></NavDropdown.Item>
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