import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import './../css/Jumbotron_SSS.css';
function Jumbotron_SSS() {
    return (
      <div>
        <Jumbotron fluid className='jumbotron_style'>
            <Container>
            <br /><br /><br />
                <h1 style={{color: "#0F0C89"}}>Don't you think honing your skills in this competitive world is the only way to Succeed?</h1>
                <p style={{color: "#0F0C89"}}>
                Our unique and distinctive programs makes the children to develop their skills in a smart way.
                <Button variant="link"><Link to="/contact">Contact Us</Link></Button>
                </p>
                <br /><br /><br />
            </Container>
        </Jumbotron>
      </div>
    );
  }
  
  export default Jumbotron_SSS;
  