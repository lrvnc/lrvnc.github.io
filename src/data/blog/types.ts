export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    readTime: string;
    image: string;
}

export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    tags: string[];
    date: string;
    link: string;
    pdfUrl?: string; // Added for PDF download feature
}

export interface Video {
    id: number;
    title: string;
    duration: string;
    views: string;
    thumbnail: string;
    category: string;
}

export interface Announcement {
    id: number;
    title: string;
    content: string;
    date: string;
    type: string;
}
