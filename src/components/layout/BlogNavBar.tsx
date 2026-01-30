import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

type BlogSection = 'Posts' | 'Notes' | 'Videos' | 'Code';

interface BlogNavBarProps {
    activeSection: BlogSection;
    onSectionChange: (section: BlogSection) => void;
}

const BlogNavBar = ({ activeSection, onSectionChange }: BlogNavBarProps) => {
    const sections: BlogSection[] = ['Posts', 'Notes', 'Videos', 'Code'];
    const { theme, setTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border w-full">
            <div className="container mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="font-space font-bold text-xl tracking-tight">Blog</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-foreground pl-1">{activeSection}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-secondary/50 p-1 rounded-full absolute left-1/2 -translate-x-1/2">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => onSectionChange(section)}
                                className={cn(
                                    "relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 z-10",
                                    activeSection === section
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {activeSection === section && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {section}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        <div className="hidden md:flex items-center">
                            <Link to="/">
                                <Button variant="ghost" className="font-medium hover:bg-secondary">
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
                                className="text-muted-foreground"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
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
                            className="md:hidden border-t border-border bg-background overflow-hidden"
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
                                                ? "bg-secondary text-foreground"
                                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        )}
                                    >
                                        {section}
                                    </button>
                                ))}
                                <div className="h-px bg-border my-2 mx-4" />
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
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
