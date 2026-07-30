"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

type FireworksCelebrationProps = {
  onFinish: () => void;
};

export default function FireworksCelebration({
  onFinish,
}: FireworksCelebrationProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.1,
      particles: 900,
      traceLength: 14,
      traceSpeed: 27,
      explosion: 35,
      intensity: 160,
      flickering: 150,
      lineStyle: "round",
      hue: {
        min: 0,
        max: 360,
      },
      delay: {
        min: 5,
        max: 15,
      },
      rocketsPoint: {
        min: 0,
        max: 100,
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3,
        },
        trace: {
          min: 1,
          max: 2,
        },
      },
      brightness: {
        min: 60,
        max: 100,
      },
    });

    fireworks.start();    const timer = setTimeout(() => {
      fireworks.stop();
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(timer);
      fireworks.stop();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-pink-300 drop-shadow-lg">
          ❤️ Finaly... You Choose US  ❤️
        </h1>

        <p className="mt-6 text-2xl text-white">
          Thank You For Choosing Me Every Single Time ✨
        </p>

        <div className="mt-8 animate-pulse text-[120px]">
          💖
        </div>
      </div>
    </div>
  );
}