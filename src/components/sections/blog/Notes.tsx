import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const Notes = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-8"
            >
                <div className="bg-gray-100 p-6 rounded-full inline-block mb-6">
                    <ScrollText className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Notes & Sniper Links</h2>
                <p className="text-gray-500 max-w-md">
                    Implementation for Notes coming soon. This section will contain rough thoughts, snippets, and quick links.
                </p>

                {/* Placeholder horizontal scroll view */}
                <div className="mt-12 w-full max-w-4xl mx-auto h-64 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400 font-medium">Content Area (Horizontal Scroll)</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Notes;
