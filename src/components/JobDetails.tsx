import { useParams } from 'react-router-dom';

// Types
import { JobsType } from '../types/Jobs';

// JSON Data
import Jobs from '../data/jobs.json';

export default function JobDetails() {
    let { jobName } = useParams();

    if (jobName === undefined) {
        return null;
    }

    const jobs: JobsType = Jobs;
    const job = jobs[jobName];
    const roleList = job.roles.map(({ title, dates, descriptions }) => {
        const descriptionList = descriptions.map((description) => {
            return (
                <li key={description}>{description}</li>
            );
        });

        return (
            <div className='roles-details' key={title}>
                <p>{title} | {dates}</p>
                <p>Description:</p>
                <ul>
                    { descriptionList }
                </ul>
            </div>  
        );
    });
    
    return (
        <div className='job-details subpage'>
            <h2>{job.name}</h2>
            <p>{job.description}</p>
            <div className='roles'>
                {roleList}
            </div>
        </div>
    );
}