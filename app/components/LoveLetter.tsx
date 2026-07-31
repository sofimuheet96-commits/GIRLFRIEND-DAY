"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onOpen: () => void;
};

export default function LoveLetter({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="fixed inset-0 z-[60] bg-black flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >        <motion.button
          onClick={() => setOpened(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-72 h-48 rounded-2xl bg-[#F7E7CE] shadow-2xl overflow-hidden"
        >

          {/* Envelope Flap */}
          <motion.div
            animate={{
              rotateX: opened ? 180 : 0,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              transformOrigin: "top",
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
            className="absolute top-0 left-0 w-full h-24 bg-[#E7D0AE]"
          />

          {/* Envelope Body */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <motion.div
              animate={{
                opacity: opened ? 0 : 1,
                y: opened ? -20 : 0,
              }}
              transition={{ duration: .5 }}
            >

              <div className="text-5xl">
                💌
              </div>

              <h2 className="mt-3 text-xl font-bold text-black">
                A Letter For You
              </h2>

              <p className="mt-2 text-gray-600">
                Tap to Open
              </p>

            </motion.div>

          </div>

        </motion.button>        {opened && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-10 mx-auto w-full max-w-3xl rounded-3xl bg-[#fffdf8] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,.4)] text-left"
          >

            <h1 className="text-4xl font-bold text-gray-900">
              To My Beautiful Girl ❤️
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-700">
              Every picture we've captured holds a piece of my heart.
              Looking back at them reminds me that the happiest moments
              of my life were never about places or gifts...
              they were always about you.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Thank you for every smile, every laugh,
              every hug, every late-night conversation,
              and every little memory that became beautiful
              simply because you were there.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700 italic">
              "Some moments become memories...
              and some memories stay forever."
            </p>

            <button
              onClick={onOpen}
              className="mt-10 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
            >
              Continue Our Story 🌹
            </button>

          </motion.div>
        )}      </motion.div>

    </section>
  );
}