import {
    Routes,
    Route,
} from 'react-router-dom';

import Home from './Home';
import Bio from './Bio';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact'
import MainMenu from '../components/MainMenu';

export default function PipfolioWindow() {
    return (
        <div className='pipfolio-window'>
            <MainMenu />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/bio' element={<Bio />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
                <Route path='/education' element={<Education />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </div>
    )
};