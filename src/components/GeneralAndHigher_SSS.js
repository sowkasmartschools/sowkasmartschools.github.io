import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function GeneralAndHigher_SSS() {
    return (
      <div>
<br /><br />
<p>Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding.</p>
<p>Whether you aspire to get into university, start your own business or develop your career, our general and higher education qualifications give you the confidence to achieve your goals.</p>
<h2>Your path to learning English, step by step</h2>
<p>Cambridge English Qualifications are designed so that each exam builds on the skills you develop at the previous level. Below you can see how our exams work together to create an effective learning journey.</p>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h5>A2 Key</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <p>This qualification is proof of your ability to use English to communicate in simple situations. A2 Key is a great exam to take if you’re new to learning English.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/key/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h5>B1 Preliminary</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>This is an intermediate-level qualification for those who have mastered the basics of English and now have practical language skills for everyday use.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/preliminary/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h5>B2 First</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <p>This qualification shows you have the language skills needed to communicate confidently in an English-speaking environment.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/first/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      <h5>C1 Advanced</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <p>This is proof of high-level achievement in English and the ideal qualification to prepare you for university or professional life.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/advanced" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      <h5>C2 Proficiency</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
        <p>This is our highest level qualification and it shows the world you have mastered English to an exceptional level.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/proficiency" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </div>
    );
  }
  
  export default GeneralAndHigher_SSS;
  