'use client';

// Dependencies
import { motion } from 'framer-motion';

// Types
import type { Variants } from 'framer-motion';

// Components
import AnimatedButton from './AnimatedButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo-like
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section className="flex h-screen w-screen flex-col items-center justify-center gap-[2rem]" variants={containerVariants} initial="hidden" animate="visible">
      {/* Main Text */}
      <motion.h1 variants={itemVariants} className="bg-gradient-to-b from-white to-[#676a67] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent">
        Amazing!
      </motion.h1>

      {/* Subtext */}
      <motion.h2 variants={itemVariants} className="-mt-2 text-center text-xl text-[#f1f1ef]/70">
        Upper offers a comprehensive suite of tools to
        <br />
        optimize your expense management workflow.
      </motion.h2>

      {/* Button */}
      <motion.div variants={itemVariants} transition={{ duration: 0.4, ease: 'easeOut' }}>
        <AnimatedButton text="Get Started Now" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
