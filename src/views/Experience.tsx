import { NavLink, Outlet } from 'react-router-dom';

import SubMenu from '../components/SubMenu'

export default function Experience() {
    return (
        <div className='experience'>
            <SubMenu>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to='roll20'>Roll20</NavLink></li>
                    <li><NavLink to='cli'>CLI Digital Media</NavLink></li>
                    <li><NavLink to='uhaul'>U-Haul</NavLink></li>
                    <li><NavLink to='apple'>Apple</NavLink></li>
                    <li><NavLink to='mjs'>MJS Designs</NavLink></li>
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}