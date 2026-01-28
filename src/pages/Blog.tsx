import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import BlogNavBar from '@/components/layout/BlogNavBar';
import Posts from '@/components/sections/blog/Posts';
import Notes from '@/components/sections/blog/Notes';
import Videos from '@/components/sections/blog/Videos';
import Announcements from '@/components/sections/blog/Announcements';

type BlogSection = 'Posts' | 'Notes' | 'Videos' | 'Announcements';

const Blog = () => {
    const [activeSection, setActiveSection] = useState<BlogSection>('Posts');
    const [searchQuery, setSearchQuery] = useState('');

    // Handle section change from Navbar
    const handleSectionChange = (newSection: BlogSection) => {
        setActiveSection(newSection);
        setSearchQuery(''); // Reset search on section change
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'Posts': return <Posts searchQuery={searchQuery} />;
            case 'Notes': return <Notes searchQuery={searchQuery} />;
            case 'Videos': return <Videos searchQuery={searchQuery} />;
            case 'Announcements': return <Announcements searchQuery={searchQuery} />;
            default: return <Posts searchQuery={searchQuery} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <BlogNavBar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />

            {/* Sticky Header Section */}
            <div className="sticky top-16 z-30 bg-gray-50/95 backdrop-blur-md border-b border-gray-100 pb-6 pt-8 shadow-sm transition-all">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4 mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 tracking-tight">
                            Welcome to my Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                            A collection of my thoughts, projects, notes, and a bit of everything.
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-2xl relative"
                        >
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                            <Input
                                type="text"
                                placeholder={`Search in ${activeSection}...`}
                                className="pl-14 h-14 text-lg bg-white border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all shadow-lg rounded-2xl hover:shadow-xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 container mx-auto px-4 max-w-6xl py-12">
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
        </div>
    );
};

export default Blog;
