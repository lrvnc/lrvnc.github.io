import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Placeholder data
const blogPosts = [
    {
        id: 1,
        title: "Welcome to my Blog",
        excerpt: "This is the first post on my new blog where I'll be sharing my thoughts, projects, and learnings.",
        date: "2024-03-20",
        tags: ["Personal", "Update"],
        readTime: "2 min read",
        image: "https://images.unsplash.com/photo-1499750310159-5b5f2269a2d3?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "My Tech Stack 2024",
        excerpt: "A deep dive into the technologies I'm using this year for web development and data science.",
        date: "2024-03-22",
        tags: ["Tech", "Web Dev"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Learning Framer Motion",
        excerpt: "Animations can bring a website to life. varying from subtle micro-interactions to complex page transitions.",
        date: "2024-03-25",
        tags: ["Animation", "React"],
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Future of AI",
        excerpt: "Exploring the implications of recent advancements in Large Language Models.",
        date: "2024-03-28",
        tags: ["AI", "Opinion"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    }
];

const Posts = () => {
    return (
        <div className="h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[85vw] md:min-w-[400px] snap-center first:pl-4 last:pr-4"
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-white/50 backdrop-blur-sm">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <CardHeader className="space-y-4">
                                    <div className="flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="flex items-center gap-1 text-xs">
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-600 line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </CardDescription>
                                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* Spacer for proper scrolling */}
                    <div className="min-w-8" />
                </div>
            </motion.div>
        </div>
    );
};

export default Posts;
