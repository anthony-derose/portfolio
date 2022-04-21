import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import ThisSitePage from './assets/thissitepage.md'; 

const ThisSite = () => {
    const [thissiteText, setthissiteText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(ThisSitePage).then(res => res.text()).then(text => setthissiteText(text))
	})
    return(
		<div className="middleabout">
			<ReactMarkdown children={thissiteText} />
		</div>
    );
}; 

export default ThisSite; 