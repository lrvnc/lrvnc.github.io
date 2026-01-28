import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PostsProps {
    searchQuery: string;
}

// Extensive placeholder data
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
        excerpt: "A deep dive into the technologies I'm using this year. React, TypeScript, Tailwind, and more.",
        date: "2024-03-22",
        tags: ["Tech", "Web Dev"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Learning Framer Motion",
        excerpt: "Animations can bring a website to life. From subtle micro-interactions to complex page transitions.",
        date: "2024-03-25",
        tags: ["Animation", "React"],
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Future of AI",
        excerpt: "Exploring the implications of recent advancements in Large Language Models and Generative AI.",
        date: "2024-03-28",
        tags: ["AI", "Opinion"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "Understanding Rust Ownership",
        excerpt: "A beginner's guide to the most unique and challenging feature of the Rust programming language.",
        date: "2024-04-02",
        tags: ["Rust", "Programming"],
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 6,
        title: "Building Scalable APIs",
        excerpt: "Best practices for designing RESTful APIs that can handle high traffic and are easy to maintain.",
        date: "2024-04-05",
        tags: ["Backend", "API"],
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 7,
        title: "CSS Grid vs Flexbox",
        excerpt: "When to use which layout model? A comprehensive comparison with practical examples.",
        date: "2024-04-10",
        tags: ["CSS", "Frontend"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 8,
        title: "The Art of Debugging",
        excerpt: "Strategies and tools for finding and fixing bugs efficiently in complex software systems.",
        date: "2024-04-15",
        tags: ["Skills", "Debugging"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 9,
        title: "Database Design Patterns",
        excerpt: "Common patterns for structuring your database for performance and integrity.",
        date: "2024-04-18",
        tags: ["Database", "SQL"],
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 10,
        title: "Introduction to Docker",
        excerpt: "Containerize your applications for consistent environments across development and production.",
        date: "2024-04-22",
        tags: ["DevOps", "Docker"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 11,
        title: "Mastering Git",
        excerpt: "Advanced Git commands and workflows to improve your version control skills.",
        date: "2024-04-25",
        tags: ["Tools", "Git"],
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 12,
        title: "Accessibility in Web Design",
        excerpt: "Why accessibility matters and how to implement it in your React applications.",
        date: "2024-04-30",
        tags: ["Accessibility", "Web Design"],
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=600"
    }
];

const Posts = ({ searchQuery }: PostsProps) => {
    const filteredPosts = blogPosts.filter(post => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });

    return (
        <div className="w-full pb-24"> {/* Added padding bottom for scroll space */}
            {filteredPosts.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                    <p className="text-xl">No posts found matching "{searchQuery}"</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
                >
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }} // Subtle vertical lift on hover
                            className="h-full"
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-white/50 backdrop-blur-sm flex flex-col">
                                <div className="h-48 overflow-hidden relative shrink-0">
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
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
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
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <CardDescription className="text-base text-gray-600 line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </CardDescription>
                                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
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

export default Posts;
