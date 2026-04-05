'use client';

// Next JS
import Image from 'next/image';
import Link from 'next/link';

// Assets
import shoe from './assets/shoe.webp';

const page = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-nowrap">
      <nav className="fixed right-4 bottom-4 z-[120] sm:right-6 sm:bottom-6">
        <div className="relative flex flex-col items-center gap-1 rounded-2xl border border-white/30 bg-[#0b1e37]/40 p-1.5 shadow-[0_10px_30px_rgba(1,12,30,0.35)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 to-transparent" />

          <Link href="/upper" className="relative w-full rounded-xl px-3 py-2 text-center text-xs font-medium tracking-wide text-white/85 transition duration-300 hover:bg-white/15 hover:text-white sm:px-4 sm:text-sm">
            Upper
          </Link>

          <Link href="/nike-jordan" className="relative w-full rounded-xl bg-white/25 px-3 py-2 text-center text-xs font-semibold tracking-wide text-white sm:px-4 sm:text-sm">
            Nike Jordan
          </Link>

          <Link href="/quiz-tower" className="relative w-full rounded-xl px-3 py-2 text-center text-xs font-medium tracking-wide text-white/85 transition duration-300 hover:bg-white/15 hover:text-white sm:px-4 sm:text-sm">
            Quiz Tower
          </Link>
        </div>
      </nav>

      <div className="flex h-fit w-fit flex-col items-center justify-center">
        {/* Titles */}
        <div className="font-inter mt-16 -mb-[7vh] flex flex-col text-center sm:-mb-[9vh] md:-mb-[10vh] 2xl:-mb-[15vh]">
          <h2 className="xs:text-[60px] text-5xl font-extrabold tracking-[-2px] text-transparent opacity-30 [-webkit-text-stroke:1px_black] [paint-order:stroke] sm:text-[75px] md:text-8xl lg:text-9xl 2xl:text-[160px]">THE NEW 2023</h2>

          <h1 className="xs:text-[80px] xs:-mt-[4rem] z-10 -mt-[3rem] [background-image:linear-gradient(to_right,#4280CF_0%,#3975C0_8%,#0C315F_45%,#0A2444_59%,#03234B_82%,#4280CF_100%)] bg-clip-text text-[60px] font-extrabold tracking-[-6px] text-transparent sm:-mt-[3rem] sm:text-[100px] sm:tracking-[-10px] md:-mt-[5rem] md:text-9xl lg:text-[165px] 2xl:-mt-[7rem] 2xl:text-[200px]">AIR JORDAN</h1>
        </div>

        {/* Shoe Image */}
        <div className="z-50 w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <Image src={shoe} alt="shoe" className="h-auto w-full object-contain" priority={true} />
        </div>

        {/* Secondary Text */}
        <div className="font-inter z-50 flex w-full flex-col items-center justify-center gap-4 pb-[2rem] text-center">
          <h3 className="text-3xl font-extrabold tracking-[-2px] md:text-5xl">Just do it</h3>

          <p className="w-[80%] text-center text-wrap text-[#959799] md:text-lg">Captures messages that stands for more than just sport.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
