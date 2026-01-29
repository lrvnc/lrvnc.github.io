import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type BlogSection = 'Posts' | 'Notes' | 'Videos' | 'Announcements';

interface BlogNavBarProps {
    activeSection: BlogSection;
    onSectionChange: (section: BlogSection) => void;
}

const BlogNavBar = ({ activeSection, onSectionChange }: BlogNavBarProps) => {
    const sections: BlogSection[] = ['Posts', 'Notes', 'Videos', 'Announcements'];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 w-full">
            <div className="container mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="font-space font-bold text-xl tracking-tight">Blog</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600 pl-1">{activeSection}</span>
                    </div>

                    {/* Desktop Navigation */}
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

                    <div className="hidden md:flex items-center">
                        <Link to="/">
                            <Button variant="ghost" className="font-medium hover:bg-gray-100">
                                About Me
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
                        >
                            <div className="py-4 flex flex-col gap-2">
                                {sections.map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => {
                                            onSectionChange(section);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                                            activeSection === section
                                                ? "bg-gray-50 text-gray-900"
                                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                        )}
                                    >
                                        {section}
                                    </button>
                                ))}
                                <div className="h-px bg-gray-100 my-2 mx-4" />
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    About Me
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default BlogNavBar;
