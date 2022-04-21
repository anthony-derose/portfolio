import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './generalstyle.css'
import FirstBlogPage from './assets/firstblogpage.md'; 

const FirstBlog = () => {
    const [firstblogText, setfirstblogText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(FirstBlogPage).then(res => res.text()).then(text => setfirstblogText(text))
	})
    return(
		<div className="middleabout">
			<ReactMarkdown children={firstblogText} />
		</div>
    );
}; 

export default FirstBlog; 
