import Image from "next/image";
import Header from "@/components/general/Header";

export default function AboutSection() {
  return (
    <section id="about">
      <Header title="About Me" />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-20">

        {/* Left — Photo */}
        <div className="flex justify-center" data-aos="fade-right">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 blur-2xl opacity-30" />
            <Image
              src="/image/david.jpg"
              alt="Chork Ratanakdavid"
              width={400}
              height={400}
              className="relative rounded-3xl object-cover w-full h-full border border-indigo-500/30"
            />
          </div>
        </div>

        {/* Right — Text */}
        <div data-aos="fade-left" data-aos-delay="150">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8 leading-tight">
            Hi, I&apos;m Chork RatanakDavid 
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-5">
            A fourth-year ICT Engineering student at ITC Cambodia who loves
            building things for the web. I work across the full stack —
            designing clean interfaces and writing solid backend logic.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I&apos;ve shipped several real projects with my team, enjoy learning
            new technologies, and I&apos;m currently looking for an internship
            where I can grow and make a real contribution.
          </p>
        </div>

      </div>
    </section>
  );
}