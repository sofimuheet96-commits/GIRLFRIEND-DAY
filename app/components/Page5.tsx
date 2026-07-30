import Image from "next/image";

export default function Page5() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/images/seconddate.jpeg"
        alt="Our Second Date"
        fill
        priority
        className="object-cover scale-90"
      />

      <div className="absolute inset-0 bg-black/55 flex items-center justify-center">

        <div className="max-w-4xl text-center px-8">

          <h1 className="text-6xl font-bold text-white">
            Our Second Date ❤️
          </h1>

          <p className="text-pink-200 text-2xl mt-5">
            3rd feb same place...
            that became another unforgettable memory.
          </p>

          <div className="mt-12 text-white text-[20px] leading-10 max-h-[450px] overflow-y-auto px-4">

            <p>

              We were back at Kinda Dawat once again.

              Things weren't exactly perfect,

              because you weren't feeling your best.

              But somehow...

              every moment with you

              still felt special.

              <br /><br />

              I still smile

              whenever I remember

              looking at you,

              giving you that naughty look,

              and whispering...

              <span className="font-bold text-pink-300">

                "Go down..." 😏

              </span>

              <br /><br />

              You instantly understood

              what I meant,              and your reaction...

              I'll never forget it.

              <br /><br />

              Maybe nobody else
              would understand
              why that moment
              makes me smile.

              But we do.

              <br /><br />

              That's the beautiful thing
              about us.

              We have our own jokes.

              Our own memories.

              Our own little world.

              <br /><br />

              Love isn't always
              about grand surprises
              or expensive dates.

              Sometimes...

              it's just two idiots
              laughing together
              over something
              that nobody else
              would understand.

              <br /><br />

              Looking back,

              I don't remember
              every single detail
              of that day.

              But I do remember
              how happy I felt
              just being with you.

              <br /><br />

              Thank you
              for turning
              even the most ordinary days
              into memories
              I'll always cherish.

              ❤️

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}