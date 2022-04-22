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
          <img src="DSCF0118.JPG" width="300"/>
          <img src="DSCF2071.JPG" width="300"/>
          <img src="DSCF2067.JPG" width="300"/>
          <img src="DSCF2098.JPG" width="300"/>
          <img src="DSCF2152.JPG" width="300"/>
          <img src="DSCF2213.JPG" width="300"/>
          <img src="DSCF2286.JPG" width="300"/>
          <img src="DSCF2360.JPG" width="300"/>
          <img src="DSCF2375.JPG" width="300"/>
          <img src="DSCF2387.JPG" width="300"/>
          <img src="DSCF2330.JPG" width="300"/>
          <img src="DSCF2389.JPG" width="300"/>
          <img src="DSCF2486.JPG" width="300"/>
          <img src="DSCF2482.JPG" width="300"/>
          <img src="DSCF2580.JPG" width="300"/>
          <img src="DSCF2558.JPG" width="300"/>
          <img src="DSCF2374.JPG" width="300"/>
          <img src="DSCF2408.JPG" width="300"/>

        </div>
        
        );
    };

export default Home; 
