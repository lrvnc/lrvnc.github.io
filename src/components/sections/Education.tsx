import { Calendar, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { listVariant, itemVariant } from "@/lib/animations";
import { countryFlags } from "@/lib/logoMap";
import { educationData } from "@/data/education";

const Education = () => (
  <motion.section
    id="education"
    className="py-20 bg-gray-50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container flex flex-col items-center px-7">
      <h2 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold text-center mb-12 text-gray-900">
        Education
      </h2>

      <motion.div
        className="w-full relative max-w-3xl mx-auto border-l-2 border-gray-200"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => {
          const flagData = countryFlags[edu.university];
          return (
            <motion.div
              key={index}
              className="mb-10 pl-8 relative items-center"
              variants={itemVariant}
            >
              <motion.span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-50">
                <GraduationCap className="w-4 h-4 text-white" />
              </motion.span>

              <h3 className="flex items-center min-h-8 text-lg sm:text-xl font-semibold text-gray-900">
                {edu.degree}
              </h3>

              <div className="text-sm sm:text-base text-justify font-semibold text-gray-600 mb-2">
                {edu.university}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-4">

                <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md w-fit">
                  {flagData ? (
                    <div className="flex items-center gap-1.5">
                      {Array.isArray(flagData.flag) ? (
                        flagData.flag.map((flagUrl, index) => (
                          <img
                            key={index}
                            src={flagUrl}
                            alt={`Flag ${index}`}
                            className={flagData.className || "w-4 h-auto rounded-[1px]"}
                          />
                        ))
                      ) : (
                        <img
                          src={flagData.flag}
                          alt={`${flagData.country} Flag`}
                          className={flagData.className || "w-4 h-auto rounded-[1px]"}
                        />
                      )}
                      <span className="text-gray-600 font-medium">
                        {flagData.country}
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl">📍{edu.location}</span>
                  )}
                </div>

                <span className="hidden sm:inline text-gray-300">•</span>

                <time className="font-medium text-gray-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 sm:hidden" />
                  {edu.period}
                </time>
              </div>

              {edu.highlights?.length ? (
                <ul className="mt-4 space-y-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="mr-3 h-1.5 w-1.5 min-w-[6px] rounded-full bg-gray-400 shrink-0" />

                      <span className="text-sm sm:text-base leading-relaxed text-left">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </motion.section>
);


export default Education;
