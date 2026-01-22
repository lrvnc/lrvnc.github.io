import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {
  sectionVariant,
  listVariant,
  itemVariant,
  iconVariant,
} from "@/lib/animations";
import { countryFlags } from "@/lib/logoMap";

type WorkItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const workExperienceData: WorkItem[] = [
  {
    role: "Full Stack Developer",
    company: "Banco BTG Pactual",
    period: "Nov 2023 - Dec 2024",
    description:
      "Largest investment bank in Latin America. Developed automated systems for internal clients, gaining experience in both frontend and backend development, Amazon AWS, and DevOps. Estimated efficiency gains exceeded 220 hours per month.",
  },
  {
    role: "Research Intern in Computational Neurosciences",
    company: "MIT",
    period: "May 2023 - Nov 2023",
    description:
      "Worked in Prof. Guangyu Robert Yang's lab (now co-founder and CEO of Altera AI) as part of my Master’s degree placement, researching neural activity modeling in the small worm C. elegans using advanced neural networks.",
  },
  {
    role: "Research Intern",
    company: "LightOn",
    period: "Jul 2022 - Dec 2022",
    description:
      "Worked on the Qore Quantum Photonic Processor, a reconfigurable plug-and-play quantum circuit prototype, focusing on stabilization and calibration challenges.",
  },
];

const teachingExperienceData: WorkItem[] = [
  {
    role: "TA in Experimental Physics II & Maths for Physicists",
    company: "University of Exeter",
    period: "Jan 2025 - Present",
    description: "Teaching Assistant in Experimental Physics II & Maths for Physicists.",
  },
  {
    role: "Math Tutor",
    company: "UFSCar (Peer Tutoring Program)",
    period: "Mar 2019 - Jul 2021",
    description:
      "Helped students build self-directed learning skills through peer tutoring, problem-set clinics, and exam preparation sessions.",
  },
];

const ExperienceList = ({ data }: { data: WorkItem[] }) => (
  <motion.div
    className="w-full relative max-w-3xl mx-auto border-l-2 border-gray-200"
    variants={listVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {data.map((job, index) => {
      const flagData = countryFlags[job.company as keyof typeof countryFlags];

      return (
        <motion.div
          key={`${job.company}-${index}`}
          className="mb-10 pl-8 relative items-center"
          variants={itemVariant}
        >
          <motion.span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-50">
            <Briefcase className="w-4 h-4 text-white" />
          </motion.span>

          <h3 className="flex items-center min-h-8 text-xl font-semibold text-gray-900">
            {job.role}
          </h3>

          <div className="text-base text-justify font-semibold text-gray-600 mb-2">
            {job.company}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md w-fit">
              {flagData && (
                <div className="flex items-center gap1.5">
                  {Array.isArray(flagData.flag) ? (
                    flagData.flag.map((src, i) => (
                      <img
                        key={`${src}-${i}`}
                        src={src}
                        alt={flagData.country ?? "Country flag"}
                        className={flagData.className || "w-4 h-auto rounded-[1px]"}
                        loading="lazy"
                      />
                    ))
                  ) : (
                    <img
                      src={flagData.flag}
                      alt={flagData.country ?? "Country flag"}
                      className={flagData.className || "w-4 h-auto rounded-[1px]"}
                      loading="lazy"
                    />
                  )}
                </div>
              )}
              <span className="text-gray-600 font-medium">
                {flagData.country}
              </span>
            </div>

            <span className="hidden sm:inline text-gray-300">•</span>

            <time className="font-medium text-gray-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 sm:hidden" />
              {job.period}
            </time>
          </div>

          <p className="text-base font-normal text-gray-600 text-justify">
            {job.description}
          </p>
        </motion.div>
      );
    })}
  </motion.div>
);

const WorkExperience = () => (
  <motion.section
    id="work-experience"
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container flex flex-col items-center px-7">
      <h2 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold text-center mb-12 text-gray-900">
        Work Experience
      </h2>
      <ExperienceList data={workExperienceData} />

      <h2 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold text-center mb-12 mt-20 text-gray-900">
        Academic & Teaching Experience
      </h2>
      <ExperienceList data={teachingExperienceData} />
    </div>
  </motion.section>
);

export default WorkExperience;
