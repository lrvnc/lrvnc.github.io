import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sectionVariant, listVariant, itemVariant } from "@/lib/animations";

const portfolioData = [
  {
    title: "Project SSim",
    description:
      "A full-featured e-commerce site with product listings, cart, and checkout.",
    image:
      "https://github.com/lrvnc/project-SSim/raw/master/draw_control_example.gif",
    tags: ["Python", "CoppeliaSim", "Robotics"],
    liveUrl: null,
    sourceUrl: "https://github.com/lrvnc/project-SSim",
  },
  {
    title: "Backprop Tutorial",
    description:
      "Implementing the famous backprop algorithm from scratch using only numpy!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaircAruvnKk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=fbabe5714e059f5d18c938efe2c4229377bdc30ad5a3b8be5a9876e687bfb110",
    tags: ["Numpy", "Neural Networks"],
    liveUrl: null,
    sourceUrl: "https://github.com/lrvnc/backprop-tutorial",
  },
  {
    title: "Qiskit Tutorial",
    description:
      "An introductory tutorial to Qiskit developed during my masters at ESPCI in Quantum Engineering",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frepository-images.githubusercontent.com%2F83821669%2F9207357a-cf9b-45ed-9974-0abc3df14b95&f=1&nofb=1&ipt=bb53ed66c9a7c3f7b99e2f71b6a3b4a11dc5e63118d12cd71774e22b6819c304",
    tags: ["Qiskit", "Quantum Computing"],
    liveUrl: null,
    sourceUrl: "https://github.com/lrvnc/qiskit_espci",
  },
];

const Portfolio = () => (
  <motion.section
    id="portfolio"
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold text-center mb-12 text-gray-900">
        Projects, Notes & Tutorials
      </h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.map((project, index) => (
          <motion.div key={index} variants={itemVariant}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <Button asChild>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                  {/* <Button variant="outline" asChild>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Portfolio;
