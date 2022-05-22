import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Hamburger from 'hamburger-react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function MobileMenu() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
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

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem component={NavLink} to={'/'} disablePadding>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <Divider color="#71db77" />
                <ListItem component={NavLink} to={'/bio'} disablePadding>
                    <ListItemText primary={'Bio'} />
                </ListItem>
                <Divider color="#71db77" />
                <ListItem component={NavLink} to={'/experience'} disablePadding>
                    <ListItemText primary={'Experience'} />
                </ListItem>
                <Divider color="#71db77" />
                <ListItem component={NavLink} to={'/education'} disablePadding>
                    <ListItemText primary={'Education'} />
                </ListItem>
                <Divider color="#71db77" />
                <ListItem component={NavLink} to={'/contact'} disablePadding>
                    <ListItemText primary={'Contact'} />
                </ListItem>
                <Divider color="#71db77" />
            </List>
        </Box>
    );

    return (
        <div className='mobile-nav'>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}><Hamburger toggled={state[anchor]} color="#71db77" /></IconButton>
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