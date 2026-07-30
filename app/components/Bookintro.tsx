"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type BookIntroProps = {
  onFinish: () => void;
};

export default function BookIntro({ onFinish }: BookIntroProps) {
  const [showStorm, setShowStorm] = useState(true);
  const [showFlash, setShowFlash] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [zoomHeart, setZoomHeart] = useState(false);

  useEffect(() => {
    const storm = setTimeout(() => setShowFlash(true), 3500);

    const heart = setTimeout(() => {
      setShowStorm(false);
      setShowFlash(false);
      setShowHeart(true);
    }, 4300);

    const zoom = setTimeout(() => {
      setZoomHeart(true);
    }, 5800);

    const finish = setTimeout(() => {
      onFinish();
    }, 7200);

    return () => {
      clearTimeout(storm);
      clearTimeout(heart);
      clearTimeout(zoom);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">      {showStorm && (
        <>
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/storm.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      {showFlash && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.8 }}
        />
      )}

      {showHeart && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: zoomHeart ? 35 : 1,
            opacity: 1,
          }}
          transition={{
            duration: zoomHeart ? 1.8 : 1,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full bg-pink-500 blur-3xl opacity-70" />
            <div className="text-[120px] select-none">❤️</div>
          </div>
        </motion.div>
      )}      {showHeart &&
        Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-pink-300"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: "110vh",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.15,
              repeat: Infinity,
            }}
          />
        ))}

      {showHeart && !zoomHeart && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Story ❤️
          </h1>

          <p className="mt-5 text-lg tracking-[0.3em] uppercase text-pink-200">
            A Beautiful Journey Begins...
          </p>
        </motion.div>
      )}
    </section>
  );
}