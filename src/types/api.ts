export interface Banner {
    id: number;
    title: string;
    subtitle: string;
    backgroundUrl: string;
}

export interface TimelinePhase {
    label: string;
    date: Date;
}

export interface Competition {
    id: number;
    name: string;
    organizer: string;
    officialWebsite?: string;
    link?: string;
    timeline: TimelinePhase[];
}

export interface NewsItem {
    id: number;
    date: string;
    title: string;
    link: string;
}

export interface ExhibitionWork {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    detailUrl?: string;
}