"use client";

import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden z-1">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/poster.jpg" // your poster image
      >
        <source src="/poster.mp4" type="video/mp4" />
    
      </video>

     

    
    </section>
  );
};

export default VideoSection;
