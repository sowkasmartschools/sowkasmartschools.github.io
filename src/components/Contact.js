import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function Contact() {
    return (
      <div>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h5>Our Contact Details</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ul>
          <li><b>Call us:</b>&nbsp;9390203040, 9390333335</li>
          <li><b>Email:</b>&nbsp;<a href="mailto:sowkasmartschools@gmail.com">sowkasmartschools@gmail.com</a></li>
          <li><b>Address:</b>&nbsp;Sowka Smart Schools, 7-106, opp BPCL petrol Bunk, Kamayyathopu, Vijayawada</li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </div>
    );
  }
  
  export default Contact;