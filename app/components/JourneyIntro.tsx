"use client";

import { motion } from "framer-motion";
import RelationshipBoard from "./RelationshipBoard";
import GalaxyScene from "./GalaxyScene";

export default function JourneyIntro() {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#09111d] to-black"></div>

      {/* Top Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full bg-white/5 blur-[220px]" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-[220px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-500/10 blur-[180px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2 }}
          className="uppercase tracking-[12px] text-gray-400 text-lg"
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-7xl md:text-8xl font-light text-white mt-8"
        >
          Some people enter our lives...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="text-3xl text-gray-300 mt-8"
        >
          and quietly change everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 2 }}
          className="mt-20 flex justify-center"
        >
          <RelationshipBoard />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 8, duration: 2 }}
          className="mt-16 text-gray-500 tracking-[6px]"
        >
          Every memory deserves its own chapter...
        </motion.p>

      </motion.div>

    </section>
  );
}