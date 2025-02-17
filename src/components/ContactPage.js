import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './Home.css';

const ContactPage = () => {
  return (
    <Col md={6} className="mx-auto my-5">
      <h2>Contact Me</h2>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Email: </strong>kr0885@gmail.com</p>
        <p><strong>Phone: </strong>6909963177</p>
      </div>

      <Form>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h3 className="mt-5">Experience</h3>
      <ul>
        <li>
          <strong>Sponsorship Team Member</strong> | Coding Ninjas SRM (Nov 2022 - Aug 2023)
          <p>Secured event funding by developing sponsorship strategies and collaborating with companies for events. Organized workshops with industry partners.</p>
        </li>
        <li>
          <strong>Intern</strong> | Hospital Community Service (June 2024)
          <p>Enrolled beneficiaries for the CHC Kakching and assisted in organizing medical checkups for underprivileged communities.</p>
        </li>
      </ul>

      <h3>Technical Skills</h3>
      <ul>
        <li>Programming languages: C, C++, Python, Java</li>
        <li>Frameworks: Tkinter, OpenCV, Java Swing</li>
        <li>Database Management: MySQL</li>
        <li>Hardware Control: Arduino</li>
      </ul>

      <h3>Certifications</h3>
      <ul>
        <li>NPTEL Programming in Java (link)</li>
        <li>NPTEL Database Management System (link)</li>
        <li>AWS Academy Machine Learning Foundations (link)</li>
        <li>Special Recognition, AIOT Project Expo, SRM</li>
        <li>NPTEL Machine Learning(link)</li>
      </ul>
    </Col>
  );
};

export default ContactPage;
