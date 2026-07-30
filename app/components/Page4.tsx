import Image from "next/image";

export default function Page4() {
  return (
    <section className="min-h-screen bg-[#efe4cf] flex items-center justify-center p-8">

      <div className="w-full max-w-7xl h-[90vh] bg-[#f8f2e7] rounded-xl shadow-2xl flex overflow-hidden">

        {/* LEFT PAGE */}

        <div className="w-1/2 relative border-r-4 border-[#d6c3a5]">

          <Image
            src="/images/firstdate.jpeg"
            alt="Our First Date"
            fill
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35 flex items-end p-10">

            <div>

              <h1 className="text-5xl font-bold text-white">
                Our First Date ❤️
              </h1>

              <p className="text-white text-xl mt-5 leading-8">

                17 January

                <br /><br />

                The first time

                I looked into your eyes

                instead of a screen.

                <br /><br />

                A day...

                I'll never forget.

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT PAGE */}

        <div className="w-1/2 bg-[#fffaf2] overflow-y-auto p-10">

          <h1 className="text-4xl font-bold text-[#8b4d6b]">
            The Day I Finally Met You ❤️
          </h1>

          <p className="text-gray-700 text-[18px] leading-9 mt-8">

            17 January...

            A date I'll never forget.

            Until that day,

            you were only

            a name on my phone,

            a voice on my calls,

            and the person

            I couldn't stop thinking about.

            We had spent

            countless hours talking,

            laughing,

            teasing each other,

            and imagining

            what it would feel like

            to finally meet.

            Then...

            that day arrived.

            We met

            at Kinda Dawat Restaurant.

            I still remember

            how nervous I was.

            My heart

            wouldn't stop racing.

            I kept wondering...

            what would happen

            when I finally saw you.            And then...

            I saw you.

            For a few seconds,

            everything else

            disappeared.

            The girl

            I had only seen

            on my phone screen

            was finally

            standing

            right in front of me.

            You smiled...

            and somehow,

            all my nervousness

            disappeared.

            We sat together,

            talked,

            laughed,

            teased each other,

            and simply enjoyed

            being with one another.

            We didn't even eat anything,

            because you weren't

            in the mood.

            But honestly...

            it didn't matter to me.

            I wasn't there

            for the food.

            I was there...

            for you.

            Looking at you,

            hearing your voice

            without a phone

            between us,

            watching your expressions,

            and seeing your smile

            in real life...

            that alone

            made the day

            perfect.

            Today,

            I don't remember

            what was on the menu.

            I only remember...

            you.

            Your smile.

            Your eyes.

            And the happiness

            I felt

            sitting beside you.

            If someone ever asked me

            which memory

            I'd love to relive...

            I'd choose

            17 January.

            Again.

            And again.

            Because that wasn't

            just our first date.

            It was the day

            one of my favourite

            memories

            was born. ❤️

          </p>

        </div>

      </div>

    </section>
  );
}