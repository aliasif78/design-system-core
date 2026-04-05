'use client';

// Next JS
import Link from 'next/link';

// Icons
import { PiArrowUpRightBold, PiSparkleFill } from 'react-icons/pi';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06131a] text-white">
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 -bottom-24 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 py-16 sm:px-10">
        <p className="mb-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm tracking-wide text-cyan-100 backdrop-blur-md">
          <PiSparkleFill className="text-base text-cyan-300" />
          Interactive Frontend Concepts
        </p>

        <h1 className="text-center text-4xl leading-tight font-black tracking-tight sm:text-6xl md:text-7xl">
          Design Worlds
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Built To Be Explored</span>
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base text-slate-200/90 sm:text-lg">Jump into three polished interface directions. Each route is crafted with a distinct personality, motion language, and visual mood.</p>

        <section className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <Link href="/upper" className="group relative overflow-hidden rounded-3xl border border-emerald-200/20 bg-gradient-to-br from-emerald-500/20 via-emerald-300/5 to-black/40 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200/50">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl" />
            <p className="text-xs tracking-[0.25em] text-emerald-200 uppercase">Productivity</p>
            <h2 className="mt-3 text-3xl font-extrabold">Upper</h2>
            <p className="mt-2 text-sm text-emerald-50/85">A premium SaaS-style experience with strong layout rhythm and dashboard storytelling.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-100">
              Open Experience
              <PiArrowUpRightBold className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          <Link href="/nike-jordan" className="group relative overflow-hidden rounded-3xl border border-blue-200/20 bg-gradient-to-br from-sky-500/25 via-blue-300/10 to-black/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200/50">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-300/20 blur-2xl" />
            <p className="text-xs tracking-[0.25em] text-sky-100 uppercase">Campaign</p>
            <h2 className="mt-3 text-3xl font-extrabold">Nike Jordan</h2>
            <p className="mt-2 text-sm text-sky-50/85">A bold product hero scene with contemporary glass effects and energetic visual contrast.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-100">
              Open Experience
              <PiArrowUpRightBold className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          <Link href="/quiz-tower" className="group relative overflow-hidden rounded-3xl border border-violet-200/25 bg-gradient-to-br from-violet-500/25 via-fuchsia-400/10 to-black/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200/50">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-fuchsia-300/20 blur-2xl" />
            <p className="text-xs tracking-[0.25em] text-violet-100 uppercase">Learning</p>
            <h2 className="mt-3 text-3xl font-extrabold">Quiz Tower</h2>
            <p className="mt-2 text-sm text-violet-50/85">A futuristic challenge hub that blends playful badges with high-impact gradients.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-100">
              Open Experience
              <PiArrowUpRightBold className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </section>
      </main>
    </div>
  );
}
