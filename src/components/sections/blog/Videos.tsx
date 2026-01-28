import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";

interface VideosProps {
    searchQuery: string;
}

const videosData = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Tutorial: Master ${['React', 'Next.js', 'Node.js', 'Python', 'Machine Learning'][i % 5]} in ${['10 Minutes', '1 Hour', 'Crash Course'][i % 3]}`,
    duration: `${10 + (i * 5)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    views: `${(Math.random() * 100).toFixed(1)}k views`,
    thumbnail: `https://images.unsplash.com/photo-${['1611162617474-5b21e879e113', '1498050108023-c5249f4df085', '1633356122544-f134324a6cee'][i % 3]}?auto=format&fit=crop&q=80&w=600`,
    category: ['Tutorial', 'Vlog', 'Talk'][i % 3]
}));

const Videos = ({ searchQuery }: VideosProps) => {
    const filteredVideos = videosData.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full pb-24">
            {filteredVideos.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                    <p className="text-xl">No videos found matching "{searchQuery}"</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="border-none shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer bg-black text-white h-full relative">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {video.duration}
                                    </div>
                                </div>
                                <CardContent className="p-4 bg-gray-900 border-t border-gray-800">
                                    <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                        <span>{video.category}</span>
                                        <span>{video.views}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Videos;
