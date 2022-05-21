import Biography from '../data/biography.json';

import { BioType } from '../types/Bio';

export default function Bio() {
    const bio:BioType = Biography;

    const sectionsList = bio.sections.map((section) => {
        return (
            <div key={section}>
                <p>{section}</p>
            </div>
        );
    })

    return (
        <div className="bio subpage">
            { sectionsList }
        </div>
    )
}