"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MiddleText() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into word spans (preserve spaces)
    const original: string = el.textContent || "";
    el.innerHTML = "";
    const tokens: string[] = original.match(/\S+|\s+/g) || [];
    const wordSpans: HTMLSpanElement[] = [];

    tokens.forEach((tok) => {
      if (/^\s+$/.test(tok)) {
        el.appendChild(document.createTextNode(tok));
      } else {
        const span = document.createElement("span");
        span.textContent = tok;
        span.style.color = "rgba(0,0,0,0.1)"; // start faded
        span.style.willChange = "color";
        el.appendChild(span);
        wordSpans.push(span);
      }
    });

    const updateColors = (progress: number) => {
      const total = wordSpans.length;
      if (total === 0) return;
      const active = Math.floor(progress * (total - 1));

      for (let i = 0; i < total; i++) {
        if (i <= active) {
          wordSpans[i].style.color = "rgba(0,0,0,1)";
        } else {
          wordSpans[i].style.color = "rgba(0,0,0,0.1)";
        }
      }
    };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 15%",
      scrub: true,
      onUpdate: (self) => updateColors(self.progress),
      onEnter: () => updateColors(0),
      onLeave: () => updateColors(1),
      onEnterBack: () => updateColors(1),
      onLeaveBack: () => updateColors(0),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        ref={textRef}
        className="middle-text text-3xl leading-relaxed text-center max-w-3xl mx-auto"
      >
        Post Labs is rethinking how digital media works for Canadians. Our
        mission is simple: make journalism profitable, sustainable, and trusted
        – built for Canadians, by Canadians.
      </div>
    </div>
  );
}
