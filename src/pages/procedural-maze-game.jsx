import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import MazePage from './assets/mazepage.md'; 


const Maze = () => {
    const [thismazeText, setthismazeText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(MazePage).then(res => res.text()).then(text => setthismazeText(text))
	})
    return(
		<div className="middleabout">
			<ReactMarkdown children={thismazeText} />
		</div>
    );
}; 

export default Maze;