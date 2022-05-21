import Biography from '../data/biography.json';

import { BioType } from '../types/Bio';

export default function Bio() {
    const bio:BioType = Biography;

    const sectionsList = bio.sections.map((section) => {
        return (
            <div className="section" key={section}>
                <p>{section}</p>
            </div>
        );
    })

    return (
        <div>
            { sectionsList }
        </div>
    )
}