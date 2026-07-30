"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type CinematicTransitionProps = {
  onFinish: () => void;
};

export default function CinematicTransition({
  onFinish,
}: CinematicTransitionProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase(1);
    }, 2500);

    const t2 = setTimeout(() => {
      setPhase(2);
    }, 5200);

    const t3 = setTimeout(() => {
      setPhase(3);
    }, 8200);

    const t4 = setTimeout(() => {
      onFinish();
    }, 9500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff08_0%,#000000_80%)]" />

      <AnimatePresence mode="wait">        {phase === 0 && (
          <motion.div
            key="text1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-light tracking-[0.15em] text-[#F8E7C1]">
              Not Every Flower
            </h1>

            <p className="mt-6 text-3xl italic text-white/85">
              Blooms Once...
            </p>
          </motion.div>
        )}

        {phase === 1 && (
          <motion.div
            key="text2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-light tracking-[0.15em] text-[#F8E7C1]">
              Some Bloom
            </h1>

            <p className="mt-6 text-3xl italic text-white/85">
              Forever. 🌹
            </p>
          </motion.div>
        )}

        {phase === 2 && (
          <motion.div
            key="text3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            className="text-center"
          >
            <h1 className="text-6xl font-light tracking-[0.18em] text-white">
              ✨
            </h1>

            <p className="mt-6 text-4xl italic text-[#F8E7C1]">
              And This One...
            </p>
          </motion.div>
        )}

      </AnimatePresence>      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-yellow-300"
            initial={{
              left: `${Math.random() * 100}%`,
              top: "110%",
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              top: "-10%",
              opacity: [0, 1, 0],
              scale: [0.5, 1.4, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}
      </div>

    </section>
  );
}