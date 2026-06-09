"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function AnimatedIntro() {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="text-lg sm:text-2xl h-30 px-8 text-center font-medium 
    text-gray-400">
      Welcome to my portfolio I&apos;m RatanakDavid - A passionate 
      <span className="text-indigo-500 font-bold">
        <Typewriter 
          options={{
            strings: [
              "Full-Stack Developer",
              "UI/UX Designer",
              "Tech Enthusiast",
              "Lifelong Learner"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            wrapperClassName: "inline-block py-6",
        }}/>
      </span>

    </div>
  )
}
