"use client";

import { useRef } from "react";
import Image from "next/image";
import Cursor from "@/app/components/cursor"; // cursor component import

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={heroSectionRef}
      className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-10 pt-24 md:pt-[239px] pb-0 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Cursor sirf Hero ke andar hi render hoga */}
      <Cursor parentRef={heroSectionRef} />

      {/* Left: Heading */}
      <div className="relative">
        <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10">
          The Future of
        </h1>
        <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10 mt-[-12px] md:mt-[-32px]">
          News Starts Here
        </h1>
      </div>

      {/* Right: Arrow image */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <Image
          src="/arrow.svg"
          alt="Arrow Down"
          width={120}
          height={120}
          className="w-28 h-28 arrow-down interactive"
        />
      </div>
    </div>
  );
}
