"use client";

import { motion } from "framer-motion";

type FunnyNoProps = {
  onContinue: () => void;
};

export default function FunnyNo({ onContinue }: FunnyNoProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen overflow-y-auto bg-black px-6 py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff0f7b22_0%,#000000_75%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold text-pink-400 md:text-6xl"
        >
          😭 Tumne NO Kaise Bol Diya?!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-3xl text-center text-xl leading-9 text-pink-100"
        >
          Sach sach batao... tumne <span className="font-bold text-pink-300">NO</span> kaise bol diya? 🥺❤️
          Itni mehnat se maine ye poori website sirf tumhare liye banayi...
          aur tumne seedha NO bol diya? 😭
          Chalo theek hai...
          punishment to banti hai. 😂
        </motion.p>

        {/* Funny Photos */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

          <img
            src="/images/funny1.jpg"
            alt="Funny 1"
            className="h-56 w-40 rounded-2xl border-2 border-pink-400 object-cover rotate-[-6deg] shadow-xl"
          />

          <img
            src="/images/funny2.jpg"
            alt="Funny 2"
            className="h-56 w-40 rounded-2xl border-2 border-pink-400 object-cover rotate-[5deg] shadow-xl"
          />

          <img
            src="/images/funny3.jpg"
            alt="Funny 3"
            className="h-56 w-40 rounded-2xl border-2 border-pink-400 object-cover rotate-[-5deg] shadow-xl"
          />

          <img
            src="/images/funny4.jpg"
            alt="Funny 4"
            className="h-56 w-40 rounded-2xl border-2 border-pink-400 object-cover rotate-[7deg] shadow-xl"
          />

        </div>        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-4xl font-bold text-pink-300"
        >
          💖 100 Reasons Why You Should Love Me 💖
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 max-w-5xl text-center text-lg leading-10 text-pink-100"
        >
          If I had to explain why you should love me, I honestly don't think even one hundred reasons would ever be enough. Love isn't something that can be counted with numbers because every single day gives me another reason to choose you again. Every memory we create, every smile you give me, every random conversation, every little fight that ends with laughter, and every tiny moment we spend together becomes another beautiful reason that reminds me how lucky I am to have you in my life.

          <br /><br />

          This website wasn't made in a few minutes. Every page, every animation, every colour, every transition and every little surprise was created while thinking only about you. I kept imagining your smile while opening it, your reaction while reading it, and the happiness on your face when you finally reached the end. That's why this website is much more than just code for me—it's a small piece of my heart that I wanted to give to you.

          <br /><br />

          I love your smile because somehow it makes even my worst day feel brighter. I love your laugh because it's one of the sweetest sounds I've ever heard. I love the way you tease me, the way you get angry over tiny things, the way you act cute without even trying, and even those little habits that you probably don't even notice yourself. Those little things are exactly what make you so special to me.
        </motion.p>        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 max-w-5xl text-center text-lg leading-10 text-pink-100"
        >
          I'm not perfect, and I never want to pretend that I am. I'll make
          mistakes, I'll annoy you sometimes, and there will be days when I
          won't know the right words to say. But one thing I promise is that
          I'll never stop trying. I'll always try to understand you, support
          you, make you smile, cheer you up when you're sad, and stand beside
          you whenever you need someone. That's what love means to me—not
          perfection, but choosing the same person again and again, every
          single day.

          <br /><br />

          Maybe I can't give you the whole world, but I'll always try to make
          your little world a happier place. I'll celebrate your victories,
          hold your hand through difficult moments, and create countless
          memories that we'll laugh about years from now. Every effort I make,
          every late-night thought, every little surprise, and every page of
          this website is proof that you matter to me more than you probably
          realize.

          <br /><br />

          So if you're still wondering why you should love me, maybe the answer
          isn't hidden inside one hundred reasons. Maybe it's hidden in every
          heartbeat that becomes a little happier when I think about you, every
          smile that appears on my face because of you, every dream where you're
          already a part of my future, and every moment where I silently thank
          life for bringing you into mine. And honestly... if I had another
          hundred pages, I'd still keep writing about you because one lifetime
          doesn't feel enough to explain how much you mean to me. ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-10 max-w-4xl text-center text-2xl font-semibold leading-10 text-pink-300"
        >
          Bas ek hi request hai...
          <br /><br />
          💖 Agli baar NO mat bolna... warna aur bhi embarrassing photos ready hain. 😂❤️
        </motion.p>        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 35px rgba(255,105,180,0.8)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={onContinue}
          className="mt-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-xl font-bold text-white shadow-2xl"
        >
          💖 Hmm... Ek Baar Phir Poocho Mujhse 💖
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-8 text-center text-pink-200"
        >
          Shayad iss baar tum dil ❤️ se answer dogi...
        </motion.p>

      </div>
    </motion.section>
  );
}