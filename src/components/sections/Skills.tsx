import { motion } from "framer-motion";
import { Globe, Terminal, Code2, Server, Database } from "lucide-react";
import { listVariant, itemVariant } from "@/lib/animations";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { spokenLanguagesData, technicalSkillsData } from "@/data/skills";

const Skills = () => (
  <motion.section
    id="skills"
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
        Skills & Languages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Technical Skills Column */}
        <motion.div variants={listVariant} className="space-y-6">
          <motion.div variants={itemVariant}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Programming</h3>
            </div>

            {/* Primary Skill - Python */}
            <Card className="bg-gray-50 border-blue-100 border-2 overflow-hidden relative mb-6">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code2 size={100} />
              </div>
              <CardHeader className="relative z-10 pb-2">
                <CardDescription className="font-medium text-blue-600">Primary Language</CardDescription>
                <CardTitle className="text-3xl font-bold text-gray-900">Python</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-2">
                <p className="text-gray-600 mb-0">
                  Extensive experience in Data Science, AI, scripting, and backend development.
                </p>
              </CardContent>
            </Card>

            {/* Other Skills */}
            <Card className="bg-gray-50 border-gray-100 h-fit">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    <Code2 className="w-4 h-4" /> Other Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkillsData.otherLanguages.map(skill => (
                      <Badge key={skill} variant="white" className="px-3 py-1 text-sm bg-white border-gray-200 text-gray-700 shadow-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    <Server className="w-4 h-4" /> Fullstack & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkillsData.frameworksAndTools.map(skill => (
                      <Badge key={skill} variant="white" className="px-3 py-1 text-sm bg-white border-gray-200 text-gray-700 shadow-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Spoken Languages Column */}
        <motion.div variants={listVariant} className="space-y-6">
          <motion.div variants={itemVariant}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>

            <div className="grid gap-4">
              {spokenLanguagesData.map((lang, idx) => (
                <Card key={lang.language} className="bg-gray-50 border-gray-100 hover:border-green-200 transition-colors group">
                  <CardContent className="flex items-center p-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                          {/* @ts-ignore */}
                          {lang.flag && <img src={lang.flag} alt={lang.language} className="w-5 h-auto rounded-[2px]" />}
                          {lang.language}
                        </h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">{lang.level}</Badge>
                      </div>
                      {lang.description && (
                        <p className="text-gray-500 text-sm mt-1 font-medium">{lang.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </motion.section>
);

export default Skills;
