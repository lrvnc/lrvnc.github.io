import { Video } from './types';

export const videosData: Video[] = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Tutorial: Master ${['React', 'Next.js', 'Node.js', 'Python', 'Machine Learning'][i % 5]} in ${['10 Minutes', '1 Hour', 'Crash Course'][i % 3]}`,
    duration: `${10 + (i * 5)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    views: `${(Math.random() * 100).toFixed(1)}k views`,
    thumbnail: `https://images.unsplash.com/photo-${['1611162617474-5b21e879e113', '1498050108023-c5249f4df085', '1633356122544-f134324a6cee'][i % 3]}?auto=format&fit=crop&q=80&w=600`,
    category: ['Tutorial', 'Vlog', 'Talk'][i % 3]
}));
