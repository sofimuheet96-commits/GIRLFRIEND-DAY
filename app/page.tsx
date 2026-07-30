"use client";

import { useEffect, useState } from "react";

import PasswordScreen from "./components/PasswordScreen";
import JourneyIntro from "./components/JourneyIntro";
import PhotoJourney from "./components/PhotoJourney";
import BookIntro from "./components/Bookintro";
import LoveChoice from "./components/LoveChoice";
import FunnyNo from "./components/FunnyNo";
import HeartBeat from "./components/HeartBeat";
import Book from "./components/Book";
import FireworksCelebration from "./components/FireworksCelebration";
import PolaroidExplosion from "./components/PolaroidExplosion";
import CinematicTransition from "./components/CinematicTransition";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!unlocked) return;

    const timer = setTimeout(() => {
      setStep(1);
    }, 6500);

    return () => clearTimeout(timer);
  }, [unlocked]);

  if (!unlocked) {
    return <PasswordScreen onUnlock={() => setUnlocked(true)} />;
  }

  if (step === 0) {
    return <JourneyIntro />;
  }

  if (step === 1) {
    return <PhotoJourney onFinish={() => setStep(2)} />;
  }

  if (step === 2) {
    return <BookIntro onFinish={() => setStep(3)} />;
  }  if (step === 3) {
    return (
      <LoveChoice
        onYes={() => setStep(7)}
        onNo={() => setStep(4)}
      />
    );
  }

  if (step === 4) {
    return (
      <FunnyNo
        onContinue={() => setStep(5)}
      />
    );
  }

  if (step === 5) {
    return (
      <HeartBeat
        onFinish={() => setStep(6)}
      />
    );
  }

  if (step === 6) {
    return (
      <LoveChoice
        onYes={() => setStep(7)}
        onNo={() => setStep(8)}
        crazyMode
      />
    );
  }  if (step === 7) {
    return (
      <FireworksCelebration
        onFinish={() => setStep(8)}
      />
    );
  }

  if (step === 8) {
    return (
      <PolaroidExplosion
        onFinish={() => setStep(9)}
      />
    );
  }

 if (step === 9) {
  return (
    <CinematicTransition
      onFinish={() => setStep(10)}
    />
  );
}

if (step === 10) {
  return <Book />;
}

return null;
}