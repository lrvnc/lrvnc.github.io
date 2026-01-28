import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogNavBar from '@/components/layout/BlogNavBar';
import Posts from '@/components/sections/blog/Posts';
import Notes from '@/components/sections/blog/Notes';
import Videos from '@/components/sections/blog/Videos';
import Announcements from '@/components/sections/blog/Announcements';

type BlogSection = 'Posts' | 'Notes' | 'Videos' | 'Announcements';

const Blog = () => {
    const [activeSection, setActiveSection] = useState<BlogSection>('Posts');
    const sections: BlogSection[] = ['Posts', 'Notes', 'Videos', 'Announcements'];

    // Slide animation variants
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const [[page, direction], setPage] = useState([0, 0]);

    // Handle section change from Navbar
    const handleSectionChange = (newSection: BlogSection) => {
        const newIndex = sections.indexOf(newSection);
        const currentIndex = sections.indexOf(activeSection);
        const newDirection = newIndex > currentIndex ? 1 : -1;

        setPage([newIndex, newDirection]);
        setActiveSection(newSection);
    };

    // Handle Swipe Gestures


    const renderSection = () => {
        switch (activeSection) {
            case 'Posts': return <Posts />;
            case 'Notes': return <Notes />;
            case 'Videos': return <Videos />;
            case 'Announcements': return <Announcements />;
            default: return <Posts />;
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-gray-50 flex flex-col font-sans">
            <BlogNavBar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />

            <div className="flex-1 relative overflow-hidden mt-16">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page[0]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 w-full h-full"
                        className="absolute inset-0 w-full h-full"
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Blog;
