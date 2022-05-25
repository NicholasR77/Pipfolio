import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import SubMenu from '../components/SubMenu'

// Types
import { MenuLink } from '../types/MenuLink';

export default function StatsDetails() {
    const menuLinks: MenuLink[] = [
        { link: 'languages', name: 'Programming Languages' },
    ];

    const listItems = menuLinks.map((item, index) => {
        return (
            <React.Fragment key={item.name}>
                <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to={item.link}>{item.name}</NavLink></li>
                { index + 1 < menuLinks.length && <li className='mobile-tablet-hidden'>|</li> }
            </React.Fragment>
        );
    });

    return (
        <div className='stats'>
            <SubMenu>
                <ul>
                    {listItems}
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}