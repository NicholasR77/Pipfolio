import { useParams } from 'react-router-dom';

// Types
import { JobsType } from '../types/Jobs';

// Job Data
import Jobs from '../data/jobs.json';

export default function JobDetails() {
    let { jobName } = useParams();

    const jobs: JobsType = Jobs;

    const currentJob = jobName ? jobs[jobName] : jobs["default"];
    
    return (
        <div>
            <h2>Hello World - { currentJob.name }</h2>
        </div>
    )
}