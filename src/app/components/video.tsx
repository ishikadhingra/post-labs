"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;

    if (el) {
      // Set initial width small
      gsap.set(el, { width: "50%" });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%", // when video section comes in
        end: "bottom top", // till it leaves top of viewport
        scrub: true,
        onEnter: () => {
          gsap.to(el, { width: "100%", duration: 1, ease: "power2.inOut" });
        },
        onLeaveBack: () => {
          gsap.to(el, { width: "50%", duration: 1, ease: "power2.inOut" });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden z-1 flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="relative h-full object-cover rounded-2xl shadow-lg"
        autoPlay
        loop
        muted
        playsInline
        poster="/poster.jpg"
      >
        <source src="/poster.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
