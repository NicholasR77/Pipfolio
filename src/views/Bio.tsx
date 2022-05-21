import BioInfo from '../data/bio-info.json';

import { BioType } from '../types/Bio';

export default function Bio() {
    const bio:BioType = BioInfo;

    const sectionLength = bio.sections.length;
    const sectionsList = bio.sections.map((section, index) => {
        return (
            <div key={section}>
                <p className={ index === sectionLength -1 ? 'cursor_blink' : ''}>{section}</p>
            </div>
        );
    })

    return (
        <div className="bio subpage">
            { sectionsList }
        </div>
    )
}