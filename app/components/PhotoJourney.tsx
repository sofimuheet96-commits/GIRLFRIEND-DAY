"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Chapter1 from "./Chapter1";

type Stage = "chapter1" | "cinematic" | "envelope" | "letter" | "chapter2" | "finale"

  const chapter1Photos = [
  "/images/journey/photo1.jpeg",
  "/images/journey/photo2.jpeg",
  "/images/journey/photo3.jpeg",
  "/images/journey/photo4.jpeg",
  "/images/journey/photo5.jpeg",
  "/images/journey/photo6.jpeg",
  "/images/journey/photo7.jpeg",
  "/images/journey/photo8.jpeg",
  "/images/journey/photo9.jpeg",
  "/images/journey/photo10.jpeg",
  "/images/journey/photo11.jpeg",
  "/images/journey/photo12.jpeg",
  "/images/journey/photo13.jpeg",
  "/images/journey/photo14.jpeg",
  "/images/journey/photo15.jpeg",
  "/images/journey/photo16.jpeg",
  "/images/journey/photo17.jpeg",
  "/images/journey/photo18.jpeg",
]

  const chapter2Photos = [
  "/images/journey/photo19.jpeg",
  "/images/journey/photo20.jpeg",
  "/images/journey/photo21.jpeg",
  "/images/journey/photo22.jpeg",
  "/images/journey/photo23.jpeg",
  "/images/journey/photo24.jpeg",
  "/images/journey/photo25.jpeg",
  "/images/journey/photo26.jpeg",
  "/images/journey/photo27.jpeg",
]


const chunk = (arr: string[], size: number) => {
  const out: string[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

type PhotoJourneyProps = {
  onFinish: () => void;
};

export default function PhotoJourney({ onFinish }: PhotoJourneyProps) {
  const [stage, setStage] = useState<Stage>("chapter1")
  const [page1, setPage1] = useState(0)
  const [page2, setPage2] = useState(0)
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  const chapter1Pages = useMemo(() => chunk(chapter1Photos, 3), [])
  const chapter2Pages = useMemo(() => chunk(chapter2Photos, 3), [])

  const nextChapter1 = () => {
    if (page1 < chapter1Pages.length - 1) setPage1((p) => p + 1)
    else setStage("cinematic")
  }

  const nextChapter2 = () => {
    if (page2 < chapter2Pages.length - 1) setPage2((p) => p + 1)
    else setStage("finale")
  }

  return (
  <div className="min-h-screen bg-black text-white overflow-hidden">
    <AnimatePresence mode="wait">
       </AnimatePresence>
        {stage === "chapter1" && (
  <Chapter1 onFinish={() => setStage("cinematic")} />
)}

{stage === "cinematic" && (
  <motion.section
    key="cinematic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex min-h-screen items-center justify-center px-6"
  >
    <div className="text-center">
      <h1 className="text-5xl font-bold text-pink-300">
        Every Memory With You ❤️
      </h1>

      <p className="mt-6 text-white/80">
        Every picture reminds me how lucky I am to have you.
      </p>

      <button
        onClick={() => setStage("envelope")}
        className="mt-10 rounded-full bg-pink-500 px-8 py-3 text-white"
      >
        Continue ❤️
      </button>
    </div>
  </motion.section>
)}     
 {stage === "envelope" && (
  <motion.section
    key="envelope"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex min-h-screen flex-col items-center justify-center bg-black px-6"
  >
    <p className="mb-10 text-center text-xl text-white/70">
      Some feelings could never fit into pictures...
      <br />
      So I wrote you a letter. ❤️
    </p>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setEnvelopeOpen(true)}
      className="relative h-72 w-[430px] cursor-pointer"
    >
      {/* Envelope */}
      <div className="absolute bottom-0 h-52 w-full rounded-b-3xl bg-gradient-to-b from-[#FFF9F0] to-[#EFD7BA] shadow-[0_15px_40px_rgba(0,0,0,0.45)] border border-[#f5d8b5]" />

      {/* Flap */}
      <motion.div
        animate={{ rotateX: envelopeOpen ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "top" }}
        className="absolute top-0 h-28 w-full rounded-t-3xl bg-gradient-to-b from-[#FFF4E6] to-[#E6C7A3]"
      />

      {/* Letter */}
      <motion.div
        animate={{ y: envelopeOpen ? -120 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
       className="absolute left-5 top-8 h-40 w-72 rounded-md bg-white shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
      />

      {/* Seal */}
      {!envelopeOpen && (
       <div className="absolute left-1/2 top-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 shadow-xl text-2xl">
  ❤️
</div>
      )}
    </motion.div>

    <button
      onClick={() => {
        if (envelopeOpen) setStage("letter");
      }}
      className="mt-12 rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-400 transition"
    >
      Open Letter ❤️
    </button>
  </motion.section>
)} 
 {stage === "letter" && (
  <motion.section
    key="letter"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="flex min-h-screen items-center justify-center bg-black px-6 py-10"
  >
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="mx-auto h-[90vh] w-[95%] max-w-6xl overflow-y-auto rounded-2xl bg-[#FFF8E7] p-6 md:p-12 text-black shadow-2xl"
    >
      <p className="text-right text-sm text-gray-500">
        1 August ❤️
      </p>

      <h1 className="mt-2 text-center text-3xl font-bold">
        To The Love Of My Life 💌
      </h1>

      <div className="mt-8 space-y-6 leading-8 text-lg">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-pink-600 mb-2">
  To My Beautiful Girl ❤️
</h1>

<p className="text-center italic text-gray-600 mb-6">
  Happy Girlfriend Day, My Love
</p>

<hr className="my-6 border-gray-300" />
<div className="space-y-8 text-xl leading-10 text-gray-800">

  {/* P1 */}
  <p>
    My Love,

If you're reading this right now, then it means you've opened a little piece of my heart.

I've written thousands of messages to you...

Some were funny.
Some were romantic.
Some were full of drama.
Some were just random nonsense that somehow made us laugh.

But this...

This letter is different.

This isn't just another message.

This is everything I've wanted to tell you,
all gathered into one place.

There are feelings that are too big for a text message.

There are emotions that don't fit inside a photo.

And there are moments that deserve to be remembered forever.

That's why I wrote this.

Not because I had to...

But because you deserve to know just how much you mean to me.

Sometimes I still ask myself...

How did I get so lucky?

Out of billions of people in this world...

Life somehow brought me to you.

And I honestly believe that's one of the most beautiful things that has ever happened to me.

You didn't just become someone I loved.

You slowly became my favourite hello...

My hardest goodbye...

My safest place...

My biggest comfort...

And the person I want to tell every little thing that happens in my day.

You became home.

Every notification from you could change my mood.

Every smile of yours became my favourite view.

Every laugh of yours became my favourite sound.

Every hug became a memory I never wanted to end.

And every moment with you quietly became a chapter I'd never stop rereading.

If someone ever asked me...

"What is your happiest memory?"

I wouldn't choose just one.

Because my happiest memories all have one thing in common...

You.

Every photo you've seen before this letter...

Every smile...

Every little moment...

Every silly joke...

Every memory...

They're all little reminders of how beautiful my life became after you walked into it.

Maybe I don't always find the perfect words.

Maybe I don't always express everything perfectly.

But one thing has never changed...

I love you.

More than yesterday.

Less than tomorrow.

And that's a promise that keeps growing every single day.

So before this letter continues...

I just want you to know one thing...

Thank you.

Thank you for existing.

Thank you for choosing me.

And thank you...

For becoming the most beautiful chapter of my life.

Now...

Let's go back to where our story truly began... ❤️
  </p>

  {/* P2 */}
  <p>
    Our story didn't begin with a grand moment.

No fireworks.

No dramatic movie scene.

Just one simple message...

A message that neither of us knew would change everything.

If someone had told me that day,
"This person is going to become one of the most important people in your life..."

I would've laughed.

But life has a beautiful way of surprising us.

We started talking on Snapchat.

At first, it felt like a normal conversation.

Just two strangers getting to know each other.

But something about you felt different.

Our conversations never felt forced.

There were no awkward silences.

No pretending.

No trying to be someone we weren't.

Everything felt... easy.

And then something happened that still makes me smile whenever I think about it.

Even before we were in a relationship...

Even before we officially became "us"...

We were already on a call...

On the very first day.

I still can't explain how that happened so naturally.

Most people spend days or even weeks texting before hearing each other's voice.

But with you...

It was different.

The moment I heard your voice...

Something inside me became calm.

It felt warm.

Comfortable.

Safe.

As if my heart had quietly whispered...

"There's something special about her."

That first call wasn't just a conversation.

It was the beginning of something neither of us could see yet.

We laughed.

We talked about random things.

Time passed without either of us noticing.

It didn't feel like I was talking to someone I'd just met.

It felt like I had known you for much longer.

And honestly...

When that call ended...

I was already waiting for the next one.

Maybe I didn't realize it back then...

But I had already started looking forward to you.

Your messages.

Your voice.

Your smile.

Your presence.

Little by little...

Without making any noise...

You were becoming my favourite part of every single day.

And looking back now...

I think that first call was the moment our story truly began. ❤️
  </p>

  {/* P3 */}
  <p>
    Somewhere between those conversations...

Something quietly started changing.

At first...

I thought I was just enjoying talking to you.

But then...

I found myself checking my phone more often.

Waiting for your message.

Smiling at your notifications.

Thinking about you even when we weren't talking.

Without realizing it...

You had slowly become a part of my everyday routine.

Every morning felt better if I got a message from you.

Every night felt incomplete without talking to you.

It wasn't something I planned.

It just happened.

Slowly.

Naturally.

Beautifully.

There were moments when we'd laugh so much over the smallest things.

Moments that probably looked ordinary to everyone else...

But to me...

They became memories I still carry in my heart.

I loved how effortlessly we could talk.

Sometimes for hours.

Sometimes about serious things.

Sometimes about absolutely nothing.

And somehow...

Even those "nothing" conversations became my favourite.

The more I got to know you...

The more I realized how incredibly special you were.

Your kindness.

Your little habits.

The way you cared.

The way you laughed.

The way you made even an ordinary day feel exciting.

I didn't fall in love with you all at once.

I fell in love with you little by little.

One conversation at a time.

One smile at a time.

One laugh at a time.

One call at a time.

Until one day...

My heart had already made its decision.

You weren't just someone I liked anymore.

You had become the person I wanted to tell everything.

The first person I wanted to share good news with.

The first person I missed.

The first person I prayed for.

The first person I imagined my future with.

And maybe...

That was the moment I truly understood...

This wasn't just a crush.

This wasn't just attraction.

This was love.

Real.

Pure.

And the most beautiful feeling I had ever experienced.

Looking back today...

I don't regret falling in love with you.

If anything...

It's still one of the best decisions my heart has ever made.

And if life gave me another chance...

I'd still choose you.

Again.

Again.

And every single time after that. ❤️
  </p>

  {/* P4 */}
  <p>
    And then...

There came a moment...

The moment when "you and me" slowly became "us."

I don't know if you remember every little detail...

But I do.

Because moments like these are impossible to forget.

Somewhere between all those late-night conversations...

Those random laughs...

Those long calls...

And all those little moments...

We stopped being strangers.

We became each other's person.

That feeling...

It was beautiful.

Knowing that I wasn't the only one smiling at my phone anymore.

Knowing that somewhere...

Someone was also waiting for my message.

Someone was also thinking about me.

Someone cared.

And that someone...

Was you.

I still remember how excited I used to feel before talking to you.

Even if we had talked just an hour before...

I'd still miss you.

It sounds crazy now...

But that's what love does.

It makes a few hours feel like forever.

You became the first person I wanted to say "Good Morning" to.

And the last person I wanted to say "Good Night" to.

No matter how my day went...

Talking to you somehow fixed everything.

You became my peace after every stressful day.

My smile after every bad mood.

My favourite notification.

My favourite voice.

My favourite person.

And slowly...

Without even realizing it...

You became my home.

People say love changes you.

I never understood that before.

But after meeting you...

I did.

Because you made me kinder.

More patient.

More hopeful.

And happier than I had ever been before.

You didn't just become my girlfriend...

You became my best friend.

My biggest supporter.

My comfort.

My safe place.

The person I could tell absolutely anything without being afraid of being judged.

That's rare.

That's precious.

And that's exactly why I'll never stop being grateful for you.

Looking back today...

I don't think falling in love with you was ever a mistake.

It was the beginning of the best chapter of my life.

And if I had to start this story all over again...

I'd still choose the same message...

The same call...

The same girl...

Because every road that leads to you...

Is the right one. ❤️
  </p>

  {/* P5 */}
  <p>
    17 January...

A date that might look ordinary on a calendar...

But for me...

It became one of the most unforgettable days of my life.

Our first date.

Finally...

After so many messages...

So many calls...

So many dreams...

I was finally going to see you.

I still remember how nervous I was.

I kept checking the time again and again.

Wondering...

"What if she reaches before me?"

"What if I say something stupid?"

"What if I make it awkward?"

I don't think I've ever been that nervous to meet someone.

But the moment I saw you...

Everything changed.

The nervousness slowly disappeared.

And all I could think was...

"She's even more beautiful than I imagined."

Pictures had never done justice to your smile.

Not even close.

Seeing you in front of me felt completely different.

Real.

Beautiful.

Perfect.

I still remember every little detail from that day.

The way you smiled.

The way we looked at each other.

Those tiny awkward moments that somehow became the cutest part of our first meeting.

Even the silence between us didn't feel uncomfortable.

Because somehow...

Just being with you...

Was enough.

That day wasn't special because of the restaurant.

It wasn't about the food.

It wasn't about where we were.

It was special because...

For the first time...

The person who had been living inside my phone screen...

Was finally standing right in front of me.

And honestly...

That moment is something I'll never forget.

If someone ever asked me...

"What does happiness look like?"

I'd simply show them a picture from that day.

Because happiness...

Looked exactly like you.

Looking back now...

I realize something.

That wasn't just our first date.

It was the first page of countless memories we would go on to create together.

And if I could relive one single day...

Again...

And again...

And again...

I think I'd always come back to 17 January.

Because that's the day one of my favourite memories was born. ❤️
  </p>

  {/* P6 */}
  <p>
    Our second date...

Same place.

Same excitement.

But somehow...

I was even happier this time.

Because this time...

It didn't feel like I was meeting someone new.

It felt like I was meeting my favourite person.

I remember you were on your period that day.

I knew you weren't feeling your best.

And honestly...

I just wanted to make you feel even a little more comfortable.

So...

I gave you my hoodie.

At that moment...

It was just a hoodie.

But the second you wore it...

It became my favourite hoodie in the entire world.

And can I confess something?

It looked a hundred times better on you than it had ever looked on me.

I don't think I'll ever forget that sight.

Seeing you wrapped up in my hoodie...

Looking so unbelievably cute...

I honestly wished time would stop right there.

If I had known that one simple hoodie would become one of my favourite memories...

I would've given it to you even sooner.

I don't know if you noticed...

But I couldn't stop looking at you.

Every few seconds...

My eyes somehow found their way back to you.

And every time you caught me staring...

I'd pretend I wasn't.

(Yeah...

I wasn't very good at hiding it. 😂)

That day wasn't about expensive gifts.

Or fancy places.

Or perfect plans.

It was simply about us.

Just being together.

Talking.

Laughing.

Making memories without even trying.

Those are still the moments I treasure the most.

And honestly...

If you ever ask me what happened to my hoodie...

My answer will always be the same.

It never really belonged to me after that day...

It belonged to the most beautiful girl who ever wore it. ❤️
  </p>

  {/* P7 */}
  <p>
    There are so many little things about you...

That I don't think I've ever told you.

I love the way you smile...

Especially when you're trying not to.

I love the way your eyes light up whenever you're genuinely happy.

I love how you randomly become cute without even trying.

I love how you somehow manage to make even an ordinary day feel special.

And can we talk about your eyes for a second?

Because honestly...

I could spend hours just looking into them.

Not because they're pretty...

But because they somehow make the whole world disappear.

Whenever I'm with you...

Nothing else matters.

It's just you.

Your smile.

Your voice.

Your hand in mine.

And suddenly...

Life feels complete.

I know I tease you a lot.

I annoy you.

I make terrible jokes.

I act dramatic.

Sometimes I even pretend to argue just because your cute angry face is impossible not to love.

(Yes... I do it on purpose. 😂❤️)

But if there's one thing I'll never joke about...

It's how much I love you.

Because that's the truest thing I've ever felt.

You're not just my girlfriend.

You're my best friend.

My favourite person.

My biggest blessing.

And without even realizing it...

You've become a part of every dream I have.

Whenever I imagine my future...

You're always there.

Still smiling at me.

Still stealing my hoodies.

Still making fun of me.

Still making my life beautiful.

And honestly...

I wouldn't want it any other way.

If someone gave me one wish right now...

I wouldn't ask for money.

Or fame.

Or anything else.

I'd simply ask for more time with you.

Because every second with you...

Becomes my favourite memory.

And I hope...

Many years from now...

We'll read this letter together...

Smile at these memories...

And laugh because our love story only became more beautiful with time. ❤️
  </p>

  {/* P8 */}
  <p>
    And now...

We've reached the end of this letter.

But never the end of our story.

Because our story still has so many pages left to be written.

So many places left to visit.

So many late-night talks left.

So many random selfies.

So many hugs.

So many kisses.

So many laughs that we'll probably never remember...

But we'll always remember how they made us feel.

I don't know what life has planned for us.

Life isn't perfect.

People aren't perfect.

Relationships aren't perfect.

We'll have misunderstandings.

We'll have bad days.

We'll probably annoy each other more times than we can count.

But even on those days...

I'll still choose you.

Not because you're perfect.

But because you're you.

And that's more than enough for me.

Thank you...

For every smile you've given me.

For every laugh we've shared.

For every memory we've created together.

For believing in us.

For loving me.

For becoming the safest place my heart has ever known.

If one day...

Many years from now...

Someone asks me,

"What was the best decision of your life?"

I'll smile...

Look at you...

And quietly think,

"It was answering that first Snapchat message."

Because one simple message...

Brought me the most beautiful girl...

The kindest heart...

And the greatest love I've ever known.

Happy Girlfriend Day, My Love. ❤️

No matter where life takes us...

No matter how much time passes...

You'll always have a special place in my heart.

You'll always be...

My favourite hello.

My safest place.

My greatest blessing.

And the love of my life.

I love you today.

I'll love you tomorrow.

And if tomorrow never comes...

Know that every heartbeat I ever had...

Belonged to you.

Forever.

Always.

And endlessly.

Forever Yours,

**Muheet Ayoub ❤️**
  </p>
<div className="mt-16 text-right">
  <p className="text-2xl italic">Forever Yours,</p>
  <p className="mt-2 text-3xl font-bold text-pink-600">
    Muheet ❤️
  </p>
</div>
</div>
      </div>

      <button
  onClick={() => setStage("chapter2")}
  className="mt-10 w-full rounded-full bg-pink-500 py-3 text-white"
>
  Continue Our Story ❤️
</button>
    </motion.div>
  </motion.section>
)}
  </div>
  )
}


type TitleProps = {
  children: React.ReactNode
  size?: "xl" | "2xl" | "3xl" | "4xl"
  className?: string
}

function Title({ children, size = "3xl", className = "" }: TitleProps) {
  const sizes = {
    xl: "text-2xl sm:text-3xl",
    "2xl": "text-3xl sm:text-4xl",
    "3xl": "text-4xl sm:text-5xl",
    "4xl": "text-5xl sm:text-6xl",
  }

  return (
    <h1 className={`font-semibold tracking-tight bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent ${sizes[size]} ${className}`}>
      {children}
    </h1>
  )
}

type TextProps = {
  children: React.ReactNode
  color?: "primary" | "secondary"
  size?: "sm" | "md"
  className?: string
}

function Text({ children, color = "primary", size = "md", className = "" }: TextProps) {
  const colors = {
    primary: "text-white/90",
    secondary: "text-white/65",
  }

  const sizes = {
    sm: "text-sm",
    md: "text-base",
  }

  return <p className={`${colors[color]} ${sizes[size]} ${className}`}>{children}</p>
}

function Icon({ name, color = "currentColor", size = 20 }: { name: "heart" | "arrow-right"; color?: string; size?: number }) {
  if (name === "heart") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
        <path d="M12 21s-6.716-4.35-9.193-8.12C.59 9.356 2.08 5 6.09 5c2.07 0 3.34 1.21 3.91 2.09C10.57 6.21 11.84 5 13.91 5c4.01 0 5.5 4.356 3.283 7.88C18.716 16.65 12 21 12 21z" />
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Pressable({ children, onClickAction, className }: { children: React.ReactNode; onClickAction: { handler: "client"; type: "issue_new_turn"; payload: { query: string } }; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        // Placeholder for local preview. Replace with your own handler if needed.
      }}
      className={className}
    >
      {children}
    </button>
  )
}