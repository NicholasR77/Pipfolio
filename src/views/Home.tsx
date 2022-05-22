import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'

import HomeInfo from '../data/home-info.json';
import { HomeType } from '../types/Home';

export default function Home() {
    const homeInfo:HomeType = HomeInfo;

    const sectionLength = homeInfo.sections.length;
    const sectionsList = homeInfo.sections.map((section, index) => {
        return (
            <div key={section}>
                <p className={ index === sectionLength -1 ? 'cursor_blink' : ''}>{section}</p>
            </div>
        );
    })

    const {text} = useTypewriter({
        words: [ ...homeInfo.typwriter ],
        loop: 0,
    })

    return (
        <div className='home subpage'>
            <div className='split-panel'>
                <div className='panel'>{ sectionsList }</div>
                <div className='panel'>
                    <h2 className='animated-text'>{text}</h2>
                </div>
            </div>
        </div>
    )
}