import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";
import { videosData } from "@/data/blog/videos";

interface VideosProps {
    searchQuery: string;
    selectedTags?: string[];
}

const Videos = ({ searchQuery, selectedTags = [] }: VideosProps) => {
    const filteredVideos = videosData.filter(video => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            video.title.toLowerCase().includes(query) ||
            video.category.toLowerCase().includes(query);

        const matchesTags = selectedTags.length === 0 ||
            selectedTags.includes(video.category);

        return matchesSearch && matchesTags;
    });

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
