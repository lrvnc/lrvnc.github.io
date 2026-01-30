import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog/posts";

interface PostsProps {
    searchQuery: string;
    selectedTags?: string[];
}


const Posts = ({ searchQuery, selectedTags = [] }: PostsProps) => {
    const filteredPosts = blogPosts.filter(post => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query));

        const matchesTags = selectedTags.length === 0 ||
            selectedTags.some(tag => post.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    return (
        <div className="w-full pb-24">
            {blogPosts.length === 0 ? (
                <div className="text-center py-20 bg-card/30 backdrop-blur-sm rounded-3xl border border-dashed border-border">
                    <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="w-8 h-8 text-muted-foreground rotate-[-45deg]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Working on the first publication</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                        Stay tuned! I'm currently crafting my first article. Check back soon for updates.
                    </p>
                </div>
            ) : filteredPosts.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
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
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-card/50 backdrop-blur-sm flex flex-col">
                                <div className="h-48 overflow-hidden relative shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <CardHeader className="space-y-4">
                                    <div className="flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider">
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
                                    <CardDescription className="text-base text-muted-foreground line-clamp-3 mb-6">
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
