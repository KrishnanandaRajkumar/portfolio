import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Home.css';

const ProjectsPage = () => {
  return (
    <>
      <h2 className="my-5 text-center">Key Projects</h2>
      <Row>
        <Col md={6}>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Scooter Rental Management System</Card.Title>
              <Card.Text>
                Engineered a robust admin-only scooter rental management system using MySQL and Tkinter. Developed comprehensive features for inventory management, detailed rental records, and accurate payment calculations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Assembly Line Sorting Robotic Arm</Card.Title>
              <Card.Text>
                Led the development of an intelligent robotic arm for production line sorting using OpenCV and Arduino, enhancing production efficiency and accuracy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Demand Paging Visualizer</Card.Title>
              <Card.Text>
                Designed a Java Swing application to visualize demand paging in memory management. Demonstrated proficiency in memory allocation and page replacement strategies (LRU, LFU, FIFO).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Hand Gesture Game Control</Card.Title>
              <Card.Text>
                Developed a hand gesture recognition system utilizing OpenCV to operate a virtual car. Integrated advanced image processing and real-time gesture interpretation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </>
  );
};

export default ProjectsPage;
