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
        <div className="education-detail subpage">
            <h2>{ school.name } | {school.dates}</h2>
            <p>{school.degree} </p>
            <p>{school.description}</p>
        </div>
    )
}