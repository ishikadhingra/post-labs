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
import Header from "./components/header";
import Text from "./components/text";
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
        <Header/>
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

          <div className="flex justify-between items-end gap-x-10 gap-y-10 pt-16 md:pt-[100px] pb-0 px-6 md:px-8 relative border  border-b-[#dedede]">
            {/* Left: Heading with gradient */}
            <div className="relative ">
              <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10">
                What We’re
              </h1>
              <h1 className="text-5xl md:text-[14vh] lg:text-[20vh] leading-tight relative z-10 mt-[-12px] md:mt-[-32px]">
                Building
              </h1>
            </div>
          </div>
           <Text/>
           

{/* second video */}
<VideoSectionSecond/>
{/* second video */}
{/* investor */}
  <section className="grid grid-cols-1 md:grid-cols-2 h-[150vh] bg-gradient-to-t from-yellow-300 to-white border-t border-gray-200">
  {/* Left Side - Investors */}
  <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-20  md:border-r border-gray-200">
    <h2 className="text-7xl    ">For Investors</h2>
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
  
  <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-20  lg:mt-[350px]">
    <h2 className="text-7xl ">For Builders</h2>
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