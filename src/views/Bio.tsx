// JSON
import BioInfo from '../data/bio-info.json';

// Types
import { BioType } from '../types/Bio';

export default function Bio() {
    const bio:BioType = BioInfo;
    const sectionLength = bio.sections.length;
    const sectionsList = bio.sections.map((section, index) => {
        return (
            <div key={section}>
                <p className={index === sectionLength -1 ? 'cursor_blink' : ''}>{section}</p>
            </div>
        );
    });

    return (
        <div className='bio subpage'>
            <div className='split-panel'>
                <div className='panel'>{ sectionsList }</div>
                <div className='panel'>
                    <img src={require('../assets/weirdos.jpg')} alt='My wife and myself'/>
                    <p><em>Me and my lovely wife, Amber.</em></p>
                    <img src={require('../assets/doges.jpg')} alt='My dogs'/>
                    <p><em>My dogs, Waffles and Jax.</em></p>
                </div>
            </div>
        </div>
    );
}