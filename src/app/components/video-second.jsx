"use client";
import React from "react";
import Image from "next/image";
const VideoSectionSecond = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden z-1">
      {/* Video 1 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/map.mp4" type="video/mp4" />
      </video>

      {/* Video 2 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
        id="video2"
      >
        <source src="/student.mp4" type="video/mp4" />
      </video>

      {/* Image */}
      <Image
        src="/map.jpg"
        alt="Poster"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
        id="poster" width={100} height={100}
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Built for Canada</h1>
      </div>
    </section>
  );
};

export default VideoSectionSecond;
