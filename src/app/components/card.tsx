"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card");

    // Step 1: Sab cards ek sath center pe stack
    gsap.set(cards, {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      rotate: (i) => -5 + i * 5,
      zIndex: (i) => cards.length - i,
    });

    // Step 2: Scroll pe spread
    gsap.to(cards[0], {
      x: -340, // left card tree ke left
     rotate:0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(cards[1], {
      x: 0, // middle card center me hi rahega
      rotate: 0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(cards[2], {
      x: 340, // right card tree ke right
     rotate
     :0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full px-8 py-40 min-h-[100vh] "
    >
      {/* Teen cards */}
      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white w-64 text-center">
        <Image src="/icon-1.png" alt="icon" width={60} height={60} unoptimized/>
        <p className="mt-4 text-lg font-medium">Empowering Creators.</p>
      </div>

      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white w-64 text-center">
        <Image src="/icon.svg" alt="icon" width={60} height={60} unoptimized/>
        <p className="mt-4 text-lg font-medium">Transforming Publishing.</p>
      </div>

      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white w-64 text-center">
        <Image src="/icon-3.png" alt="icon" width={60} height={60} unoptimized />
        <p className="mt-4 text-lg font-medium">Reclaiming Canadian Media.</p>
      </div>
    </div>
  );
}
