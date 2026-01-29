import { Announcement } from './types';

export const announcementsData: Announcement[] = Array.from({ length: 1 }).map((_, i) => ({
    id: i + 1,
    title: `Announcement ${i + 1}: ${['New Project Launch', 'Conference Talk', 'Workshop', 'Library Release', 'Site Update'][i % 5]}`,
    content: "We are excited to announce the release of this new project. It has been in the works for a while together with the community...",
    date: `2024-${['01', '02', '03'][i % 3]}-${10 + i}`,
    type: ['Major', 'Minor', 'Event'][i % 3]
}));
