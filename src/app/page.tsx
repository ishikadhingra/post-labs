import Image from "next/image";
import VideoSection from "@/app/components/video";
import VideoSectionSecond from "@/app/components/video-second";
import Footer from "@/app/components/footer";
import Marquee from "@/app/components/marquee";
import Hero from "@/app/components/hero";
import Card from "@/app/components/card";
import ColorText from "@/app/components/colortext";
import Button from "@/app/components/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="background-grid"></div>
        {/* Top Black Bar */}
        <div className="bg-black text-white text-center py-3 text-lg relative z-50 ">
          Help shape the future of digital journalism — we're hiring!
        </div>

        {/* Main Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center border border-b-[#dedede] ">
          {/* Left: Logo */}
          <div className="flex items-center px-6 md:px-12 py-6">
            <Image
              src="/logo.svg"
              alt="PostLabs Logo"
              width={150}
              height={100}
            />
          </div>

          {/* Right: Text with yellow gradient */}
          <div className="flex items-center px-6 md:px-12 py-4 md:py-6 ">
            <p className="text-left max-w-xl md:max-w-lg md:ml-auto text-base md:text-lg">
              We’re building the backbone of Canadian digital media — <br /> a
              next-gen platform that gives creators the tools to <br /> thrive.
            </p>
          </div>
        </div>
        {/* Content flex container */}
       <Hero/>
        <div className="relative min-h-screen bg-[#fafaf5] ">
          {/* Background grid lines */}
          <div className="background-grid"></div>

          {/* Card */}
          <Card/>
{/* card */}
          {/* middle text */}
       <ColorText/>
          {/* middle text */}

          {/* video section */}
          <VideoSection />
          {/* video section */}

          <div className="flex justify-between items-end gap-x-10 gap-y-10 pt-16 md:pt-[100px] pb-0 px-6 md:px-8 relative  ">
            {/* Left: Heading with gradient */}
            <div className="relative">
              <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10">
                What We’re
              </h1>
              <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10 mt-[-12px] md:mt-[-32px]">
                Building
              </h1>
            </div>
          </div>
            <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image 
          src="/icon-4.svg"  
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl">
            Post Labs is building a homegrown platform designed 
            for Canadians and the future of Canadian media.
          </p>
        </div>
      </div>
            </section>
            <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image
          src="/image-5.png"   // replace with your image path
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl">
            At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.


          </p>
        </div>
      </div>
            </section>
            <section className="relative w-full bg-[#f9f9f5] py-[20vh] md:py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image 
          src="/image-6.png"   // replace with your image path
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-xl md:text-3xl font-medium leading-snug text-black max-w-xl">
           Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home.


          </p>
        </div>
      </div>
            </section>

{/* second video */}
<VideoSectionSecond/>
{/* second video */}
{/* investor */}
  <section className="grid grid-cols-1 md:grid-cols-2 h-[120vh] bg-gradient-to-t from-yellow-300 to-white border-t border-gray-200">
  {/* Left Side - Investors */}
  <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-20  md:border-r border-gray-200">
    <h2 className="text-7xl   mt-[-250px]">For Investors</h2>
    <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
      We’re raising capital to scale fast. If you’re an investor who believes in 
      the future of independent Canadian media, we’d love to speak with you.
    </p>
    <Link
      href={"mailto:invest@postlabs.com"}
      className="text-black underline font-medium"
    >
      invest@postlabs.com
    </Link>
  </div>

  {/* Right Side - Builders */}
  
  <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-20">
    <h2 className="text-7xl   mt-[292px]">For Builders</h2>
    <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
      We’re hiring. If you’re passionate about media, technology, and the 
      future of Canada’s digital ecosystem, come build with us. We’re always 
      looking for great people. Check out our jobs page for current opportunities.
    </p>
    <Link
      href={"mailto:careers@postlabs.com"}
      className="text-black underline font-medium"
    >
      careers@postlabs.com
    </Link>
  </div>
</section>

    <Marquee/>
{/* investor  */}
       
        </div>
      </div>
      

      <Footer/>
      <Button/>
    </>
  );
}
