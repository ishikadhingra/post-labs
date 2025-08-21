"use client";
import { useRef } from "react";
import Image from "next/image";

function Header() {

  return (
    <div
     
      className="relative grid grid-cols-1 md:grid-cols-2 items-center border border-b-[#dedede]"
    >
      {/* Left: Logo */}
      <div className="flex items-center px-6 md:px-12 py-6">
        <Image src="/logo.svg" alt="PostLabs Logo" width={150} height={100} />
      </div>

      {/* Right: Text */}
      <div className="flex items-center px-6 md:px-12 py-4 md:py-6 ">
        <p className="text-left max-w-xl md:max-w-lg md:ml-auto text-base md:text-lg">
          We’re building the backbone of Canadian digital media — <br /> a
          next-gen platform that gives creators the tools to <br /> thrive.
        </p>
      </div>

      {/* ✅ Cursor only inside Header */}
    </div>
  );
}

export default Header;
