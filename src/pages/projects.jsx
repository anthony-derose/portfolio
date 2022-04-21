import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Container, Navbar, Nav } from 'react-bootstrap';
import ProjectNav from "../components/projectsnav";
import './generalstyle.css';
import ProjectsPage from "./assets/projectspage.md"

const Projects = () => {
    const [projectsText, setProjectsText] = useState('')

    // Fetch
    useEffect(() => {
      fetch(ProjectsPage).then(res => res.text()).then(text => setProjectsText(text))
    })
    return(
        <>
        	<div className="middle">
			    <ReactMarkdown children={projectsText} />
		    </div>
            <div className="middleblognav">
                <ProjectNav/>
            </div>
        </>
    );
}; 

export default Projects; 
