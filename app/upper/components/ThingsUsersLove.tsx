'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

// Assets
import earnings from '.././assets/earnings.svg';
import income from '.././assets/income.svg';
import userInfo from '.././assets/user-info.svg';
import connections from '.././assets/connections.png';
import currency from '.././assets/currency.svg';

// Types
type SectionProps = { title: string; description: string; image: StaticImageData | string; widthClass?: string; reverseLayout?: boolean; noImgPadding?: boolean };

// Custom Components
const MotionDiv = motion.div;
const MotionH3 = motion.h3;

const ThingsUsersLove = () => {
  // Custom Components
  const Section = ({ title, description, image, widthClass, reverseLayout, noImgPadding }: SectionProps) => {
    return (
      <MotionDiv className={`flex ${widthClass || 'w-1/3'} ${reverseLayout ? 'flex-col-reverse' : 'flex-col'} to-[#020b05]' overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321]`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <div className="flex flex-col gap-[1rem] p-[2.5rem]">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="text-[#f1f1ef]/60">{description}</p>
        </div>

        <Image src={image} alt={title} className={`${!noImgPadding && (reverseLayout ? 'p-[1.5rem]' : 'ml-[1.5rem]')} h-auto w-full object-contain`} />
      </MotionDiv>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[5rem]">
      {/* Text */}

      <div className="flex flex-col items-center justify-center">
        <MotionH3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          Things users love
        </MotionH3>

        <MotionH3 className="bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          about Upper
        </MotionH3>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-[1rem]">
        {/* Top row */}
        <div className="flex flex-row gap-[1rem]">
          <Section title="Users appreciate Upper's intuitive interface" description="An intuitive interface means that users can quickly understand how to perform tasks without the need for extensive training or guidance." image={earnings} widthClass="w-[60%]" />
          <Section title="Robust reporting capabilities" description="Upper offers robust reporting capabilities, allowing users to generate customized reports." image={income} noImgPadding={true} widthClass="w-[40%]" />
        </div>

        {/* Bottom row */}
        <div className="flex flex-row gap-[1rem]">
          <Section title="Easy Integration" description="Integrates with other tools and systems, streamlining their workflow." image={userInfo} />
          <Section title="Mobile Accessibility" description="Mobile app enables users to manage expenses on the go." image={connections} reverseLayout={true} />
          <Section title="Exceptional Support" description="Praise from users for their responsiveness and expertise." image={currency} />
        </div>
      </div>
    </div>
  );
};

export default ThingsUsersLove;
