import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}