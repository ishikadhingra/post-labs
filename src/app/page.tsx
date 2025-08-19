import Image from "next/image";
import VideoSection from "@/app/components/video";
import VideoSectionSecond from "@/app/components/video-second";
import Footer from "@/app/components/footer";
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
        <div className="grid grid-cols-2 items-center ">
          {/* Left: Logo */}
          <div className="flex items-center px-12 py-6">
            <Image
              src="/logo.svg"
              alt="PostLabs Logo"
              width={150}
              height={100}
            />
          </div>

          {/* Right: Text with yellow gradient */}
          <div className="flex items-center px-12 py-6 ">
            <p className="text-left  max-w-lg ml-auto text-lg">
              We’re building the backbone of Canadian digital media — <br /> a
              next-gen platform that gives creators the tools to <br /> thrive.
            </p>
          </div>
        </div>
        {/* Content flex container */}
        <div className="flex justify-between items-end gap-x-10 gap-y-10 pt-[239px] pb-0 px-8 relative  ">
          {/* Left: Heading with gradient */}
          <div className="relative">
            <h1 className="text-[20vh]  leading-tight relative z-10">
              The Future of
            </h1>
            <h1 className="text-[20vh]  leading-tight relative z-10 mt-[-32px]">
              News Starts Here
            </h1>
          </div>

          {/* Right: Arrow image */}
          <div>
            <Image
              src="/arrow.svg"
              alt="Arrow Down"
              width={120}
              height={120}
              className="w-28 h-28"
            />
          </div>
        </div>
        <div className="relative min-h-screen bg-[#fafaf5] ">
          {/* Background grid lines */}
          <div className="background-grid"></div>

          {/* Content */}
          <div className="max-w-8xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
            {/* Card 1 */}
            <div className="p-6 card shadow-md rounded-2xl ">
              <Image src="/icon-1.png" alt="icon" width={100} height={100} />

              <p className="text-gray-600">Empowering Creators. </p>
            </div>

            {/* Card 2 */}
            <div className="p-6  shadow-md rounded-2xl card">
              <Image src="/icon.svg" alt="icon" width={100} height={100} />
              <p className="text-gray-600">Transforming Publishing. </p>
            </div>

            {/* Card 3 */}
            <div className="p-6  shadow-md rounded-2xl card">
              <Image src="/icon-3.png" alt="icon" width={100} height={100} />
              <p className="text-gray-600">
                Reclaiming <br />
                Canadian Media.{" "}
              </p>
            </div>
          </div>

          {/* middle text */}
          <div className=" middle-text">
            Post Labs is rethinking how digital media works for Canadians. Our
            mission is simple: make journalism profitable, sustainable, and
            trusted – built for Canadians, by Canadians.
          </div>
          {/* middle text */}

          {/* video section */}
          <VideoSection />
          {/* video section */}

          <div className="flex justify-between items-end gap-x-10 gap-y-10 pt-[100px] pb-0 px-8 relative  ">
            {/* Left: Heading with gradient */}
            <div className="relative">
              <h1 className="text-[20vh]  leading-tight relative z-10">
                What We’re
              </h1>
              <h1 className="text-[20vh]  leading-tight relative z-10 mt-[-32px]">
                Building
              </h1>
            </div>
          </div>
            <section className="relative w-full bg-[#f9f9f5] py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image 
          src="/icon-4.svg"  
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black max-w-xl mx-[93]">
            Post Labs is building a homegrown platform designed 
            for Canadians and the future of Canadian media.
          </p>
        </div>
      </div>
            </section>
            <section className="relative w-full bg-[#f9f9f5] py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image
          src="/image-5.png"   // replace with your image path
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black max-w-xl mx-[93]">
            At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.


          </p>
        </div>
      </div>
            </section>
            <section className="relative w-full bg-[#f9f9f5] py-[30vh] px-6 md:px-20">
      <div className="relative flex items-center justify-center md:justify-start">
        
        {/* Background Icon/Image */}
        <Image 
          src="/image-6.png"   // replace with your image path
          alt="Background Icon"
          className=" opacity-71 icon" width={100} height={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black max-w-xl mx-[93]">
           Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home.


          </p>
        </div>
      </div>
            </section>

{/* second video */}
<VideoSectionSecond/>
{/* second video */}
{/* investor */}
  <section className="grid bg-gradient-to-t from-yellow-300 to-white grid-cols-1 md:grid-cols-2 min-h-screen border-t border-gray-200">
      {/* Left Side - Investors */}
      <div className="flex flex-col justify-center px-10 py-20 bg-white border-r border-gray-200">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">For Investors</h2>
        <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
          We’re raising capital to scale fast. If you’re an investor who believes in 
          the future of independent Canadian media, we’d love to speak with you.
        </p>
        <a
          href="mailto:invest@postlabs.com"
          className="text-black underline font-medium"
        >
          invest@postlabs.com
        </a>
      </div>

      {/* Right Side - Builders */}
      <div className="flex flex-col justify-center px-10 py-20  mt-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">For Builders</h2>
        <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
          We’re hiring. If you’re passionate about media, technology, and the 
          future of Canada’s digital ecosystem, come build with us. We’re always 
          looking for great people. Check out our jobs page for current opportunities.
        </p>
        <a
          href="mailto:careers@postlabs.com"
          className="text-black underline font-medium"
        >
          careers@postlabs.com
        </a>
      </div>
    </section>
{/* investor  */}
        </div>
      </div>
      <Footer/>
    </>
  );
}
