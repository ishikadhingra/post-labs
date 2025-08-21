"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingButtons() {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<"about" | "contact">("about");

  useEffect(() => {
    if (!btnRef.current) return;

    // By default show buttons
    gsap.set(btnRef.current, { autoAlpha: 1 });

    // Footer aate hi hide karo
    ScrollTrigger.create({
      trigger: "footer", 
      start: "top bottom", // footer viewport ke andar aate hi
      onEnter: () => gsap.to(btnRef.current, { autoAlpha: 0, y: 50, duration: 0.5 }),
      onLeaveBack: () =>
        gsap.to(btnRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }),
    });
  }, []);

  return (
  <div
  ref={btnRef}
  className="fixed bottom-6 w-full flex justify-center z-50 hidden md:flex"
>
  <div className="relative flex items-center bg-[#00000085] text-white w-[213px] h-[54px] rounded-full shadow-lg overflow-hidden">
    {/* Active highlight */}
    <div
      className={`absolute top-0 h-full w-1/2 bg-white rounded-full transition-all duration-500 ease-in-out ${
        active === "about" ? "left-0" : "left-1/2"
      }`}
    ></div>

    <Link
      href="#about"
      onClick={() => setActive("about")}
      className={`relative z-10 w-1/2 h-full flex items-center justify-center font-medium transition-colors duration-300 ${
        active === "about" ? "text-black" : "text-white"
      }`}
    >
      About
    </Link>

    <Link
      href="#contact"
      onClick={() => setActive("contact")}
      className={`relative z-10 w-1/2 h-full flex items-center justify-center font-medium transition-colors duration-300 ${
        active === "contact" ? "text-black" : "text-white"
      }`}
    >
      Contact
    </Link>
  </div>
</div>


  );
}
