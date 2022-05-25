import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Main Views
import Home from './Home';
import Bio from './Bio';
import Stats from './Stats';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact'

// Components
import MainMenu from '../components/MainMenu';
import MobileMenu from '../components/MobileMenu';
import JobDetails from '../components/JobDetails';
import EducationDetails from '../components/EducationDetails';
import StatsDetails from '../components/StatsDetails';

// Assets
import logo from '../assets/Original.svg';

export default function PipfolioWindow() {
    const isDesktop = useMediaQuery({ query: `(min-width: 1000px)` });

    return (
        <div className='pipfolio-window'>
            <div className='logo-wrapper'><img src={logo} alt='Logo'/></div>
            { !isDesktop &&
                 <MobileMenu />
            }
            { isDesktop &&
                 <MainMenu />
            }
            <div className='page-wrapper'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='bio' element={<Bio />}></Route>
                    <Route path='stats' element={<Stats />}>
                        <Route index element={<Navigate to='languages' />} />
                        <Route path=':statName' element={<StatsDetails />} />
                    </Route>
                    <Route path='experience' element={<Experience />}>
                        <Route index element={<Navigate to='roll20' />} />
                        <Route path=':jobName' element={<JobDetails />} />
                    </Route>
                    <Route path='education' element={<Education />}>
                        <Route index element={<Navigate to='asu' />} />
                        <Route path=':schoolName' element={<EducationDetails />} />
                    </Route>
                    <Route path='contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </div>
    )
};