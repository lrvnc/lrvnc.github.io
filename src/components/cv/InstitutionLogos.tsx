import { motion } from 'framer-motion';
import LogoPlaceholder from './LogoPlaceholder';
import { logoMap } from '@/lib/logoMap';
import { cn } from '@/lib/utils';

const institutions = [
  'UFSCAR',
  'ESPCI Paris',
  'MIT',
  'University of Exeter',
  'University of Queensland'
];

const InstitutionLogos = () => {
  const marqueeInstitutions = [...institutions, ...institutions, ...institutions];

  return (
    <div className="absolute bottom-0 left-0 w-full py-3">

      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); } /* Move 1/3 do total */
        }
        .animate-marquee {
          animation: infinite-scroll 20s linear infinite;
        }
        /* PAUSE: */
        .hover-pause:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden hover-pause before:absolute before:left-0 before:top-0 before:w-24 before:h-full before:bg-gradient-to-r before:from-gray-950 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-24 after:h-full after:bg-gradient-to-l after:from-gray-950 after:to-transparent after:z-10">
        <motion.div
          className="flex items-center w-max animate-marquee"
        >
          {marqueeInstitutions.map((name, index) => {
            const logoData = logoMap[name];
            return (
              <div key={index} className="flex-shrink-0  py-1">
                <motion.div whileHover={{ scale: 1.1, zIndex: 10 }} transition={{ duration: 0.2 }} className='
                  group cursor-pointer
                  relative
                  flex items-center justify-center
                  rounded-xl px-5 py-5
                  h-[60px] w-[200px]
                  lg:h-[90px] md:h-[80px] sm:h-[70px]
                  transition-all duration-200
                  hover:bg-white/90
                  '>
                  {logoData && logoData.src ? (
                    <img
                      src={logoData.src}
                      alt={`${name} logo`}
                      title={name}
                      className={cn("object-contain w-full h-full grayscale invert contrast-75 opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100", logoData.className)}
                    />
                  ) : (
                    <LogoPlaceholder name={name} className="h-12 w-32 text-2xl" />
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default InstitutionLogos;
