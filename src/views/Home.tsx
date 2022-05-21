import HomeInfo from '../data/home-info.json';

import { HomeType } from '../types/Home';

export default function Home() {
    const homeInfo:HomeType = HomeInfo;

    const sectionLength = homeInfo.sections.length;
    const sectionsList = homeInfo.sections.map((section, index) => {
        return (
            <div key={section}>
                <p className={ index === sectionLength -1 ? 'cursor_blink' : ''}>{section}</p>
            </div>
        );
    })

    return (
        <div className="home subpage">
            { sectionsList }
        </div>
    )
}