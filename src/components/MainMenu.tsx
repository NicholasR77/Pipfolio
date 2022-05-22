import { NavLink } from 'react-router-dom';

import { MenuLink } from '../types/MenuLink';

export default function MainMenu() {
    const menuLinks: MenuLink[] = [
        { link: '/', name: 'Home' },
        { link: '/bio', name: 'Bio' },
        { link: '/experience', name: 'Experience' },
        { link: '/education', name: 'Education' },
        { link: '/contact', name: 'Contact' }
    ]

    const listItems = menuLinks.map((item) => {
        return (
            <li key={item.name}><NavLink className={({ isActive }) => isActive ? 'primary-active-link' : '' } to={item.link}>{item.name}</NavLink></li>
        )
    })
    return (
        <nav className='main-nav'>
            <ul>
                {listItems}
            </ul>
        </nav>
    )
}