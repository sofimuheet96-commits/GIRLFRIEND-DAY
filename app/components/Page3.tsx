import Image from "next/image";

export default function Page3() {
  return (
    <section className="min-h-screen bg-[#efe4cf] flex items-center justify-center p-8">

      <div className="w-full max-w-7xl h-[90vh] bg-[#f8f2e7] rounded-xl shadow-2xl flex overflow-hidden">

        {/* LEFT PAGE */}

        <div className="w-1/2 relative border-r-4 border-[#d6c3a5]">

          <Image
            src="/images/beginning2.jpeg"
            alt="Ups and Downs"
            fill
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35 flex items-end p-10">

            <div>

              <h1 className="text-5xl font-bold text-white">
                Through Every Storm...
              </h1>

              <p className="text-white text-xl mt-5 leading-8">

                Not every chapter was beautiful.

                Some pages were filled with silence.

                Some pages were filled with tears.

                But somehow...

                we always found

                our way back

                to each other. ❤️

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT PAGE */}

        <div className="w-1/2 bg-[#fffaf2] overflow-y-auto p-10">

          <h1 className="text-4xl font-bold text-[#8b4d6b]">
            Every Relationship Has Storms...
          </h1>

          <p className="text-gray-700 text-[18px] leading-9 mt-8">

            Every relationship has beautiful moments.

            But not every chapter is filled with smiles.

            Ours wasn't perfect either.

            There were days when we barely talked.

            There were misunderstandings that quietly built walls between us.

            Sometimes we both stayed silent,

            waiting for the other person

            to take the first step.

            A simple misunderstanding

            slowly became

            hours...

            and sometimes

            even days

            without talking.

            Those moments

            hurt more

            than we ever admitted.

            I remember

            checking my phone

            again and again,

            hoping to see

            your name...            Sometimes I wanted to text first.

            But my ego stopped me.

            Maybe you felt exactly the same.

            We both cared.

            We both loved.

            But sometimes

            neither of us

            knew how to express it.

            There were nights

            when my phone stayed silent,

            yet my heart

            was full of thoughts

            about you.

            Looking back now,

            I realise

            those difficult moments

            never meant

            there was less love.

            They simply meant

            we were still learning

            how to understand

            each other's hearts.

            Every misunderstanding

            taught us patience.

            Every argument

            taught us communication.

            Every tear

            reminded us

            how important

            we were

            to each other.

            If our story

            had only perfect days,

            maybe we would've

            never grown

            the way we did.

            The difficult chapters

            didn't break us.

            They made us stronger.

            Today,

            I don't remember

            who was right

            or who was wrong.

            I only remember

            that after every storm...

            we somehow

            found each other again.

            And that's why

            I'll always believe...

            Love isn't about

            never fighting.

            Love is about

            choosing each other

            even after the hardest days.

            Thank you

            for never giving up on us.

            Because no matter

            how many ups and downs

            we faced...

            I'd still choose you.

            Every.

            Single.

            Time. ❤️

          </p>

        </div>

      </div>

    </section>
  );
}