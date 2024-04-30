"use client";

import { BorderBeam } from "./border-beam.tsx";

import { useInView } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper, { RoundedSlideButton } from "./button.jsx";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
    
      <h1 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Technical Document &  Lead Generation
        <br className="hidden md:block" /> 
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block" /> Tailwind CSS, React, and Framer
        Motion.
      </p>
      <div className="flex justify-center items-center space-x-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <RoundedSlideButton>Button 1</RoundedSlideButton>
        <RoundedSlideButton>Button 2</RoundedSlideButton>
      </div>
      
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(#008080_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,#008080,#00e2e2,transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="#008080"
            colorTo="#00e2e2"
          />

          <img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1714481948/hero_x6wubt.png"
            alt="Hero Image"
            className="relative w-full h-full rounded-[inherit] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
