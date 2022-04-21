import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Container, Navbar, Nav } from 'react-bootstrap';
import BlogNav from "../components/blognav";
import BlogPage from './assets/blogpage.md'; 
import './generalstyle.css';

const Blog = () => {
    const [blogText, setblogText] = useState('')

    // Fetch
    useEffect(() => {
      fetch(BlogPage).then(res => res.text()).then(text => setblogText(text))
    })

    return(
        <>
        	<div className="middle">
			    <ReactMarkdown children={blogText} />
		    </div>
            <div className="middleblognav">
                <BlogNav/>
            </div>
        </>
    );
}; 

export default Blog; 
