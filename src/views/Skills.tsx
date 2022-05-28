import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Types
import { SkillType } from '../types/Skills';

// JSON Data
import SkillsWrapper from '../data/skills-info.json';

export default function Skills() {
    const [value, setValue] = useState(0);

    const skills = SkillsWrapper['skills'];

    const tabsList = skills.map((stat: SkillType, index) => {
        return (
            <Tab label={stat.name} key={index} />
        )
    });

    const skillDescriptions = skills[value].descriptions.map((description) => {
        return (
            <li key={description}>{description}</li>   
        )
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='skills'>
            <div className='split-panel'>
                <div className='panel'>
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant='scrollable'
                            orientation='vertical'
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label={`Skills Scroll Bar`}
                        >
                            {tabsList}
                        </Tabs>
                    </Box>
                </div>
                <div className='panel'>
                    <h2>{skills[value].name}</h2>
                    <ul>
                        {skillDescriptions}
                    </ul>
                </div>
            </div>
        </div>
    );
}