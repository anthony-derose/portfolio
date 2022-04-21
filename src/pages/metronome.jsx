import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './generalstyle.css'
import MetronomePage from './assets/metronomepage.md'; 

const Metronome = () => {
    const [metronomeText, setmetronomeText] = useState('')

    // Fetch
    useEffect(() => {
      fetch(MetronomePage).then(res => res.text()).then(text => setmetronomeText(text))
    })

    return (
        <div className="middle">
          < ReactMarkdown children={metronomeText} rehypePlugins={[rehypeRaw]}
          />
        </div>
        
        );
    };

export default Metronome; 
