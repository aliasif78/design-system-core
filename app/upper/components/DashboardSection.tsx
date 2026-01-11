'use client';

// Next JS
import Image from 'next/image';

// Framer Motion
import { motion } from 'framer-motion';

// Assets
import gradient from '.././assets/gradient.webp';
import macScreen from '.././assets/mac-screen.webp';

const MotionImage = motion(Image);

const DashboardSection = () => {
  return (
    <>
      {/* Gradient: animate immediately on page render */}
      <MotionImage
        src={gradient}
        alt="gradient"
        className="-mt-[25vh] w-full"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Mac screen: animate only when it comes into view */}
      <MotionImage
        src={macScreen}
        alt="macScreen"
        className="-mt-[28vh] w-2/3"
        initial={{ opacity: 0, y: 140 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </>
  );
};

export default DashboardSection;
