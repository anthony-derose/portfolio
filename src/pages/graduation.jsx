import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './generalstyle.css'
import GraduationPage from './assets/graduation.md'; 

const Graduation = () => {
    const [graduationText, setgraduationText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(GraduationPage).then(res => res.text()).then(text => setgraduationText(text))
	})
    return(
		<div className="middleabout">
			<ReactMarkdown children={graduationText} />
		</div>
    );
}; 

export default Graduation; 