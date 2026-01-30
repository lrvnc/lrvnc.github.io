import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { announcementsData } from "@/data/blog/announcements";

interface AnnouncementsProps {
    searchQuery: string;
    selectedTags?: string[];
}

const Announcements = ({ searchQuery, selectedTags = [] }: AnnouncementsProps) => {
    const filteredAnnouncements = announcementsData.filter(item => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            item.title.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query);

        const matchesTags = selectedTags.length === 0 ||
            selectedTags.includes(item.type);

        return matchesSearch && matchesTags;
    });

    return (
        <div className="w-full pb-24">
            {filteredAnnouncements.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                    <p className="text-xl">No announcements found matching "{searchQuery}"</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {filteredAnnouncements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className={`border-none shadow-md hover:shadow-lg transition-all relative overflow-hidden h-full ${item.type === 'Major' ? 'bg-primary/5 border-primary/20 border' : 'bg-card'}`}>
                                {item.type === 'Major' && (
                                    <div className="absolute top-0 right-0 p-2">
                                        <Bell className="w-4 h-4 text-primary animate-bounce-subtle" />
                                    </div>
                                )}
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant={item.type === 'Major' ? 'default' : 'secondary'}>{item.type}</Badge>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {item.content}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Announcements;
