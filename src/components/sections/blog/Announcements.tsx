import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

const Announcements = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-8"
            >
                <div className="bg-gray-100 p-6 rounded-full inline-block mb-6">
                    <Megaphone className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Announcements</h2>
                <p className="text-gray-500 max-w-md">
                    Latest news and updates will be posted here.
                </p>
            </motion.div>
        </div>
    );
};

export default Announcements;
