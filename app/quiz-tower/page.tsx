'use client';

// React
import React from 'react';

// Next JS
import Image from 'next/image';
import Link from 'next/link';

// Assets
import bg from './assets/bg.png';

// Icons
import { FaGithub } from 'react-icons/fa6';
import { PiPalette, PiFlask, PiCloudSun, PiAtom, PiGlobeHemisphereWest, PiCalculator, PiTranslate, PiPlanet, PiHeartBreak } from 'react-icons/pi';

const page = () => {
  // Custom Components
  const Badge = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
    <div className="flex aspect-square size-[100px] cursor-default flex-col items-center justify-center gap-2 rounded-xl border-[1px] bg-white/20 text-white transition duration-300 hover:border-[#9476be] hover:bg-[#9476be]">
      {icon}
      <span>{title}</span>
    </div>
  );

  return (
    <div className="font-inter relative flex h-screen w-screen items-center justify-center text-white">
      <Image src={bg} alt="bg" priority className="absolute inset-0 h-full w-full object-cover" />

      <div className="relative z-10 h-[85vh] w-[85vw] overflow-hidden rounded-4xl border border-white bg-white/30 bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-[5px]">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 flex w-full flex-row items-center justify-between px-8 py-4">
          {/* Title */}
          <h2 className="text-2xl font-bold">QuizTower</h2>

          {/* Links */}
          <div className="flex flex-row items-center gap-[4rem]">
            <Link href="/">Home</Link>
            <Link href="/nike-jordan">Nike</Link>
            <Link href="/">Contact</Link>
          </div>

          {/* Button */}
          <button className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-black">
            <FaGithub className="text-2xl" />
            Github
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex h-full w-full flex-row items-center justify-between px-[4rem]">
          {/* Left */}
          <div className="flex w-1/2 flex-col gap-6">
            {/* Title */}
            <h1 className="text-5xl font-bold 2xl:text-6xl">Unleash Your Inner Wizard of Wisdom</h1>

            {/* Description */}
            <p className="pr-[5rem] text-lg 2xl:text-xl">Embark on a journey of knowledge exploration with our extensive collection of interactive quizzes.</p>

            {/* Button */}
            <button className="w-fit cursor-pointer rounded-full bg-[#984EFF] px-4 py-2 text-white transition duration-300 hover:bg-[#7f65a3]">Get it now</button>
          </div>

          {/* Right */}
          <div className="flex w-1/2 flex-col items-center justify-center gap-6">
            <h3 className="text-lg uppercase">Hi! Which topic are you interested in?</h3>

            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Badge title="Art" icon={<PiPalette size={30} />} />
              <Badge title="Science" icon={<PiFlask size={30} />} />
              <Badge title="Weather" icon={<PiCloudSun size={30} />} />
              <Badge title="Physics" icon={<PiAtom size={30} />} />
              <Badge title="Geography" icon={<PiGlobeHemisphereWest size={30} />} />
              <Badge title="Math" icon={<PiCalculator size={30} />} />
              <Badge title="Language" icon={<PiTranslate size={30} />} />
              <Badge title="Astonomy" icon={<PiPlanet size={30} />} />
              <Badge title="Health" icon={<PiHeartBreak size={30} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
