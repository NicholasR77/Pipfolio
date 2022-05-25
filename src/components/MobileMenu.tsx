import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Hamburger from 'hamburger-react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

// Types
import { MenuLink } from '../types/MenuLink';

export default function MobileMenu() {
    const menuLinks: MenuLink[] = [
        { link: '/', name: 'Home' },
        { link: '/bio', name: 'Bio' },
        { link: '/stats', name: 'Stats' },
        { link: '/experience', name: 'Experience' },
        { link: '/education', name: 'Education' },
        { link: '/contact', name: 'Contact' }
    ];

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer =
        (anchor: string, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open })
    };
    
    const listItems = menuLinks.map((item) => {
        return (
            <React.Fragment key={item.name}>
                <ListItem component={NavLink} to={item.link} disablePadding>
                    <ListItemText primary={item.name} />
                </ListItem>
                <Divider color='#71db77' />
            </React.Fragment>
        )
    })

    const list = (anchor: string) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {listItems}
            </List>
        </Box>
    );

    return (
        <div className='mobile-nav'>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}><Hamburger toggled={state[anchor]} color='#71db77' /></IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}