export interface JobsType {
    [key: string]: JobType;
}

interface JobType {
    name: string,
    description: string,
}