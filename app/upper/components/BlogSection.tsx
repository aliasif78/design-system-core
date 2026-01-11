'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

// Assets
import wideGradient from '.././assets/wide-gradient.png';
import blogImg1 from '.././assets/blog-img-1.png';
import blogImg2 from '.././assets/blog-img-2.png';
import avatar from '.././assets/avatar.png';

// Types
type SectionProps = { title: string; image: string | StaticImageData; date: string; readTime: string; badges: { title: string; color: string }[] };

// Data
const badges1 = [
  { title: 'BUSINESS', color: 'text-[#F4BE00]' },
  { title: 'TECHONLOGY', color: 'text-[#F936CE]' },
];

const badges2 = [
  { title: 'MARKETING', color: 'text-[#00FFF0]' },
  { title: 'DESIGN', color: 'text-[#0FFF52]' },
];

const MotionDiv = motion.div;
const MotionH3 = motion.h3;
const MotionImage = motion(Image);

const BlogSection = () => {
  // Custom Components
  const Section = ({ title, image, date, readTime, badges }: SectionProps) => {
    return (
      <MotionDiv className="flex w-1/2 flex-col overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[1rem]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="relative w-full">
          {/* Image */}
          <MotionImage src={image} alt="earnings" className="h-[25rem] w-full rounded-4xl object-cover" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} />

          {/* Badges */}
          <MotionDiv className="absolute bottom-4 left-4 flex flex-row gap-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {badges.map((badge) => (
              <span key={badge.title} className={`rounded-full border border-neutral-300/30 bg-[#282828]/30 px-4 py-2 text-sm font-medium ${badge.color}`}>
                {badge.title}
              </span>
            ))}
          </MotionDiv>
        </div>

        <div className="flex flex-col gap-[2rem] p-[2rem]">
          {/* Title */}
          <MotionH3 className="text-[27px] font-semibold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {title}
          </MotionH3>

          {/* User & Meta Data */}
          <MotionDiv className="flex w-full flex-row items-center justify-between text-[#F1F1EF]/60" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.3 }}>
            {/* User */}
            <div className="flex flex-row items-center gap-4">
              {/* Avatar */}
              <Image src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />

              {/* Name & Role */}
              <div className="flex flex-col">
                <h5 className="bg-gradient-to-b from-white to-[#F1F1EF]/50 bg-clip-text text-xl font-medium text-transparent">Ali Asif</h5>
                <p>Web Developer</p>
              </div>
            </div>

            {/* Meta Data */}
            <div className="flex flex-row items-center gap-3 text-lg">
              <p>{date}</p>
              <div className="size-2 rounded-full bg-[#319766]"></div>
              <p>{readTime}</p>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-[2rem]">
      <Image src={wideGradient} alt="wideGradient" className="absolute bottom-0 left-0 h-full w-full object-cover" />

      {/* Text */}
      <div className="flex w-full flex-col items-start justify-start overflow-hidden">
        <MotionH3 className="z-50 bg-gradient-to-b from-white to-[#808480] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          Blogs & Articles
        </MotionH3>
        <MotionH3 className="-mt-1 scale-y-[-0.8] bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent blur-xs" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.3, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.15 }}>
          Blogs & Articles
        </MotionH3>
      </div>

      {/* Sections */}
      <MotionDiv
        className="z-50 flex flex-row gap-[1rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}>
        <Section title="3 Lessons from Brands Re-imagining the Experience" image={blogImg1} date="Dec 29, 2025" readTime="7 min read" badges={badges1} />
        <Section title="3 Lessons from Brands Re-imagining the Experience" image={blogImg2} date="Nov 17, 2025" readTime="10 min read" badges={badges2} />
      </MotionDiv>
    </div>
  );
};

export default BlogSection;
