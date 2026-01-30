import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Globe, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { codeData } from "@/data/blog/code";

interface CodeProps {
    searchQuery: string;
    selectedTags?: string[];
}

const Code = ({ searchQuery, selectedTags = [] }: CodeProps) => {
    const filteredProjects = codeData.filter(project => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query);

        const matchesTags = selectedTags.length === 0 ||
            (project.tags && project.tags.some(tag => selectedTags.includes(tag)));

        return matchesSearch && matchesTags;
    });

    return (
        <div className="w-full pb-24">
            {filteredProjects.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                    <p className="text-xl">No projects found matching "{searchQuery}"</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-[300px] bg-slate-50/80 border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-slate-400/50" />
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex gap-1 flex-wrap">
                                            {project.tags.map(tag => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="bg-white/50 border-slate-300 text-slate-700 hover:bg-slate-100"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 whitespace-nowrap ml-2">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {project.date}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg leading-tight group-hover:underline decoration-slate-400/50 underline-offset-4 cursor-pointer">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <p className="text-sm text-gray-600 line-clamp-4 flex-1 font-mono">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-200/50 flex gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors ml-auto"
                                            >
                                                <Globe className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-slate-100 rounded-full blur-2xl group-hover:bg-slate-200 transition-colors" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Code;
