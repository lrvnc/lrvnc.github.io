import { motion } from "framer-motion";
import { sectionVariant, itemVariant, listVariant } from "@/lib/animations";
import { ElegantCarousel } from "./ElegantCarousel";

// You can add more images here for the gallery. I've used the existing ones as a starting point.
const aboutMeImages = [
  { src: "/me/imgs/mit1-zoom.jpg", alt: "Me at MIT - 2023" },
  { src: "/me/imgs/espci2-zoom.jpg", alt: "My graduation at ESPCI - 2025" },
  { src: "/me/imgs/espci3.jpg", alt: "My graduation at ESPCI - 2025" },
  { src: "/me/imgs/trip1.jpg", alt: "Trip in UK - 2025" },
];

const AboutMe = () => {
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
            <ElegantCarousel images={aboutMeImages} />
          </motion.div>

          <motion.div variants={listVariant} className="w-full lg:w-1/2">
            <motion.h2
              variants={itemVariant}
              className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold mb-6 text-gray-900 text-center lg:text-left"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={itemVariant}
              className="text-gray-700 leading-relaxed mb-4 text-justify"
            >
              Hi, and welcome to my personal page! I'm Leandro, originally from
              Limeira — a not-so-small city in the countryside of São Paulo,
              Brazil. I'm currently a PhD student in the QUEX joint program,
              working at the intersection of Physics and Computer Science. My
              research lies in the multidisciplinary field of Optical Computing,
              where I explore how light can be harnessed to perform machine
              learning tasks, accelerate processing, reduce energy consumption
              during training and inference, and more.
            </motion.p>
            <motion.p
              variants={itemVariant}
              className="text-gray-700 leading-relaxed text-justify"
            >
              I love traveling and discovering new places. But more than that, I
              value the connections made along the way — it's the people who
              make the journey meaningful. Feel free to reach out if you'd like
              to connect, collaborate, or just have a good chat!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
