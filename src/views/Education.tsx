import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import SubMenu from '../components/SubMenu';

// Types
import { MenuLink } from '../types/MenuLink';

export default function Education() {
    const menuLinks: MenuLink[] = [
        { link: 'asu', name: 'Arizona State University' },
        { link: 'flatiron', name: 'Flatiron Schools Bootcamp' },
    ];

    const listItems = menuLinks.map((item, index) => {
        return (
            <React.Fragment>
                <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to={item.link}>{item.name}</NavLink></li>
                { index + 1 < menuLinks.length && <li className='mobile-tablet-hidden'>|</li> }
            </React.Fragment>
        );
    });

    return (
        <div className='education'>
            <SubMenu>
                <ul>
                    {listItems}
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    );
}