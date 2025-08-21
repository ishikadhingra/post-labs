"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CursorProps {
  parentRef: React.RefObject<HTMLDivElement | null>;
}

export default function Cursor({ parentRef }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const heroSection = parentRef.current;

    if (!cursor || !heroSection) return;

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

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

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const r = heroSection.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      const halfSize = (cursor.offsetWidth || 820) / 2;
      gsap.set(cursor, { x: cursorX - halfSize, y: cursorY - halfSize });
    };

    gsap.ticker.add(animateCursor);

    heroSection.addEventListener("mouseenter", handleMouseEnter);
    heroSection.addEventListener("mouseleave", handleMouseLeave);
    heroSection.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = "auto";
      gsap.ticker.remove(animateCursor);
      heroSection.removeEventListener("mouseenter", handleMouseEnter);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
      heroSection.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parentRef]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none absolute top-0 left-0 hidden md:flex items-center justify-center z-[1]"
      style={{ width: "600px", height: "600px" }}
    >
     <div
  style={{
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(252, 239, 113, 0.9) 40%, rgba(252, 239, 113, 0.6) 70%, rgba(252, 239, 113, 0) 100%)",
    filter: "blur(40px)",
    mixBlendMode: "multiply",
  }}
/>

    </div>
  );
}
