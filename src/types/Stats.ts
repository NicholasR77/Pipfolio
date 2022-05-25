export interface StatsType {
    [key: string]: StatType;
}

interface StatType {
    name: string;
    subStats: any[];
}