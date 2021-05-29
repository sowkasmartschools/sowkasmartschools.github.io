import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
function Cards_SSS() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./img/communication_skills.png" />
        <Card.Body>
            <Card.Title>Communication Skills</Card.Title>
            <Card.Text>
                Learn English language in a smart way with our advanced programs offered by Cambridge University, London. Enhance your English knowledge and develop your skills with our qualified and certified trainers.
                We offer classes from 1st standard onwards. Professionals, Job holders, House wives, Students, Teachers and anyone with a lust to learn the language can join our course.
            </Card.Text>
            <Button variant="primary"><Link to="/contact">Contact Us</Link></Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Conceptual Studies</Card.Title>
            <Card.Text>
            A unique way of learning in a simple and smart way. Our qualified teachers make your kid to learn in a simplified way with conceptual orientation. This makes them to understand and perform better in higher classes
            We offer this program from LKG to 5th standards.
            </Card.Text>
            <Button variant="primary"><Link to="/contact">Contact Us</Link></Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Handwriting</Card.Title>
            <Card.Text>
            Our program offers both cursive and print style handwriting. Our teachers provide a stress free environment which helps you to develop your complex skills.
            We offer this essential program for both children and adults.

            </Card.Text>
            <Button variant="primary"><Link to="/contact">Contact Us</Link></Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Maths-Runn</Card.Title>
            <Card.Text>
            A fun way of learning mathematics without getting bored. Open your kid's ability to solve the problems with ease.
            Maths-run program is offered from 1st to 10th standard students.
            </Card.Text>
            <Button variant="primary"><Link to="/contact">Contact Us</Link></Button>
        </Card.Body>
        </Card>

      </div>
    );
  }
  
  export default Cards_SSS;
  