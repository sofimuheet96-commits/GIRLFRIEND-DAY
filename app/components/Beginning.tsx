import Image from "next/image";
import { motion } from "framer-motion";

export default function Beginning() {
  return (
    <motion.section
  initial={{
    opacity: 0,
    scale: 1.08,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 2,
    ease: "easeOut",
  }}
  className="min-h-screen bg-[#efe4cf] flex items-center justify-center p-8"
>
   <div className="w-full max-w-7xl h-[90vh] bg-[#f8f2e7] rounded-xl shadow-2xl flex overflow-hidden">

        {/* LEFT PAGE */}

        <div className="w-1/2 relative border-r-4 border-[#d6c3a5]">

          <Image
            src="/images/bouquet.jpeg"
            alt="Beginning One"
            fill
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20 flex items-end p-8">

            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              The Beginning ❤️
            </h1>

          </div>

        </div>

        {/* RIGHT PAGE */}

        <div className="w-1/2 bg-[#fffaf2] overflow-y-auto p-10">

          <h1 className="text-4xl font-bold text-[#8b4d6b]">
            A Simple Snapchat Request...
          </h1>

          <p className="text-gray-700 text-[18px] leading-9 mt-8">

            Every beautiful story has a beginning.

            Ours didn't start with a grand moment,
            a perfect plan,
            or even a real-life meeting.

            It started with one tiny Snapchat notification.

            It wasn't me who sent the request.

            It was you.

            At that moment,
            I accepted it just like I would've accepted any other request.

            I never imagined that one simple click
            would quietly become
            one of the biggest turning points of my life.

            We didn't know each other.

            We had never met.

            We were simply two strangers
            connected through our phone screens.

            Our conversations began with teasing.

            Random jokes.

            Silly replies.

            Small conversations
            that didn't seem important back then.

            But somehow...

            every conversation
            became longer than the previous one.

            Every notification from you
            slowly became something
            I looked forward to.

            Without realizing it,

            talking to you
            became a part of my everyday routine.

            Even on the busiest days,

            I found myself smiling

            whenever your name
            appeared on my screen.

            Looking back today,

            I realise that

            those tiny conversations

            were quietly creating

            memories

            that I would one day
            treasure forever.
            Sometimes...

            I wonder what would've happened

            if you had never
            sent me that request.

            Maybe our paths
            would've never crossed.

            Maybe we would've remained
            complete strangers forever.

            But life had
            completely different plans.

            That one notification

            slowly became

            the first page

            of the most beautiful story

            I've ever lived.

            Today,

            whenever I look back

            at this picture,

            I don't just remember

            the moment itself.

            I remember

            how everything started.

            One request.

            One acceptance.

            One conversation.

            One friendship.

            And slowly...

            one beautiful love story.

            If I ever had
            the chance to go back
            to that exact moment,

            I'd still press

            "Accept"

            without thinking twice.

            Because that tiny notification

            quietly introduced me

            to someone

            who would later

            become

            my favourite person.

            Thank you

            for sending that request.

            Thank you

            for every conversation,

            every laugh,

            every tease,

            and every memory

            that followed.

            Looking back now,

            I realise that

            our story never needed

            a perfect beginning.

            It only needed

            the two of us.

          </p>

        </div>

      </div>

</motion.section>
  );
}