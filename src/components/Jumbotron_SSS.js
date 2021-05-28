import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import './../css/Jumbotron_SSS.css';
function Jumbotron_SSS() {
    return (
      <div>
        <Jumbotron class='jumbotron_style' fluid>
            <Container>
                <h1>Don't you think honing your skills in this competitive world is the only way to Succeed?</h1>
                <p>
                Our unique and distinctive programs makes the children to develop their skills in a smart way.
                </p>
                <a href="/contact" class="btn btn-primary">More Bootstrap Snippets</a>
            </Container>
        </Jumbotron>
      </div>
    );
  }
  
  export default Jumbotron_SSS;
  