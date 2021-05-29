import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function Business_SSS() {
    return (
      <div>
<br /><br />
<p>Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding.</p>
<p>Designed to help professionals develop the English language skills to communicate confidently in an international workplace, our business qualifications prove to employers that you have the English language skills to succeed.</p>
<h2>Your path to learning English, step by step</h2>
<p>Cambridge English Qualifications are designed so that each exam builds on the skills you develop at the previous level. Below you can see how our exams work together to create an effective learning journey.</p>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h5>B1 Business Preliminary</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <p>This qualification shows that you have mastered the basics of business English.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/business-preliminary/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h5>B2 Business Vantage</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>This qualification will help you when applying for new jobs, getting a promotion or to develop your career.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/business-vantage/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h5>C1 Business Higher</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <p>This qualification gives you the practical language skills you need to operate confidently at a senior level in global business.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/business-higher/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </div>
    );
  }
  
  export default Business_SSS;
  