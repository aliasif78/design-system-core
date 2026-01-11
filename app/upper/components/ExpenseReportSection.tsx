'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Assets
import sales from '.././assets/sales.svg';
import analytics from '.././assets/analytics.svg';
import blGradient from '.././assets/bl-gradient.svg';

// Icons
import { PiCheckCircle } from 'react-icons/pi';

// Components
import AnimatedButton from './AnimatedButton';

const MotionDiv = motion.div;
const MotionImage = motion(Image);
const MotionH3 = motion.h3;

const ExpenseReportSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem]">
      {/* Text */}
      <div className="flex flex-col items-center justify-center">
        <MotionH3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          Get expense reports
        </MotionH3>

        <MotionH3 className="bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          in a few clicks
        </MotionH3>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-[3rem]">
        {/* Section 1 */}
        <div className="relative flex flex-row gap-[3rem] overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[7rem]">
          <MotionImage src={blGradient} alt="gradient" className="absolute inset-0 h-full w-full object-cover" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />

          {/* Image slides in from left */}
          <MotionImage src={sales} alt="earnings" className="z-50 h-auto w-1/2 object-contain" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} />

          {/* Text slides in from right */}
          <MotionDiv className="z-50 flex flex-col justify-center gap-[2rem] text-lg" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <h4 className="text-4xl font-semibold">Expense Summary Report</h4>
            <p className="text-[#f1f1ef]/60">Generate an expense summary report that provides an overview of total expenses.</p>

            <div className="flex flex-col gap-[1rem]">
              <span className="flex flex-row items-center gap-2">
                <PiCheckCircle size={24} />
                Categorized expenses by type
              </span>

              <span className="flex flex-row items-center gap-2">
                <PiCheckCircle size={24} />A breakdown of expenses by department
              </span>
            </div>

            <AnimatedButton text="Learn More" />
          </MotionDiv>
        </div>

        {/* Section 2 */}
        <div className="flex flex-row gap-[3rem]">
          {/* Text slides in from bottom on scroll */}
          <MotionDiv className="z-50 flex w-1/2 flex-col justify-center gap-[2rem] rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[5rem] text-lg" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <h4 className="text-4xl font-semibold">Expense Compliance Report</h4>
            <p className="text-[#f1f1ef]/60">Upper offers a compliance report that ensures adherence to company policies and regulatory requirements. This report highlights any instances of non-compliance.</p>
            <AnimatedButton text="Get Started Now" />
          </MotionDiv>

          {/* Image slides in from bottom on scroll */}
          <MotionDiv className="relative z-50 flex w-1/2 flex-col justify-center gap-[2rem] overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[5rem] text-lg" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            <Image src={blGradient} alt="gradient" className="absolute inset-0 h-full scale-x-[-1] transform object-cover" />
            <Image src={analytics} alt="analytics" className="z-50 h-auto w-full" />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReportSection;
