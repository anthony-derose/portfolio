import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './generalstyle.css'
import AboutPage from './assets/aboutpage.md'; 
import rehypeRaw from 'rehype-raw'

const About = () => {
    const [aboutText, setaboutText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(AboutPage).then(res => res.text()).then(text => setaboutText(text))
	})
    return(
		<div className="middleabout">
			<ReactMarkdown children={aboutText} rehypePlugins={[rehypeRaw]} 
			/>
		</div>
    );
}; 

export default About; 
