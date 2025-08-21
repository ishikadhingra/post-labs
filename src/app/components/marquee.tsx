"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.to(".marquee-track", {
      xPercent: -50, // move half (since duplicated)
      duration: 20,  // slower speed (increase for even slower)
      repeat: -1,
      ease: "linear",
    });

    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const handleEnter = () => tl.pause();
    const handleLeave = () => tl.resume();

    marqueeEl.addEventListener("mouseenter", handleEnter);
    marqueeEl.addEventListener("mouseleave", handleLeave);

    return () => {
      marqueeEl.removeEventListener("mouseenter", handleEnter);
      marqueeEl.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // A single "slide" (text + arrow)
  const Slide = () => (
    <div className="flex items-center gap-6 relative z-[1]">
      <h1 className="text-white text-2xl md:text-4xl lg:text-[56px] whitespace-nowrap px-6 md:px-10 py-6">
        Ready to Build the Future of Canadian Media?{" "}
        <Link href={"#"} className="underline">
          Contact Us
        </Link>
      </h1>
      <Image
        src="/download.svg"
        width={60}
        height={60}
        alt="arrow"
        className="shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
      />
    </div>
  );

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden bg-black w-full marquee relative z-1"
    >
      <div className="flex marquee-track">
        {/* First copy */}
        <Slide />
        {/* Duplicate copy for seamless loop */}
        <Slide />
      </div>
    </div>
  );
}
