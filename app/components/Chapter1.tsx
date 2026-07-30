"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PhotoCard from "./PhotoCard";

type Photo = {
  image: string;
  caption: string;
};

const photos: Photo[] = [
  { image: "/images/journey/photo1.jpeg", caption: "We met on Sc but what started on a screen slowly became the most beautiful part of my life" },
  { image: "/images/journey/photo2.jpeg", caption: "your figure had my full attention. No regrets 😉❤️" },
  { image: "/images/journey/photo3.jpeg", caption: " it reminds me to never take a single moment with you for granted 🫶" },
  { image: "/images/journey/photo4.jpeg", caption: "Pta ni aise he rkhi huii h" },
  { image: "/images/journey/photo5.jpeg", caption: "I remember correctly… this has always been your favourite picture of me ❤️✨" },
  { image: "/images/journey/photo6.jpeg", caption: "We were both nervous a little awkward and completely adorable our first date will always be one of my favourite memories 🌸" },
  { image: "/images/journey/photo7.jpeg", caption: "Our first date at Dawat Restaurant on 17 January… two nervous hearts endless smiles and the beginning of our story ✨" },
  { image: "/images/journey/photo8.jpeg", caption: "Our second date same place same smiles you were on your period i gave you my hoodie and somehow it looked better on you than it ever did on me❤️" },
  { image: "/images/journey/photo9.jpeg", caption: "Uk go down (bj)" },
  { image: "/images/journey/photo10.jpeg", caption: "Seeing you in my hoodie was the cutest thing ever 💖" },
  { image: "/images/journey/photo11.jpeg", caption: "29th April… no grand plans no fancy dates Just little moments with you ✨" },
  { image: "/images/journey/photo12.jpeg", caption: "Your birthday had just passed mine was around the corner… but you were already the best gift I could ever ask for I love you" },
  { image: "/images/journey/photo13.jpeg", caption: "One kiss?" },
  { image: "/images/journey/photo14.jpeg", caption: "Baby sb dekh rhai hai mujhe shrm aari h" },
  { image: "/images/journey/photo15.jpeg", caption: "Every memory with you is precious 🫶" },
  { image: "/images/journey/photo16.jpeg", caption: "Iloveyou nd i will always choose you 💍" },
  { image: "/images/journey/photo17.jpeg", caption: "Uk hangul side se thai thoda thoda " },
  { image: "/images/journey/photo18.jpeg", caption: "This was only the beginning 🌙" },
];

const transitionTexts = [
  [
    "It all started with one message... ❤️",
    "Who knew we'd become everything to each other?",
    "Let's relive it..."
  ],
  [
    "Some memories fade...",
    "Ours only become more beautiful.",
    "One more page... ✨"
  ],
  [
    "I still smile at this moment.",
    "Just like I smiled that day.",
    "Come closer... ❤️"
  ],
  [
    "Every picture has a heartbeat.",
    "Every heartbeat whispers your name.",
    "Keep watching... 💕"
  ],
  [
    "If I had one wish...",
    "I'd relive these moments forever.",
    "Next memory... 🌸"
  ],
  [
    "I don't miss the days...",
    "I miss living them with you.",
    "Let's go again... ❤️"
  ],
  [
    "One chapter ends...",
    "Another beautiful one begins.",
    "Turn the page... 📖"
  ],
  [
    "The world disappeared...",
    "It was just you and me.",
    "Next memory... 💞"
  ],
  [
    "Close your eyes...",
    "Can you feel this moment again?",
    "Let's continue... ❤️"
  ],
  [
    "Some pictures are priceless.",
    "Because they hold our souls.",
    "One more... 🌙"
  ],
  [
    "Every smile of yours...",
    "Is still my favourite view.",
    "Keep going... 💖"
  ],
  [
    "These aren't just photos.",
    "They're pieces of my heart.",
    "Next one... ❤️"
  ],
  [
    "Time keeps moving...",
    "But these memories stay forever.",
    "Let's continue... ✨"
  ],
  [
    "No matter where life takes us...",
    "I'll always find my way back to you.",
    "Another memory... 💕"
  ],
  [
    "Our story wasn't perfect...",
    "That's what made it beautiful.",
    "Turn the page... ❤️"
  ],
  [
    "You're my favourite coincidence.",
    "My favourite memory.",
    "One more... 🌹"
  ],
  [
    "Every second with you...",
    "Was worth remembering forever.",
    "Ready? ❤️"
  ],
  [
    "The best part isn't this photo...",
    "It's the person standing in it.",
    "Let's keep going... 💍"
  ]
];
type Chapter1Props = {
  onFinish: () => void;
};

export default function Chapter1({ onFinish }: Chapter1Props) {
  const [page, setPage] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionIndex, setTransitionIndex] = useState(0);

  const pages = useMemo(() => {
    const result = [];

    for (let i = 0; i < photos.length; i += 3) {
      result.push(photos.slice(i, i + 3));
    }

    return result;
  }, []);

  const next = () => {
    setTransitionIndex(Math.floor(Math.random() * transitionTexts.length));
  setTransitioning(true);

  setTimeout(() => {
    if (revealed < 2) {
      setRevealed((r) => r + 1);
    } else if (page < pages.length - 1) {
      setPage((p) => p + 1);
      setRevealed(0);
    } else {
      onFinish();
    }

    setTransitioning(false);
  }, 2000);
};

  return (
  <div className="min-h-screen bg-black px-5 py-10">
 {transitioning && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
  >
    <motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-3xl font-semibold text-pink-300 mb-6"
>
  {transitionTexts[transitionIndex][0]}
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
  className="text-xl mb-4"
>
  {transitionTexts[transitionIndex][1]}
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.5 }}
  className="text-lg text-white/70"
>
  {transitionTexts[transitionIndex][2]}
</motion.p>
  </motion.div>
)}


    <motion.div>
      <h1 className="text-center text-4xl font-bold text-pink-300">
  Chapter 1 ❤️
</h1>

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  {pages[page].map((photo, index) => (
    <PhotoCard
      key={photo.image}
      image={photo.image}
      caption={photo.caption}
      number={page * 3 + index + 1}
      visible={index === revealed}
    />
  ))}
</div>

<div className="mt-10 flex flex-col items-center gap-6">

  <p className="max-w-2xl text-center text-lg italic text-white leading-8">
    {pages[page][revealed].caption}
  </p>

  <button
    onClick={next}
    className="rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-400 transition"
  >
    Continue ❤️
  </button>

</div>
    </motion.div>

  </div>
);
}