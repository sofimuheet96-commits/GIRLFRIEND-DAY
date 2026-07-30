import Image from "next/image";
import Beginning from "./Beginning";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";

import { motion } from "framer-motion";
import FinalPage from "./FinalPage";

export default function Book() {
  return (
    <main className="bg-[#efe4cf]">

      {/* PAGE 1 */}
      <section className="min-h-screen flex items-center justify-center p-8">

        <div className="w-full max-w-7xl h-[90vh] bg-[#f8f2e7] rounded-xl shadow-2xl flex overflow-hidden">

          {/* LEFT */}
          <div className="w-1/2 relative border-r-4 border-[#d6c3a5]">

            <Image
              src="/bouquet.jpeg"
              alt="Bouquet"
              fill
              sizes="50vw"
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">

              <h1 className="text-5xl font-bold text-white">
                Remember This?
              </h1>

              <p className="text-white text-xl mt-5 leading-9">
                The bouquet I brought for you on April 29.
                Flowers may fade...
                but the memories attached to them never do.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="w-1/2 relative">

            <Image
             src="/images/circle/photo1.jpeg"
              alt="Cover"
              fill
              sizes="50vw"
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-10">

              <h1 className="text-5xl text-pink-200 font-bold">
                Happy Girlfriend's Day
              </h1>

              <h2 className="text-4xl text-white mt-3">
                Meri Double Chin Wali Aurat ❤️
              </h2>

              <p className="text-white text-xl mt-6 leading-9">
                I couldn't be there today,
                so I made this little digital book
                filled with our memories.
              </p>

            </div>

          </div>

        </div>

      </section>

      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.8 }}
>
  <Beginning />
</motion.div>
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      
      <FinalPage />
      

    </main>
  );
}