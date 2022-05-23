import { useParams } from 'react-router-dom';

// Types
import { SchoolsType } from '../types/Schools';

// Job Data
import Schools from '../data/schools.json';

export default function EducationDetails() {
    let { schoolName } = useParams();

    if (schoolName === undefined) {
        return null;
    }

    const schools: SchoolsType = Schools;
    const school = schools[schoolName];
    
    return (
        <div className='education-details subpage'>
            <h2>{ school.name } <br />{school.dates}</h2>
            <p>{school.degree} </p>
            <p className='cursor_blink'>{school.description}</p>
        </div>
    )
}