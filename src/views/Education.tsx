import { Link, Outlet } from 'react-router-dom';

import SubMenu from '../components/SubMenu'

export default function Education() {
    return (
        <div className='education'>
            <SubMenu>
                <ul>
                    <li><Link to='asu'>Arizona State University</Link></li>
                    <li><Link to='flatiron'>Flatiron Schools Bootcamp</Link></li>
                </ul>
            </SubMenu>
            <Outlet />
        </div>
    )
}