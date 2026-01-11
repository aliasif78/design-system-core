'use client';

import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import fullGradient from '.././assets/full-gradient.svg';

const FinalCTA = () => {
  const ease: [number, number, number, number] = [0.42, 0, 0.58, 1]; // cubic-bezier

  const textTransition: Transition = { duration: 0.8, ease };
  const buttonTransition: Transition = { duration: 0.5, ease };

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { ...textTransition, delay: i * 0.2 } }),
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: buttonTransition },
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[3rem] overflow-hidden rounded-4xl p-[10rem]">
      {/* Background */}
      <Image src={fullGradient} alt="fullGradient" className="absolute inset-0 h-full w-full object-cover" />

      {/* Animated Text */}
      <div className="z-50 flex flex-col items-center justify-center">
        <motion.h3
          className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }} // 100% visible
          variants={textVariant}>
          Choose Upper For
        </motion.h3>

        <motion.h3
          className="bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }} // 100% visible
          variants={textVariant}>
          Smarter Finances
        </motion.h3>
      </div>

      {/* Animated Button */}
      <motion.div
        className="z-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }} // animate when fully in view
        variants={buttonVariant}>
        <AnimatedButton text="Get Started Now" className="text-xl" />
      </motion.div>
    </div>
  );
};

export default FinalCTA;
