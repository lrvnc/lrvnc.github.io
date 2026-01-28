import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BlogSection = 'Posts' | 'Notes' | 'Videos' | 'Announcements';

interface BlogNavBarProps {
    activeSection: BlogSection;
    onSectionChange: (section: BlogSection) => void;
}

const BlogNavBar = ({ activeSection, onSectionChange }: BlogNavBarProps) => {
    const sections: BlogSection[] = ['Posts', 'Notes', 'Videos', 'Announcements'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 transition-all duration-300">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <span className="font-space font-bold text-xl tracking-tight">Blog</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600 pl-1">{activeSection}</span>
                </div>

                <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full absolute left-1/2 -translate-x-1/2">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => onSectionChange(section)}
                            className={cn(
                                "relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 z-10",
                                activeSection === section
                                    ? "text-white"
                                    : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {activeSection === section && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {section}
                        </button>
                    ))}
                </div>

                <div className="flex items-center">
                    {/* Mobile Nav Button could go here */}
                    {/* For now, linking back to Home */}
                    <Link to="/">
                        <Button variant="ghost" className="font-medium hover:bg-gray-100">
                            About Me
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default BlogNavBar;
