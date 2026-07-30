"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center">

      {/* Animated Stars */}
      <div className="stars"></div>

      {/* Floating Golden Particles */}
      <div className="particle left-[8%] top-[15%]"></div>
      <div className="particle left-[18%] top-[70%]"></div>
      <div className="particle left-[28%] top-[35%]"></div>
      <div className="particle left-[40%] top-[82%]"></div>
      <div className="particle left-[52%] top-[25%]"></div>
      <div className="particle left-[65%] top-[60%]"></div>
      <div className="particle left-[75%] top-[12%]"></div>
      <div className="particle left-[88%] top-[45%]"></div>
      <div className="particle left-[94%] top-[78%]"></div>
      <div className="particle left-[58%] top-[8%]"></div>

      {/* Center Golden Glow */}
      <div className="gold-glow"></div>

      {/* Top Cinematic Light */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-yellow-300/10 blur-[220px]" />

      {/* Left Light */}
      <div className="absolute left-[-250px] top-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Right Light */}
      <div className="absolute right-[-250px] top-1/2 w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 text-center floating"
      >

        <motion.h1
          initial={{
            opacity: 0,
            letterSpacing: "0.8em",
            y: 50,
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.18em",
            y: 0,
          }}
          transition={{
            duration: 2.5,
          }}
          className="gold-text luxury-font text-[110px] font-semibold tracking-[12px]"
        >
          FAIZA
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1.5,
          }}
          className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8"
        />

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.8,
            duration: 1.5,
          }}
          className="luxury-font mt-8 text-4xl tracking-[10px] text-white"
        >
          I LOVE YOU ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 4.5,
            duration: 2,
          }}
          className="mt-14 text-gray-400 text-lg tracking-[6px]"
        >
          Every love story is beautiful...
          <br />
          Ours is my favourite.
        </motion.p>

      </motion.div>

    </div>
  );
}