"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Chapter1 from "./Chapter1";
import LoveLetter from "./LoveLetter";


type Stage =
  | "chapter1"
  | "envelope"
  | "letter"
  | "chapter2"
  | "finalPage";

  const chapter1Photos = [
  "/images/journey/photo1.jpeg",
  "/images/journey/photo2.jpeg",
  "/images/journey/photo3.jpeg",
  "/images/journey/photo4.jpeg",
  "/images/journey/photo5.jpeg",
  "/images/journey/photo6.jpeg",
  "/images/journey/photo7.jpeg",
  "/images/journey/photo8.jpeg",
  "/images/journey/photo9.jpeg",
  "/images/journey/photo10.jpeg",
  "/images/journey/photo11.jpeg",
  "/images/journey/photo12.jpeg",
  "/images/journey/photo13.jpeg",
  "/images/journey/photo14.jpeg",
  "/images/journey/photo15.jpeg",
  "/images/journey/photo16.jpeg",
  "/images/journey/photo17.jpeg",
  "/images/journey/photo18.jpeg",
]

  const chapter2Photos = [
  "/images/journey/photo19.jpeg",
  "/images/journey/photo20.jpeg",
  "/images/journey/photo21.jpeg",
  "/images/journey/photo22.jpeg",
  "/images/journey/photo23.jpeg",
  "/images/journey/photo24.jpeg",
  "/images/journey/photo25.jpeg",
  "/images/journey/photo26.jpeg",
  "/images/journey/photo27.jpeg",
]


const chunk = (arr: string[], size: number) => {
  const out: string[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

type PhotoJourneyProps = {
  onFinish: () => void;
};

export default function PhotoJourney({ onFinish }: PhotoJourneyProps) {
  const [stage, setStage] = useState<Stage>("chapter1")
  console.log(stage);
  const [page1, setPage1] = useState(0)
  const [page2, setPage2] = useState(0)
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  const chapter1Pages = useMemo(() => chunk(chapter1Photos, 3), [])
  const chapter2Pages = useMemo(() => chunk(chapter2Photos, 3), [])

  const nextChapter1 = () => {
  if (page1 < chapter1Pages.length - 1) {
    setPage1((p) => p + 1);
  } else {
    onFinish();
  }
};

 const nextChapter2 = () => {
  setStage("finalPage");
}

return (

  <div className="min-h-screen">
 
  <div className="min-h-screen bg-black text-white">
    <AnimatePresence mode="wait">
  {stage === "envelope" && (
  <LoveLetter
    onOpen={onFinish}
  />
)}
  
  </AnimatePresence>
</div>

  {stage === "chapter2" && (
  <motion.section
    key="chapter2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
   className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-black"
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/videos/storm.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold text-pink-300">
        Chapter 2 ❤️
      </h1>

      <button
        onClick={() => nextChapter2()}
        className="mt-8 rounded-full bg-pink-500 px-8 py-3"
      >
        Continue
      </button>
    </div>
  </motion.section>
)}
</div>
  );
}
type TitleProps = {
  children: React.ReactNode
  size?: "xl" | "2xl" | "3xl" | "4xl"
  className?: string
}

function Title({ children, size = "3xl", className = "" }: TitleProps) {
  const sizes = {
    xl: "text-2xl sm:text-3xl",
    "2xl": "text-3xl sm:text-4xl",
    "3xl": "text-4xl sm:text-5xl",
    "4xl": "text-5xl sm:text-6xl",
  }

  return (
    <h1 className={`font-semibold tracking-tight bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent ${sizes[size]} ${className}`}>
      {children}
    </h1>
  )
}

type TextProps = {
  children: React.ReactNode
  color?: "primary" | "secondary"
  size?: "sm" | "md"
  className?: string
}

function Text({ children, color = "primary", size = "md", className = "" }: TextProps) {
  const colors = {
    primary: "text-white/90",
    secondary: "text-white/65",
  }

  const sizes = {
    sm: "text-sm",
    md: "text-base",
  }

  return <p className={`${colors[color]} ${sizes[size]} ${className}`}>{children}</p>
}

function Icon({ name, color = "currentColor", size = 20 }: { name: "heart" | "arrow-right"; color?: string; size?: number }) {
  if (name === "heart") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M12 21s-6.716-4.35-9.193-8.12C.59 9.356 2.08 5 6.09 5c2.07 0 3.34 1.21 3.91 2.09C10.57 6.21 11.84 5 13.91 5c4.01 0 5.5 4.356 3.283 7.88C18.716 16.65 12 21 12 21z" />
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Pressable({ children, onClickAction, className }: { children: React.ReactNode; onClickAction: { handler: "client"; type: "issue_new_turn"; payload: { query: string } }; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        // Placeholder for local preview. Replace with your own handler if needed.
      }}
      className={className}
    >
      {children}
    </button>
  )
}