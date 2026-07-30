import Image from "next/image";

export default function Page7() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/images/birthday.jpeg"
        alt="Birthday Celebration"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

        <div className="max-w-4xl text-center px-8">

          <h1 className="text-6xl font-bold text-white">
            29 April ❤️
          </h1>

          <p className="text-pink-200 text-2xl mt-5 leading-9">
            Not the day
            we planned...

            <br /><br />

            But the night
            I'll never forget.
          </p>

          <div className="mt-12 text-white text-[20px] leading-10 max-h-[500px] overflow-y-auto px-4">

            <p>

              We had planned to meet at <span className="text-pink-300 font-semibold">7:30 PM</span>.

              <br /><br />

              I left home with only one thought in my mind...

              <br />

              <span className="italic">
                to make this evening unforgettable.
              </span>

              <br /><br />

              By the time I reached your home,

              it was already around

              <span className="text-pink-300 font-semibold">
                {" "}10:00–10:30 PM.
              </span>

              <br /><br />

              At first,

              you seemed a little shy and uncomfortable.

              <br /><br />

              All I wanted

              was for you to feel safe,

              comfortable,

              and happy with me.

              <br /><br />

              Slowly...

              you smiled.

              <br />

              You laughed.

              <br />

              And just like that...

              everything felt perfect.

              <br /><br />

              As the clock finally struck
              <span className="text-pink-300 font-semibold">
                {" "}12:00
              </span>,              we cut the cake together

              and celebrated

              both of our birthdays.

              <br /><br />

              Just you...

              Me...

              One cake...

              And a room filled with love,

              laughter,

              and unforgettable memories.

              <br /><br />

              Sitting so close to you,

              looking into your eyes,

              and watching that beautiful smile
              on your face...

              made time feel
              like it had stopped.

              <br /><br />

              In that moment,

              nothing else mattered.

              It was just...

              us.

              <br /><br />

              I realised that

              no expensive gift,

              no fancy celebration,

              and no perfect place

              could ever be more precious

              than those moments

              I spent with you.

              <br /><br />

              That night

              didn't just celebrate

              our birthdays...

              <br /><br />

              <span className="text-pink-300 font-semibold text-2xl">
                It celebrated us. ❤️
              </span>

              <br /><br />

              <span className="text-2xl font-bold">
                I love you, baby.
              </span>

              <br />

              <span className="text-pink-300 text-2xl font-bold">
                Always. Forever. ❤️
              </span>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}