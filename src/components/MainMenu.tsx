import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to="/bio">Bio</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to="/experience">Experience</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to="/education">Education</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-link' : '' } to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}