import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './generalstyle.css'
import SimpleSynthPage from './assets/simplesynth.md'; 

const SimpleSynth = () => {
    const [thissimpleSynth, setthissimpleSynth] = useState('')

    // Fetch
	useEffect(() => {
		fetch(SimpleSynthPage).then(res => res.text()).then(text => setthissimpleSynth(text))
	})
    return(
        <div className="middle">
          < ReactMarkdown children={thissimpleSynth} rehypePlugins={[rehypeRaw]}
          />
        </div>
    );
}; 

export default SimpleSynth;