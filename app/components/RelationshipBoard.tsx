"use client";

import { motion } from "framer-motion";

export default function RelationshipBoard() {
  const startDate = new Date("2024-06-06");
  const today = new Date();

  const diffTime = today.getTime() - startDate.getTime();
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="w-[760px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-12 shadow-2xl"
    >
      <h2 className="text-center text-5xl font-light tracking-[10px] text-white mb-12">
        OUR STORY
      </h2>

      <div className="space-y-10 text-center">

        <div>
          <p className="text-gray-400 uppercase tracking-[4px]">
            Relationship Started
          </p>

          <h3 className="text-3xl text-white mt-2">
            06 June 2024 ❤️
          </h3>
        </div>

        <div>
          <p className="text-gray-400 uppercase tracking-[4px]">
            Together For
          </p>

          <h1 className="text-7xl font-bold text-white mt-4">
            {days} Days
          </h1>

          <p className="text-blue-300 mt-4 text-xl">
            Still Writing Our Beautiful Story...
          </p>
        </div>

      </div>
    </motion.div>
  );
}