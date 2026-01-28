import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";

// Placeholder data for blog posts - this could be moved to a data file later
const blogPosts = [
    {
        id: 1,
        title: "Welcome to my Blog",
        excerpt: "This is the first post on my new blog where I'll be sharing my thoughts, projects, and learnings.",
        date: "2024-03-20",
        tags: ["Personal", "Update"],
        readTime: "2 min read"
    },
    // Add more placeholder posts as needed
];

const Blog = () => {
    return (
        <PageLayout>
            <div className="pt-24 pb-16 min-h-screen bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Blog & Resources
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                A collection of my thoughts, projects, notes, and resources.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md overflow-hidden group cursor-pointer">
                                        <CardHeader className="space-y-4">
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                                {post.title}
                                            </CardTitle>
                                            <div className="flex gap-2">
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                                        <Tag className="w-3 h-3" />
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-gray-600 line-clamp-3">
                                                {post.excerpt}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {blogPosts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No posts found yet. Check back soon!</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Blog;
