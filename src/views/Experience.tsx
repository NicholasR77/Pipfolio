import { Link, Outlet } from 'react-router-dom';

import SubMenu from '../components/SubMenu'

export default function Experience() {
    return (
        <div className='experience'>
            <SubMenu>
                <ul>
                    <li><Link to='roll20'>Roll20</Link></li>
                    <li><Link to='cli'>CLI Digital Media</Link></li>
                    <li><Link to='uhaul'>U-Haul</Link></li>
                    <li><Link to='apple'>Apple</Link></li>
                    <li><Link to='mjs'>MJS Designs</Link></li>
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}