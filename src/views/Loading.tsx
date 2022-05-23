import React, { useState } from 'react';

import Lottie from 'react-lottie-player';
import { useTypewriter } from 'react-simple-typewriter';
import { useMediaQuery } from 'react-responsive';

// JSON
import loading from '../assets/vault-loading.json';
import CompText from '../data/comp-text.json';

// Types
import { CompTextType } from '../types/CompText';

export default function Loading() {
    const isTablet = useMediaQuery({ query: `(min-width: 700px)` });
    const [ animatedText, setAnimtedText ] = useState(true);
    const [ scrollText, setScrollText ] = useState(false);
    

    setTimeout(() => {
        setAnimtedText(false);
        setScrollText(true);
      }, 3000);

    if (scrollText) {
        setTimeout(() => {
            setScrollText(false);
        }, 3000);
    }
    
    const compText: CompTextType = CompText;

    const { text } = useTypewriter({
        words: [ ...compText.animatedText ],
        loop: 1,
        typeSpeed: 40,
    });

    const textList = compText.verticalText.map((item) => {
        return (
            <p>{item}</p>
        )
    });

    return (
        <div id='loading'>
            { scrollText && <div id='scroll-text'>{textList}</div> }
            { animatedText &&
                <React.Fragment>
                    <div className='loading-top'>
                        <p>{text}</p>
                    </div>
                    { isTablet &&  
                        <div className='loading-bottom'>
                            <Lottie animationData={loading} play />
                        </div>
                    }
                    
                </React.Fragment>   
            }
        </div>
    );
}