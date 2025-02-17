import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <Container>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </Container>
    </>
  );
}

export default App;
