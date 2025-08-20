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
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Initial: sab cards ek dusre ke upar center me (smooth stacked state)
  gsap.set(".card", {
    position: "absolute",
    top: "50%",
    left: "50%",
    xPercent: -40,
    yPercent: -40,
    opacity: 0,
    scale: 0.94,
    filter: "blur(10px)",
    willChange: "transform, opacity, filter",
  });
  // layer middle card on top for cleaner reveal
  gsap.set([".card:nth-child(1)", ".card:nth-child(3)"], { zIndex: 1 });
  gsap.set(".card:nth-child(2)", { zIndex: 2 });

  // Animate into row layout (left - center - right)
  tl.to(".card", { opacity: 1, filter: "blur(0px)", duration: 0.55, stagger: 0.05, ease: "power2.out" }, 0)
    .to(".card:nth-child(1)", {
      xPercent: -110, // keep within container to avoid scrollbar
      duration: 1.15,
      ease: "power3.inOut",
    }, 0.05)
    .to(
      ".card:nth-child(2)",
      {
        xPercent: 0, // center
        scale: 1,
        duration: 1.15,
        ease: "power3.inOut",
      },
      "<" // same time me chale
    )
    .to(
      ".card:nth-child(3)",
      {
        xPercent: 110, // keep within container to avoid scrollbar
        duration: 1.15,
        ease: "power3.inOut",
      },
      "<"
    )
    .add(() => {
      // Switch to grid flow cleanly, avoid snap/overflow
      gsap.set(".card", {
        position: "relative",
        top: "auto",
        left: "auto",
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        clearProps: "filter,willChange",
      });
    });
}, { scope: containerRef });


  return (
    <div
      ref={containerRef}
      className="relative max-w-8xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 min-h-[400px]" // min height to avoid scrollbar jump
    >
      {/* Card 1 */}
      <div className="p-6 card shadow-md rounded-2xl bg-white">
        <Image src="/icon-1.png" alt="icon" width={100} height={100} />
        <p className="text-gray-600 mt-4">Empowering Creators.</p>
      </div>

      {/* Card 2 */}
      <div className="p-6 card shadow-md rounded-2xl bg-white">
        <Image src="/icon.svg" alt="icon" width={100} height={100} />
        <p className="text-gray-600 mt-4">Transforming Publishing.</p>
      </div>

      {/* Card 3 */}
      <div className="p-6 card shadow-md rounded-2xl bg-white">
        <Image src="/icon-3.png" alt="icon" width={100} height={100} />
        <p className="text-gray-600 mt-4">
          Reclaiming <br /> Canadian Media.
        </p>
      </div>
    </div>
  );
}
