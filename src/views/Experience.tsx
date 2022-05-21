import { NavLink, Outlet } from 'react-router-dom';

import SubMenu from '../components/SubMenu'

export default function Experience() {
    return (
        <div className='experience'>
            <SubMenu>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='roll20'>Roll20</NavLink></li>
                    <li>|</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='cli'>CLI Digital Media</NavLink></li>
                    <li>|</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='uhaul'>U-Haul</NavLink></li>
                    <li>|</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='apple'>Apple</NavLink></li>
                    <li>|</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'secondary-active-link' : '' } to='mjs'>MJS Designs</NavLink></li>
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}