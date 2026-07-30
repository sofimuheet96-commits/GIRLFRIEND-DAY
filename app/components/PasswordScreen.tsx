"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onUnlock: () => void;
};

export default function PasswordScreen({ onUnlock }: Props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = "060624";

  const handleUnlock = () => {
    if (password === CORRECT_PASSWORD) {
      setError("");

      setTimeout(() => {
        onUnlock();
      }, 800);
    } else {
      setError("Incorrect Password ❤️");
    }
  };

  return (
    <section className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#07111f] to-black"></div>

      {/* Blue Glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-[220px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 w-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
      >

        <h1 className="text-4xl text-center text-white mb-4">
          Private Memory
        </h1>

        <p className="text-center text-gray-400 mb-10">
          This story belongs to one special person.
        </p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/10 px-5 py-4 text-white outline-none"
        />        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleUnlock}
          className="w-full mt-8 rounded-xl bg-white text-black py-4 text-lg font-semibold"
        >
          Unlock Story
        </motion.button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center mt-6"
          >
            {error}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          className="text-center text-gray-500 mt-10 text-sm tracking-[3px]"
        >
          Made Only For Faiza ❤️
        </motion.p>

      </motion.div>

    </section>
  );
}