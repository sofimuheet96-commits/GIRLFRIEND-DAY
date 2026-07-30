"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onFinish: () => void;
};

const photos = [
  "/images/circle/photo1.jpeg",
  "/images/circle/photo2.jpeg",
  "/images/circle/photo3.jpeg",
  "/images/circle/photo4.jpeg",
  "/images/circle/photo5.jpeg",
  "/images/circle/photo6.jpeg",
  "/images/circle/photo7.jpeg",
  "/images/circle/photo8.jpeg",
  "/images/circle/photo9.jpeg",
  "/images/circle/photo10.jpeg",
  "/images/circle/photo11.jpeg",
  "/images/circle/photo12.jpeg",
  "/images/circle/photo13.jpeg",
  "/images/circle/photo14.jpeg",
  "/images/circle/photo15.jpeg",
  "/images/circle/photo16.jpeg",
];
const heartPositions = [
  { x: 0, y: -240 },
  { x: -80, y: -190 },
  { x: 80, y: -190 },
  { x: -150, y: -120 },
  { x: 150, y: -120 },
  { x: -190, y: -20 },
  { x: 190, y: -20 },
  { x: -150, y: 90 },
  { x: 150, y: 90 },
  { x: -90, y: 170 },
  { x: 90, y: 170 },
  { x: -45, y: 240 },
  { x: 45, y: 240 },
  { x: 0, y: 310 },
  { x: -25, y: 370 },
  { x: 25, y: 370 },
];

export default function PolaroidExplosion({
  onFinish,
}: Props) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 9000);

    return () => clearTimeout(timer);
  }, [onFinish]);  return (
    <section className="fixed inset-0 z-[9999] overflow-hidden bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff10_0%,#000000_80%)]" />

      {photos.map((photo, index) => (

        <motion.img
          key={index}
          src={photo}
          alt={`Memory ${index + 1}`}

          initial={{
            opacity: 0,
            scale: 0.3,
            rotate: Math.random() * 90 - 45,
            x: (Math.random() - 0.5) * 2200,
            y: (Math.random() - 0.5) * 1400,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            rotate: Math.random() * 10 - 5,
            x: heartPositions[index].x,
            y: heartPositions[index].y,
          }}

          transition={{
            duration: 2.8,
            delay: index * 0.18,
            ease: "easeInOut",
          }}

          className="absolute left-1/2 top-1/2 h-40 w-32 rounded-xl border-[10px] border-white bg-white object-cover shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        />

      ))}      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 5,
          duration: 2,
        }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-5xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        >
          Every Moment With You
        </motion.h1>

        <p className="mt-4 text-xl text-pink-200">
          Became My Favourite Memory ❤️
        </p>

        <p className="mt-3 text-sm tracking-[0.35em] text-white/70">
          OUR STORY • OUR MEMORIES • OUR FOREVER
        </p>
      </motion.div>

    </section>
  );
}