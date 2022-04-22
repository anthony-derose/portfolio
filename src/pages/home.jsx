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
          <img src="DSCF0118.JPG" alt="seaside" width="300"/>
          <img src="DSCF2071.JPG" alt="road in upstate ny" width="300"/>
          <img src="DSCF2067.JPG" alt="lake off road" width="300"/>
          <img src="DSCF2098.JPG" alt="stonehead vermont" width="300"/>
          <img src="DSCF2152.JPG" alt="mechanicsville house" width="300"/>
          <img src="DSCF2213.JPG" alt="nb clean" width="300"/>
          <img src="DSCF2286.JPG" alt="nb graf" width="300"/>
          <img src="DSCF2360.JPG" alt="sm pier" width="300"/>
          <img src="DSCF2375.JPG" alt="blink182" width="300"/>
          <img src="DSCF2387.JPG" alt="hollywood" width="300"/>
          <img src="DSCF2330.JPG" alt="venice skate" width="300"/>
          <img src="DSCF2389.JPG" alt="hw graf" width="300"/>
          <img src="DSCF2486.JPG" alt="lennon" width="300"/>
          <img src="DSCF2482.JPG" alt="digitally sober" width="300"/>
          <img src="DSCF2580.JPG" alt="sam" width="300"/>
          <img src="DSCF2558.JPG" alt="malibu" width="300"/>
          <img src="DSCF2374.JPG" alt="bus" width="300"/>
          <img src="DSCF2408.JPG" alt="thai town" width="300"/>

        </div>
        
        );
    };

export default Home; 
