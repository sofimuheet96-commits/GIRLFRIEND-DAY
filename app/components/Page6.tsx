"use client";

import Image from "next/image";

export default function Page6() {

  const startDate = new Date("2024-06-06");
  const today = new Date();

  const difference = today.getTime() - startDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return (
    <section className="relative min-h-screen">

      <Image
        src="/images/lipshade.jpeg"
        alt="Lipshade Memory"
        fill
        priority
        className="object-continue"
      />

      <div className="absolute inset-0 bg-black/45 flex items-center justify-center">

        <div className="text-center px-8 max-w-5xl">

          <h1 className="text-6xl font-bold text-white">
            A Little Mark... ❤️
          </h1>

          <p className="text-pink-200 text-2xl mt-5 leading-9">

            Maybe you'll forget it one day...

            <br /><br />

            But I never will.

          </p>

          <div className="mt-12 text-white text-xl leading-10 max-w-3xl mx-auto">

            <p>

              That lipshade on my hoodie

              wasn't just a stain.

              <br /><br />

              It became a memory

              I never wanted to wash away.

              <br /><br />

              People might only see

              a little mark...

              But whenever I look at it,

              I see you.

              I see us.

              I see one of my favourite memories.

              <br /><br />

              Maybe the colour

              will disappear someday...              But the memory...

              never will.

            </p>

          </div>

          {/* Glass Box */}

          <div className="mt-12 mx-auto w-[340px] rounded-3xl border border-white/30 bg-white/10 backdrop-blur-lg p-6 shadow-2xl">

            <h2 className="text-white text-2xl font-bold">
              ❤️ Together Since
            </h2>

            <p className="text-pink-200 mt-2 text-xl">
              6 June 2024
            </p>

            <h1 className="text-6xl font-bold text-white mt-5">
              {days}
            </h1>

            <p className="text-pink-100 text-xl mt-2">
              Days Together ❤️
            </p>

            <p className="text-white/90 mt-5 leading-7">

              Every new sunrise

              means one more day

              loving you.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}