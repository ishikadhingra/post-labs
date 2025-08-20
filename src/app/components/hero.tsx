"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Arrow animation
    gsap.to(".arrow-down", {
      y: 20,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      repeatDelay: 0.5,
    });

    // Enable custom cursor only on md and up
    const isTabletUp =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    if (!isTabletUp) return;

    // Cursor setup
    const cursor = cursorRef.current;
    const heroSection = heroSectionRef.current;

    if (!cursor || !heroSection) return;

    // Mouse position variables
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Initialize at hero center and show glow
    const rectInit = heroSection.getBoundingClientRect();
    mouseX = rectInit.width / 2;
    mouseY = rectInit.height / 2;
    cursorX = mouseX;
    cursorY = mouseY;
    const initialHalf = (cursor.offsetWidth || 820) / 2;
    gsap.set(cursor, {
      x: cursorX - initialHalf,
      y: cursorY - initialHalf,
      opacity: 1,
    });

    // Show cursor when mouse enters hero; hide default cursor inside hero only
    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    // Hide cursor when mouse leaves hero; restore default cursor
    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    // Track mouse movement only within hero section (relative coordinates)
    const handleMouseMove = (e: MouseEvent) => {
      const r = heroSection.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    };

    // Smooth cursor following animation
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      const halfSize = (cursor.offsetWidth || 820) / 2;
      gsap.set(cursor, {
        x: cursorX - halfSize,
        y: cursorY - halfSize,
      });
    };

    // Start animation loop
    gsap.ticker.add(animateCursor);

    // Event listeners
    heroSection.addEventListener("mouseenter", handleMouseEnter);
    heroSection.addEventListener("mouseleave", handleMouseLeave);
    heroSection.addEventListener("mousemove", handleMouseMove);

    // Interactive elements hover effects
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll<
        HTMLElement
      >("a, button, [role='button'], .interactive");

      interactiveElements.forEach((element) => {
        const handleEnter = () => {
          gsap.to(cursor, {
            scale: 1.3,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        element.addEventListener("mouseenter", handleEnter);
        element.addEventListener("mouseleave", handleLeave);
      });
    };

    setTimeout(addHoverEffects, 100);

    // Click effects
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    heroSection.addEventListener("mousedown", handleMouseDown);
    heroSection.addEventListener("mouseup", handleMouseUp);

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      gsap.ticker.remove(animateCursor);
      heroSection.removeEventListener("mouseenter", handleMouseEnter);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mousedown", handleMouseDown);
      heroSection.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={heroSectionRef}
      className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-10 pt-24 md:pt-[239px] pb-0 px-6 md:px-8 relative overflow-hidden"
    >
    {/* Custom Glow Cursor */}
<div
  ref={cursorRef}
  className="pointer-events-none absolute top-0 left-0 hidden md:flex items-center justify-center z-[1]"
  style={{
    width: "600px",   // make it big like screenshot
    height: "600px",
  }}
>
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,220,0,0.6) 0%, rgba(255,220,0,0.3) 40%, rgba(255,220,0,0) 80%)",
      filter: "blur(120px)",   // soft blur, no hard edge
      mixBlendMode: "multiply", // blends nicely with background like in screenshot
    }}
  />
</div>




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
