import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Search, Sparkles } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import BlogNavBar from '@/components/layout/BlogNavBar';
import Footer from '@/components/layout/Footer';
import ContactInfo from '@/components/sections/Contact';
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

            {/* Header Section */}
            <div className="bg-gray-50 pt-36 md:pt-20 pb-10">
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
                                A collection of my thoughts, projects, notes, and a little bit of everything in between.
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
