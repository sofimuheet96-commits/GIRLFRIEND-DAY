import Image from "next/image";

export default function Page8() {
  return (
    <section className="min-h-screen bg-[#111] flex items-center justify-center p-8">

      <div className="w-full max-w-7xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex">

        {/* LEFT */}

        <div className="w-1/2 flex items-center justify-center bg-black/70 p-12">

          <div>

            <h1 className="text-6xl font-bold text-white">
              Look Closely... ❤️
            </h1>

            <p className="text-pink-200 text-2xl mt-5 leading-9">

              If you don't believe me...

              <br /><br />

              Just look at this picture carefully.

            </p>

            <div className="mt-10 text-white text-[20px] leading-10 max-h-[520px] overflow-y-auto pr-4">

              <p>

                Everyone might think

                I'm looking somewhere else.

                <br /><br />

                But the truth is...

                <br /><br />

                I wasn't looking

                at your boobies

                <br /><br />

                I was looking...                ...straight into your eyes. ❤️

                <br /><br />

                Believe me or not...

                this picture tells the whole story.

                <br /><br />

                Whenever I'm with you,

                somehow

                my eyes always find yours.

                <br /><br />

                Maybe that's because

                I get lost in them

                every single time.

                <br /><br />

                And one more thing...

                <br /><br />

                Do you still have this top?

                Or did you hide it somewhere?

                <br /><br />

                Every time I see this picture,

                I smile.

                Because this wasn't

                just a top...

                <br /><br />

                <span className="text-pink-300 font-semibold">

                  It carries one of our most
                  private and unforgettable memories uk (cum).

                </span>

                <br /><br />

                Only you and I

                know why

                this picture

                means so much.

                <br /><br />

                <span className="text-2xl font-bold text-pink-300">
                  I love you, baby. ❤️
                </span>

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-1/2 relative">

          <Image
            src="/images/eyes.jpeg"
            alt="Eyes"
            fill
            priority
            className="object-contain"
          />

        </div>

      </div>

    </section>
  );
}