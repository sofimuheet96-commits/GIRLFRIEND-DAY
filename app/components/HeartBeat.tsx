"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type HeartBeatProps = {
  onFinish: () => void;
};

export default function HeartBeat({ onFinish }: HeartBeatProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          className="text-[140px]"
        >
          ❤️
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-5xl font-bold text-pink-300"
        >
          Answer From Your Heart...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            delay: 0.8,
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-6 text-center text-xl text-pink-100"
        >
          ❤️ Listen to your heart... ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center text-lg text-pink-200"
        >
          This time... choose wisely. 🥺💖
        </motion.p>
      </div>
    </motion.section>
  );
}