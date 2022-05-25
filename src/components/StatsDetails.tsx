import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Types
import { StatsType } from '../types/Stats';

// JSON Data
import Stats from '../data/stats-info.json';

export default function StatsDetails() {
    let { statName } = useParams();

    const [value, setValue] = useState(0);

    if (statName === undefined) {
        return null;
    }

    const stats: StatsType = Stats;
    const stat = stats[statName];

    const subStatsList = stat.subStats.map((item, index) => {
        return (
            <Tab label={item.name} key={index} />
        )
    })

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='stats-details subpage'>
            <div className='split-panel'>
                <div className='panel'>
                    <Box sx={{ bgcolor: '#71db77' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            orientation='vertical'
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label={`${statName} Scroll Bar`}
                        >
                            {subStatsList}
                        </Tabs>
                    </Box>
                </div>
                <div className='panel'>
                    <p>{stat.subStats[value].name}</p>
                </div>
            </div>
        </div>
    );
}