import { NavLink, Outlet } from 'react-router-dom';

import SubMenu from '../components/SubMenu'

export default function Education() {
    return (
        <div className='education'>
            <SubMenu>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='asu'>Arizona State University</NavLink></li>
                    <li>|</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='flatiron'>Flatiron Schools Bootcamp</NavLink></li>
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}