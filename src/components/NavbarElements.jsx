import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarElements() {
  return (
    <>
      <Navbar sticky="top" bg="white" variant="light">
        <Container>
        <Navbar.Brand href="/">Anthony de Rose</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/projects">projects</Nav.Link>
          <Nav.Link href="/blog">blog</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
    
  );
}

export default NavbarElements;