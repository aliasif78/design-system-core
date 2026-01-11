'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Assets
import circle from '.././assets/circle.png';

// Components
import AnimatedButton from './AnimatedButton';

const MotionDiv = motion.div;
const MotionH3 = motion.h3;
const MotionImage = motion(Image);

const IntegrationsSection = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-[5rem]">
      {/* Text */}
      <div className="flex w-1/2 flex-col gap-[3rem]">
        <div className="flex flex-col">
          <MotionH3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            Integrated with
          </MotionH3>

          <MotionH3 className="bg-gradient-to-b from-[#cdd3cd] to-[#696c69] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            your favourite
          </MotionH3>

          <MotionH3 className="bg-gradient-to-b from-[#b8beb8] to-[#0f0f0f] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            softwares
          </MotionH3>
        </div>

        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
          <AnimatedButton text="Get Started Now" className="text-xl" />
        </MotionDiv>
      </div>

      {/* Images */}
      <div className="flex w-1/2 flex-row gap-[2rem]">
        <MotionImage src={circle} alt="circles" className="h-auto w-full object-contain" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} />
      </div>
    </div>
  );
};

export default IntegrationsSection;
