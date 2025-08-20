"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingButtons() {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLAnchorElement | null>(null);

  // Scroll animation for floating buttons
  useEffect(() => {
    if (!btnRef.current) return;

    gsap.fromTo(
      btnRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards",
          start: "bottom center",
          endTrigger: "footer",
          end: "top center",
          scrub: false,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  // GSAP hover effect for Contact button
  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, {
        backgroundColor: "#ffffff",
        color: "#000000",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        backgroundColor: "transparent",
        color: "#ffffff",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={btnRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center bg-[#00000085] text-white w-[213px] h-[54px] rounded-full shadow-lg overflow-hidden">
        {/* About Button (Default Active) */}
        <Link href="#about" passHref className="bg-white text-black rounded-full w-1/2 h-full flex items-center justify-center">
         
            About
         
        </Link>

        {/* Contact Button (Animated on hover with GSAP) */}
        <Link href="#contact" passHref>
          <Link
            href={"contactRef"}
            className="w-1/2 h-full flex items-center justify-center rounded-full"
          >
            Contact
          </Link>
        </Link>
      </div>
    </div>
  );
}
