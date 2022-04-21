import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './generalstyle.css'
import HomePage from './assets/homepage.md'; 

const Home = () => {
    const [homeText, sethomeText] = useState('')

    // Fetch
    useEffect(() => {
      fetch(HomePage).then(res => res.text()).then(text => sethomeText(text))
    })

    return (
        <div className="middle">
          < ReactMarkdown children={homeText} rehypePlugins={[rehypeRaw]}
          />
        </div>
        
        );
    };

export default Home; 
