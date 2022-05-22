import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { MenuLink } from '../types/MenuLink';
import SubMenu from '../components/SubMenu'

export default function Experience() {
    const menuLinks: MenuLink[] = [
        { link: 'roll20', name: 'Roll20' },
        { link: 'cli', name: 'CLI Digital Media' },
        { link: 'uhaul', name: 'U-Haul' },
        { link: 'apple', name: 'Apple' },
        { link: 'mjs', name: 'MJS Designs' }
    ];

    const listItems = menuLinks.map((item, index) => {
        return (
            <React.Fragment key={item.name}>
                <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to={item.link}>{item.name}</NavLink></li>
                { index + 1 < menuLinks.length && <li className='mobile-tablet-hidden'>|</li> }
            </React.Fragment>
        )
    });
    return (
        <div className='experience'>
            <SubMenu>
                <ul>
                    {listItems}
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}