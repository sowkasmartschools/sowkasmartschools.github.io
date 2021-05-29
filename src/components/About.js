import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function About() {
    return (
      <div>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h5>Our Team</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ul>
          <li><b>N.Ram Mohan</b> - Managing Director</li>
          <li><b>Kolli Sowmyaa Lakshmi</b>- Head Teacher</li>
          <li><b>B. Krishnaveni</b>- Assistant  Executive Head Teacher</li>
          <li><b>M. Suguna</b>- Lead Teacher</li>
          <li><b>Satyala Sundar Kumar</b>- Executive Lead Trainer for JOT Front End Development</li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h5>Our AIM</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>In recent decades, studies have shown that early childhood education is critical in preparing children to enter and succeed in the (grade school) classroom, diminishing their risk of social-emotional mental health problems and increasing their self-sufficiency as adults.</p>
        <p>In other words, the child needs to be taught to rationalize everything and to be open to interpretations and critical thinking. There is no subject to be considered taboo, starting with the most basic knowledge of the world he lives in, and ending with deeper areas, such as morality, religion and science.</p>
        <p>SOWKA SMART SCHOOLS implements a specific way of learning which ensures the child to grow into a complete and balanced adult. The smart concept has been introduced to nullify the harder and pressurized way of learning by giving a strong foundation and molding our future citizens into smarter human beings.</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <h5>Our VISION</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <h6>Learn</h6>
        <p>Learning is an important process which enhances the mental growth of a child.</p>
        <p>Sowka Smart Schools blended curriculum helps the children to learn in a smarter way using easy brain strengthening techniques which according to United Nations High Commission for Human Rights is important for a optimal child development.</p>
        <p>To improve academic skills and improve the child's focus, we have chosen an artful way of learning which helps them to improve their readiness to learn and become more focused.</p>
        <h6>Play</h6>
        <p>The American Academy of Pediatrics says that “Play is essential to development of a child because it contributes to the cognitive, physical, social, and emotional well-being of children.”</p>
        <p>Sowka Smart Schools way of teaching includes learning with playing which is very much needed for developing children's social and mental skills. The basic idea behind our smart learning is to ensure a healthy emotional development to our kids.</p>
        <h6>Grow</h6>
        <p>Growing means evolving into a wonderful adult: full of confidence, humbleness and emotionally stable person.</p>
        <p>Hectic family lifestyle generally leads to less quality parent-child interactions. Sowka Smart Schools smart program ensures our kids growth with quality interactions and helps both parents and children to improve their interaction skills.</p>
        <p>Our kids learn to share, resolve conflicts, make decisions, be positive and being a team worker through a structured way of learning.</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </div>
    );
  }
  
  export default About;
  