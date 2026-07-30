"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

type LoveChoiceProps = {
  onYes: () => void;
  onNo: () => void;
  crazyMode?: boolean;
};

export default function LoveChoice({
  onYes,
  onNo,
  crazyMode = false,
}: LoveChoiceProps) {

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const [celebrating, setCelebrating] = useState(false);

  const moveNoButton = () => {
    if (!crazyMode) return;

    setPosition({
      top: Math.random() * 250 - 125,
      left: Math.random() * 400 - 200,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff4d6d22_0%,#000000_75%)]" />

      <div className="relative z-10 flex flex-col items-center">

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-bold text-pink-300"
        >
          {crazyMode
            ? "Ab Dil ❤️ Se Answer Do..."
            : "Do You Love Me? ❤️"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-pink-100"
        >
          {crazyMode
            ? "Iss baar NO nahi chalega 😏"
            : "Think Carefully... 🥺❤️"}
        </motion.p>

        <div className="relative mt-14 flex items-center gap-10">          {/* YES Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCelebrating(true);

              const duration = 1800;
              const animationEnd = Date.now() + duration;

             const interval = setInterval(() => {
  if (Date.now() > animationEnd) {
    clearInterval(interval);
    onYes();
    return;
  }

  confetti({
    particleCount: 4,
    angle: 60,
    spread: 80,
    origin: { x: 0 },
  });

  confetti({
    particleCount: 4,
    angle: 120,
    spread: 80,
    origin: { x: 1 },
  });
}, 40);
            }}
            className="rounded-full bg-pink-500 px-10 py-4 text-xl font-bold text-white shadow-[0_0_35px_rgba(255,105,180,0.8)]"
          >
            ❤️ YES
          </motion.button>

          {/* NO Button */}
          <motion.button
            animate={{
              x: position.left,
              y: position.top,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            onMouseEnter={moveNoButton}
           onClick={() => {
  if (!crazyMode) {
    onNo();
  } else {
    moveNoButton();
  }
}}
            whileHover={!crazyMode ? { scale: 1.08 } : {}}
            whileTap={!crazyMode ? { scale: 0.95 } : {}}
            className="rounded-full border border-pink-400 bg-black/40 px-10 py-4 text-xl font-bold text-pink-300"
          >
            💔 NO
          </motion.button>

        </div>        {crazyMode && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-10 text-center text-xl font-semibold text-pink-300"
          >
            😂 NO button pakad ke dikhao... phir maanunga!
          </motion.p>
        )}

        {!crazyMode && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-10 text-center tracking-[0.25em] text-pink-200"
          >
            Choose Wisely 💖
          </motion.p>
        )}

        {crazyMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 max-w-2xl text-center"
          >
            <p className="text-2xl font-bold text-pink-300">
              😭 Arre bas bhi karo...
            </p>

            <p className="mt-4 text-lg leading-8 text-pink-100">
              Itna bhi mat satao yaar... ❤️🥺
              <br />
              NO button tumse bachne ki poori koshish kar raha hai.
              <br />
              Shayad universe bhi chahta hai ki tum YES hi bolo. 😌💖
            </p>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="mt-8 text-6xl"
            >
              ❤️
            </motion.div>
          </motion.div>
        )}        {celebrating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="text-[180px]"
            >
              ❤️
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-5xl font-bold text-pink-300"
            >
              YAYYYYY!!! 🥹❤️
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-xl text-pink-100"
            >
              I knew you'd say YES 💖
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-2 text-center text-pink-200"
            >
              Our story continues... ✨
            </motion.p>
          </motion.div>
        )}

      </div>
    </motion.section>
  );
}