export interface Repository {
    id: number;
    name: string;
    avatar: string;
    description?: string;
    tags?: string[];
    language?: string;
    stars: number;
    activity: Date; 
    url: string
}