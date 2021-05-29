import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function ForSchools_SSS() {
    return (
      <div>
<br /><br />
<p>Learning English is more than just exams and grades. It’s about having the confidence to communicate and access a lifetime of enriching experiences and opportunities. Our qualifications are designed specifically for school-aged students, giving them regular milestones to keep them motivated.</p>
<p>Working with Cambridge Assessment English means access to a comprehensive range of exams and support. We provide exam preparation and free resources to help teachers prepare students, and – as the world’s leading provider of teaching qualifications and courses – we help teachers to continually develop their professional skills.</p>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h5>Pre A1 Starters</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <p>This is the first of three exams for young learners. All three exams help younger children take their first steps towards learning English.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/starters/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h5>A1 Movers</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>This is the second exam created specifically for younger children. All our exams for young learners are fun, colorful and activity based, motivating children to learn.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/movers/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h5>A2 Flyers</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <p>This is the third exam created specifically for younger children. These exams build young learners’ confidence and lay the foundations for future success in English.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/flyers/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      <h5>A2 Key for Schools</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <p>This qualification helps learners to fully develop their everyday written and spoken English at Level A2. The exam builds on the skills students have achieved at A2 Flyers.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/key-for-schools" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      <h5>B1 Preliminary for Schools</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
        <p>This is an intermediate-level qualification for students who have mastered the basics of English and now have practical language skills for everyday use.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
      <h5>B2 First for Schools</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
        <p>This qualification is a great way for learners to prepare for higher level exams, and shows they have the language skills needed to communicate confidently in an English-speaking environment.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/first-for-schools/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
      <h5>C1 Advanced</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
        <p>This is proof of high-level achievement in English and the ideal qualification for students preparing for university or professional life.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/advanced/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="7">
      <h5>C2 Proficiency</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="7">
      <Card.Body>
        <p>This is our highest level qualification and it shows the world your learners have mastered English to an exceptional level.</p>
        <a rel="noreferrer" href="https://www.cambridgeenglish.org/exams-and-tests/proficiency/" style={{color: '#627482'}} target="_blank">More Information</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </div>
    );
  }
  
  export default ForSchools_SSS;
  