'use client';

// Next JS
import Link from 'next/link';
import Image from 'next/image';

// Icons
import { FaGithub } from 'react-icons/fa6';

// Assets
import logo from '.././assets/logo.png';

// Components
import AnimatedIcon from './AnimatedIcon';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-[9999] flex w-full flex-row items-center justify-between border-b border-neutral-800 bg-[#020B05] px-8 py-4">
      {/* Title */}
      <span className="flex flex-row items-center gap-2 text-2xl">
        <Image src={logo} alt="logo" className="h-10 w-10" />
        <h2 className="-mt-1 font-extrabold">upper</h2>
      </span>

      {/* Links */}
      <div className="flex flex-row items-center gap-[4rem]">
        <Link href="/" className="transition duration-300 hover:text-amber-200">
          Home
        </Link>
        <Link href="/nike-jordan" className="transition duration-300 hover:text-amber-200">
          Nike
        </Link>
        <Link href="/quiz-tower" className="transition duration-300 hover:text-amber-200">
          Quiz Tower
        </Link>
      </div>

      {/* Button */}
      <span className="flex flex-row items-center gap-6">
        <AnimatedIcon fileName="cart" />

        <Link href="https://github.com/aliasif78/design-system-core" target="_blank" className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-[#2a604c] px-4 py-2 transition duration-300 hover:bg-[#2a604c]">
          <FaGithub size={20} />
          GitHub
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
