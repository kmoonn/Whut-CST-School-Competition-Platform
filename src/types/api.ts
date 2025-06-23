export interface Banner {
    id: number;
    title: string;
    subtitle: string;
    backgroundUrl: string;
    logoUrl: string;
}

export interface Competition {
    id: number;
    name: string;
    organizer: string;
    participants: number;
    officialWebsite?: string;
    link?: string;
    timeline: {
        registration: Date;
        formSubmission: Date;
        workSubmission: Date;
    };
}

export interface NewsItem {
    id: number;
    date: string;
    title: string;
    link: string;
    category: 'news' | 'notification';
}

export interface ExhibitionWork {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    detailUrl?: string;
}

