import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Row className="my-5">
      <Col>
        <h2>About Me</h2>
        <p>
          I'm currently pursuing a B.Tech in Computer Science at SRMIST KTR with a GPA of 9.3/10.
          I have a strong academic background and experience working on various technical projects.
        </p>
        <h3>Academic Qualification</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Education</th>
              <th>Institute</th>
              <th>Year</th>
              <th>GPA/Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech (Pursuing)</td>
              <td>SRMIST KTR</td>
              <td>2022-26</td>
              <td>9.3/10</td>
            </tr>
            <tr>
              <td>Intermediate/+2</td>
              <td>Best Higher Secondary School</td>
              <td>2021</td>
              <td>94.43%</td>
            </tr>
            <tr>
              <td>Matriculation</td>
              <td>Best High School</td>
              <td>2019</td>
              <td>85%</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default AboutPage;