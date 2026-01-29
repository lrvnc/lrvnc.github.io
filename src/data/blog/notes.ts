import { Note } from './types';

export const notesData: Note[] = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: `Quick Note #${i + 1}: ${['React Hooks', 'TypeScript Generics', 'Vim Shortcuts', 'CSS Tricks', 'Linux Commands'][i % 5]}`,
    content: "Just a quick thought about how this specific technology works in production environments. Always remember to check the documentation...",
    category: ['Dev', 'Tools', 'Thoughts'][i % 3],
    tags: [
        ['Dev', 'Tools', 'Thoughts'][i % 3],
        ['English', 'Portuguese', 'French'][i % 3]
    ],
    date: `2024-04-${10 + i}`,
    link: "https://example.com",
    pdfUrl: i % 2 === 0 ? "/example.pdf" : undefined // Add sample PDF URLs to every second note
}));
