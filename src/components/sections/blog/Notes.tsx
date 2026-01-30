import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link as LinkIcon, ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notesData } from "@/data/blog/notes";

interface NotesProps {
    searchQuery: string;
    selectedTags?: string[];
}

const Notes = ({ searchQuery, selectedTags = [] }: NotesProps) => {
    const filteredNotes = notesData.filter(note => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            note.title.toLowerCase().includes(query) ||
            note.content.toLowerCase().includes(query) ||
            note.category.toLowerCase().includes(query);

        const matchesTags = selectedTags.length === 0 ||
            selectedTags.includes(note.category) ||
            (note.tags && note.tags.some(tag => selectedTags.includes(tag)));

        return matchesSearch && matchesTags;
    });


    const getTagDisplay = (tag: string) => {
        if (tag.toLowerCase() === 'portuguese') return { text: 'Portuguese', icon: '🇧🇷' };
        if (tag.toLowerCase() === 'english') return { text: 'English', icon: '🇺🇸' };
        if (tag.toLowerCase() === 'french') return { text: 'French', icon: '🇫🇷' };
        return { text: tag, icon: null };
    };

    return (
        <div className="w-full pb-24">
            {filteredNotes.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
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
                            <Card className="h-[300px] bg-yellow-50/80 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800 shadow-sm hover:shadow-md transition-all flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400/50" />
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex gap-1 flex-wrap">
                                            <Badge variant="outline" className="bg-yellow-100/50 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900/50">
                                                {note.category}
                                            </Badge>
                                            {note.tags && note.tags.map(tag => {
                                                const { text, icon } = getTagDisplay(tag);
                                                return (
                                                    <Badge key={tag} variant="outline" className="bg-white/50 dark:bg-black/20 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-50 dark:hover:bg-yellow-900/30">
                                                        {icon && <span className="mr-1">{icon}</span>}
                                                        {text}
                                                    </Badge>
                                                );
                                            })}
                                        </div>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{note.date}</span>
                                    </div>
                                    <CardTitle className="text-lg leading-tight group-hover:underline decoration-yellow-400/50 underline-offset-4 cursor-pointer">
                                        {note.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4 flex-1 font-mono">
                                        {note.content}
                                    </p>
                                    {(note.link || note.pdfUrl) && (
                                        <div className="mt-4 pt-4 border-t border-yellow-200/50 dark:border-yellow-800/50 flex flex-col gap-2">
                                            {note.link && (
                                                <div className="flex items-center text-xs text-muted-foreground gap-2 cursor-pointer hover:text-foreground">
                                                    <LinkIcon className="w-3 h-3" />
                                                    <span className="truncate max-w-[150px]">{note.link}</span>
                                                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            )}
                                            {note.pdfUrl && (
                                                <a
                                                    href={note.pdfUrl}
                                                    download
                                                    className="flex items-center text-xs text-yellow-700 dark:text-yellow-300 gap-2 cursor-pointer hover:text-yellow-900 dark:hover:text-yellow-100 font-medium"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FileText className="w-3 h-3" />
                                                    <span>Download PDF</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full blur-2xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/30 transition-colors" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Notes;
