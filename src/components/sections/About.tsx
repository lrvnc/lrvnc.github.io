import { motion } from "framer-motion";
import { itemVariant, listVariant } from "@/lib/animations";
import ImageCarousel from "@/components/common/ImageCarousel";
import { aboutMeData } from "@/data/about";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div className="w-full lg:w-1/2" variants={itemVariant}>
            <ImageCarousel images={aboutMeData.images} />
          </motion.div>

          <motion.div variants={listVariant} className="w-full lg:w-1/2">
            <motion.h2
              variants={itemVariant}
              className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold mb-6 text-gray-900 text-center lg:text-left"
            >
              {aboutMeData.title}
            </motion.h2>
            {aboutMeData.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariant}
                className={`text-gray-700 leading-relaxed text-justify ${index < aboutMeData.description.length - 1 ? "mb-4" : ""
                  }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
