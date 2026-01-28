import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link as LinkIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NotesProps {
    searchQuery: string;
}

const notesData = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: `Quick Note #${i + 1}: ${['React Hooks', 'TypeScript Generics', 'Vim Shortcuts', 'CSS Tricks', 'Linux Commands'][i % 5]}`,
    content: "Just a quick thought about how this specific technology works in production environments. Always remember to check the documentation...",
    category: ['Dev', 'Tools', 'Thoughts'][i % 3],
    date: `2024-04-${10 + i}`,
    link: "https://example.com"
}));

const Notes = ({ searchQuery }: NotesProps) => {
    const filteredNotes = notesData.filter(note => {
        const query = searchQuery.toLowerCase();
        return (
            note.title.toLowerCase().includes(query) ||
            note.content.toLowerCase().includes(query) ||
            note.category.toLowerCase().includes(query)
        );
    });

    return (
        <div className="w-full pb-24">
            {filteredNotes.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                    <p className="text-xl">No notes found matching "{searchQuery}"</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredNotes.map((note, index) => (
                        <motion.div
                            key={note.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-[300px] bg-yellow-50/80 border-yellow-200 shadow-sm hover:shadow-md transition-all flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400/50" />
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="outline" className="bg-yellow-100/50 border-yellow-300 text-yellow-800 hover:bg-yellow-100">
                                            {note.category}
                                        </Badge>
                                        <span className="text-xs text-gray-400">{note.date}</span>
                                    </div>
                                    <CardTitle className="text-lg leading-tight group-hover:underline decoration-yellow-400/50 underline-offset-4 cursor-pointer">
                                        {note.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 line-clamp-4 flex-1 font-mono">
                                        {note.content}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-yellow-200/50 flex items-center text-xs text-gray-500 gap-2 cursor-pointer hover:text-gray-800">
                                        <LinkIcon className="w-3 h-3" />
                                        <span className="truncate max-w-[150px]">{note.link}</span>
                                        <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </CardContent>
                                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-yellow-100 rounded-full blur-2xl group-hover:bg-yellow-200 transition-colors" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Notes;
