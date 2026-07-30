"use client";

import { motion } from "framer-motion";

type PhotoCardProps = {
  image: string;
  caption: string;
  visible: boolean;
  number: number;
};

export default function PhotoCard({
  image,
  caption,
  visible,
}: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
  opacity: 1,
  y: 0,
  scale: [0.92, 1.03, 1],
}}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={caption}
          className={`h-full w-full object-cover transition-all duration-700 ${
            visible
              ? "blur-0 brightness-100 scale-100"
              : "blur-md brightness-50 scale-105"
          }`}
        />
        
      </div>
    </motion.div>
  );
}