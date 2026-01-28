import { motion } from "framer-motion";
import { Award, MessageSquare, Code } from "lucide-react";
import { listVariant, itemVariant } from "@/lib/animations";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certificationsData, skillsData } from "@/data/skills";

const CertificationsAndSkills = () => (
  <motion.section
    id="certifications"
    className="py-20 bg-gray-50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Certifications & Skills
      </h2>
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={listVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariant} className="flex">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certificationsData.map((cert) => (
                  <li key={cert.name}>
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-sm text-gray-500">
                      {cert.issuer} &bull; {cert.year}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariant} className="flex">
          <Card className="bg-white h-full hover:shadow-lg transition-shadow duration-300 w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                <span>Technical Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Tools & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariant} className="flex">
          <Card className="bg-white h-full hover:shadow-lg transition-shadow duration-300 w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-green-500" />
                <span>Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsData.languages.map((lang) => (
                  <Badge key={lang} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default CertificationsAndSkills;
