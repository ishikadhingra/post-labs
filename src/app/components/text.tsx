"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function TextSection() {
  // Array of paragraph refs
  const sectionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref) => {
      if (!ref) return;

      const lines = ref.querySelectorAll("span");

      gsap.fromTo(
        lines,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%", // Jab ref viewport ke 80% par ho tab start
            toggleActions: "play none none reverse", // reverse bhi hoga jab scroll back kare
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
        <div className="relative flex items-center justify-start">
          <Image
            src="/icon-4.svg"
            alt="Background Icon"
            className="opacity-71 icon"
            width={100}
            height={100} unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
            <p
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl"
            >
              <span className="block">Post Labs is building a homegrown platform</span>
              <span className="block">designed for Canadians</span>
              <span className="block">and the future of Canadian media.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center justify-end px-4">
            <p
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl"
            >
              <span className="block">
                At its core is PostOS, our made-in-Canada publishing engine
              </span>
              <span className="block">
                that connects local voices, communities, and trusted journalism
              </span>
              <span className="block">in one seamless digital experience.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
        <div className="relative flex items-center justify-center md:justify-start">
          <Image
            src="/image-6.png"
            alt="Background Icon"
            className="opacity-71 icon" unoptimized
            width={100}
            height={100}
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
            <p
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl"
            >
              <span className="block">Built by Canadians, for Canadians,</span>
              <span className="block">PostOS is more than just technology —</span>
              <span className="block">it’s a way to bring our stories home.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
