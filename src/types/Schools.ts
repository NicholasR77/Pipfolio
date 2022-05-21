export interface SchoolsType {
    [key: string]: SchoolType;
}

interface SchoolType {
    name: string;
    degree: string;
    dates: string;
    description: string;
}