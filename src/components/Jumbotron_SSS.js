import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import './../css/Jumbotron_SSS.css';
function Jumbotron_SSS() {
    return (
      <div>
        <Jumbotron fluid className='jumbotron_style'>
            <Container>
                <h1 style={{color: "#ffffff"}}>Don't you think honing your skills in this competitive world is the only way to Succeed?</h1>
                <p style={{color: "#ffffff"}}>
                Our unique and distinctive programs makes the children to develop their skills in a smart way.
                </p>
                <Button variant="primary"><Link to="/contact">Contact Us</Link></Button>
            </Container>
        </Jumbotron>
      </div>
    );
  }
  
  export default Jumbotron_SSS;
  