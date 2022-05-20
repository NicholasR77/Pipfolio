export interface JobsType {
    [key: string]: JobType;
}

interface JobType {
    name: string,
    description: string,
    roles: RoleType[]
}

interface RoleType {
    title: string,
    dates: string,
    descriptions: string[]
}