
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, PenSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { listVariant, itemVariant } from '@/lib/animations';
import { placeholderImg, personImg } from '@/lib/constants';
import InstitutionLogos from './InstitutionLogos';
import Typewriter from './Typewriter';

const HeroCV = () => (
  <section className="relative text-white py-40 px-4 flex items-center h-screen min-h-[600px]">
    <div className="absolute inset-0 w-full h-full bg-black">
      <img src={placeholderImg} alt="background" className="opacity-40 w-full h-full object-cover" />

      <div className='absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent'></div>
    </div>
    <div className="relative z-10 container mx-auto">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={listVariant}
      >
        <motion.div variants={itemVariant} className="mb-6">
            <div className="w-44 h-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                <img src={personImg} alt="Leandro Risso Venâncio" className="w-full h-full object-cover" />
            </div>
        </motion.div>
        
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold" variants={itemVariant}>Leandro Risso Venâncio</motion.h1>
        <motion.p className="text-lg sm:text-lg md:text-xl lg:text-xl mt-4 text-gray-300" variants={itemVariant}>Joint PhD Student at UQ and UoE</motion.p>

        <motion.p className="mt-4 max-w-xl mx-auto text-gray-400 flex items-center justify-center text-center" variants={itemVariant}>
          <Typewriter 
            phrases={[
              "Optical Computing.",
              "Machine Learning.",
              "Complex Media.",
              "Powered by coffee and unanswered questions."
            ]} 
          />
        </motion.p>
        
        <motion.div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4" variants={itemVariant}>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gray-800/60 border border-white/60 hover:bg-gray-800/90 transition-transform duration-200 hover:scale-105">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
            <Button size="lg" asChild className="w-full bg-gray-800/60 hover:bg-gray-800/90 border border-white/60 transition-transform duration-200 hover:scale-105">
                <a href="/pdfs/Leandro_CV_20250615.pdf" download="Leandro_RV.pdf">
                    <Download className="mr-2 h-5 w-5" /> Download CV
                </a>
            </Button>
        </motion.div>
        
        <motion.div className="mt-8 flex justify-center items-center gap-6" variants={itemVariant}>
            <a href="https://www.linkedin.com/in/rissov-leandro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/lrvnc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://orcid.org/0009-0002-0924-5218" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="ORCID">
              <PenSquare size={24} />
            </a>
            <a href="mailto:rissov.leandro@email.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
        </motion.div>
      </motion.div>
    </div>
    <InstitutionLogos />
  </section>
);

export default HeroCV;
