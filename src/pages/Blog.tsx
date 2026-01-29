import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Search, Sparkles, Filter, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import BlogNavBar from '@/components/layout/BlogNavBar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/sections/Contact';
import Posts from '@/components/sections/blog/Posts';
import Notes from '@/components/sections/blog/Notes';
import Videos from '@/components/sections/blog/Videos';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FuturisticBackground from '@/components/common/FuturisticBackground';

import { blogPosts } from '@/data/blog/posts';
import { notesData } from '@/data/blog/notes';
import { videosData } from '@/data/blog/videos';

type BlogSection = 'Posts' | 'Notes' | 'Videos';

const Blog = () => {
    const [activeSection, setActiveSection] = useState<BlogSection>('Posts');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Handle section change
    const handleSectionChange = (newSection: BlogSection) => {
        setActiveSection(newSection);
        setSearchQuery('');
        setSelectedTags([]); // Reset tags on section change
    };

    // Calculate available tags based on active section
    const availableTags = useMemo(() => {
        const tags = new Set<string>();
        switch (activeSection) {
            case 'Posts':
                blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
                break;
            case 'Notes':
                notesData.forEach(note => {
                    tags.add(note.category);
                    note.tags?.forEach(tag => tags.add(tag));
                });
                break;
            case 'Videos':
                videosData.forEach(video => tags.add(video.category));
                break;
        }
        return Array.from(tags).sort();
    }, [activeSection]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'Posts': return <Posts searchQuery={searchQuery} selectedTags={selectedTags} />;
            case 'Notes': return <Notes searchQuery={searchQuery} selectedTags={selectedTags} />;
            case 'Videos': return <Videos searchQuery={searchQuery} selectedTags={selectedTags} />;
            default: return <Posts searchQuery={searchQuery} selectedTags={selectedTags} />;
        }
    };

    return (
        <div className="min-h-screen bg-transparent flex flex-col font-space relative">
            <FuturisticBackground />
            <BlogNavBar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />

            {/* Header Section */}
            <div className="bg-transparent pt-36 md:pt-20 pb-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-8 mb-16 relative z-10"
                    >
                        {/* Catchy Pill Label */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-2 mx-auto"
                        >
                            <Database className="w-4 h-4 text-black-400 fill-amber-400" />
                            <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">My personal database</span>
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
                                <span className="text-gray-900">Welcome to my </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 animate-gradient-x">
                                    Blog
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                                A collection of my thoughts, projects, notes, and whatever else I find interesting.
                            </p>
                        </div>
                    </motion.div>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 -z-10 opacity-30 pointer-events-none">
                        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-200"></div>
                        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-400"></div>
                    </div>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-2xl flex gap-2"
                        >
                            <div className="relative flex-1">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 z-10" />
                                <Input
                                    type="text"
                                    placeholder={`Search in ${activeSection}...`}
                                    className="pl-14 h-14 text-lg bg-white/80 backdrop-blur-sm border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all shadow-lg rounded-2xl hover:shadow-xl"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="h-14 px-6 rounded-2xl border-gray-200 shadow-lg hover:shadow-xl bg-white text-gray-600 gap-2"
                                    >
                                        <Filter className="w-5 h-5" />
                                        <span className="hidden sm:inline">Filter</span>
                                        {selectedTags.length > 0 && (
                                            <Badge variant="secondary" className="ml-1 h-5 min-w-5 flex items-center justify-center p-0 px-1.5 text-[10px]">
                                                {selectedTags.length}
                                            </Badge>
                                        )}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 p-4" align="end">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-medium leading-none">Filter by Tags</h4>
                                            {selectedTags.length > 0 && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                                                    onClick={() => setSelectedTags([])}
                                                >
                                                    Reset
                                                </Button>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {availableTags.map(tag => (
                                                <Badge
                                                    key={tag}
                                                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                                                    className="cursor-pointer transition-all hover:scale-105 select-none py-1.5 px-3"
                                                    onClick={() => toggleTag(tag)}
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </motion.div>
                    </div>

                    {/* Active Filters Display */}
                    <AnimatePresence>
                        {selectedTags.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex justify-center mt-4"
                            >
                                <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
                                    {selectedTags.map(tag => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="pl-2 pr-1 py-1 gap-1"
                                        >
                                            {tag}
                                            <button
                                                onClick={() => toggleTag(tag)}
                                                className="hover:bg-gray-200 rounded-full p-0.5"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 container mx-auto px-4 max-w-6xl py-8 pb-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </div>

            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Blog;
