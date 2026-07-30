"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FinalPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 5000),
      setTimeout(() => setStep(3), 8500),
      setTimeout(() => setStep(4), 12000),
      setTimeout(() => setStep(5), 15000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/journey/the-end-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-8">
        <AnimatePresence mode="wait">{step === 1 && (
  <motion.div
    key="one"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
  >
    <h1 className="text-6xl md:text-8xl font-bold text-[#7b1732]">
      Happy Girlfriend's Day ❤️
    </h1>
  </motion.div>
)}

{step === 2 && (
  <motion.div
    key="two"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
  >
    <p className="text-2xl md:text-4xl leading-relaxed text-[#5b3b3b]">
      Thank You...
      <br />
      For Every Smile
      <br />
      Every Memory
      <br />
      Every Moment ❤️
    </p>
  </motion.div>
)}

{step === 3 && (
  <motion.div
    key="three"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
  >
    <h1 className="text-5xl md:text-7xl font-bold text-pink-700">
      I Love You Forever ❤️
    </h1>
  </motion.div>
)}          {step === 4 && (
            <motion.div
              key="four"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-pink-600">
                Faiza ❤️
              </h1>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="five"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="fixed inset-0 flex items-center justify-center bg-black"
            >
              <div className="text-center">
                <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-[12px]">
                  THE END
                </h1>

                <p className="mt-8 text-pink-300 text-2xl">
                  Made With ❤️ By Muheet
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}