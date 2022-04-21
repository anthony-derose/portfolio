import React from "react";
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './generalstyle.css'
import SamplerPage from './assets/youtube-samplerpage.md'; 

const Sampler = () => {
    const [thissamplerText, setthissamplerText] = useState('')

    // Fetch
	useEffect(() => {
		fetch(SamplerPage).then(res => res.text()).then(text => setthissamplerText(text))
	})
    return(
        <div className="middle">
          < ReactMarkdown children={thissamplerText} rehypePlugins={[rehypeRaw]}
          />
        </div>
    );
}; 

export default Sampler;