import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FoundationIcon from '@mui/icons-material/Foundation';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import BiotechIcon from '@mui/icons-material/Biotech';
import AddBoxIcon from '@mui/icons-material/AddBox';

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

    const skillName = skills[value].name;

    const skillsToIcon: { [key: string ]: any } = {
        Languages: <CodeIcon />,
        Libraries: <LibraryBooksIcon />,
        Frameworks: <FoundationIcon />,
        ORMs: <SourceIcon />,
        Databases: <StorageIcon />,
        Testing: <BiotechIcon />,
        Other: <AddBoxIcon />
    };

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
                    { skillsToIcon[skillName] }
                    <h2>{skillName}</h2>
                    <ul>
                        {skillDescriptions}
                    </ul>
                </div>
            </div>
        </div>
    );
}