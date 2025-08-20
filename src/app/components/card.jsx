"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    // Initial stacked state (all overlap in center)
    gsap.set(cards, {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.85,
      filter: "blur(15px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Fade in + rise from stack
    tl.to(cards, {
      opacity: 1,
      yPercent: -40,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
    })

      // 2. Spread them apart (fan out)
      .to(cards[0], {
        xPercent: -120,
        rotate: -4,
        scale: 0.95,
        duration: 1,
        ease: "expo.out",
      }, "-=0.4")
      .to(cards[1], {
        xPercent: 0,
        rotate: 0,
        scale: 1.05,
        duration: 1,
        ease: "expo.out",
      }, "<")
      .to(cards[2], {
        xPercent: 120,
        rotate: 4,
        scale: 0.95,
        duration: 1,
        ease: "expo.out",
      }, "<")

      // 3. Smooth transition into row
      .to(cards, {
        position: "relative",
        top: "auto",
        left: "auto",
        xPercent: 0,
        yPercent: 0,
        rotate: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.inOut",
        clearProps: "filter",
      }, "+=0.3");
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 cards"
    >
      {/* Card 1 */}
      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white">
        <Image src="/icon-1.png" alt="icon" width={60} height={60} />
        <p className="mt-4 text-lg font-medium">Empowering <br /> Creators.</p>
      </div>

      {/* Card 2 */}
      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white">
        <Image src="/icon.svg" alt="icon" width={60} height={60} />
        <p className="mt-4 text-lg font-medium">Transforming Publishing.</p>
      </div>

      {/* Card 3 */}
      <div className="p-6 card shadow-lg rounded-2xl bg-black text-white">
        <Image src="/icon-3.png" alt="icon" width={60} height={60} />
        <p className="mt-4 text-lg font-medium">Reclaiming <br /> Canadian Media.</p>
      </div>
    </div>
  );
}
