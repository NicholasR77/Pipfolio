import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

// Main Views
import Home from './Home';
import Bio from './Bio';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact'

// Components
import MainMenu from '../components/MainMenu';
import JobDetails from '../components/JobDetails';
import EducationDetails from '../components/EducationDetails';

export default function PipfolioWindow() {
    return (
        <div className='pipfolio-window'>
            <MainMenu />
            <div className="page-wrapper">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='bio' element={<Bio />}></Route>
                    <Route path='experience' element={<Experience />}>
                        <Route index element={<Navigate to="roll20" />} />
                        <Route path=':jobName' element={<JobDetails />} />
                    </Route>
                    <Route path='education' element={<Education />}>
                        <Route index element={<Navigate to="asu" />} />
                        <Route path=':schoolName' element={<EducationDetails />} />
                    </Route>
                    <Route path='contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </div>
    )
};