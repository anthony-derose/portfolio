import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function ProjectNav() {
    return(
        <>
        <Navbar>
            <Container>
                <Nav defaultActiveKey="/" className="flex-column" >
                    <Nav.Link href="/projects/procedural-maze-game">procedural maze game</Nav.Link>

                    <Nav.Link href="projects/this-site">this site.</Nav.Link>
                    <Nav.Link href="/projects/simple-synth-noise">simple synth noise</Nav.Link>
                    <Nav.Link href="/projects/metronome">metronome web app</Nav.Link>
                    <Nav.Link href="/projects/youtube-sampler">youtube to mp3 sampler</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default ProjectNav; 