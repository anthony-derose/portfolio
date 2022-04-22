import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function BlogNav() {
  return (
    <>
        <Navbar>
            <Container>
                <Nav defaultActiveKey="" className="flex-column" >
                  <Nav.Link href="/blog/myfirstblog">my first blog. </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
    
  );
}

export default BlogNav;