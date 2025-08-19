import Image from "next/image";

export default function Home() {
  return (
    <>
  <header className="w-full">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Help shape the future of digital journalism — we're hiring!
      </div>

      {/* Main Header Section */}
      <div className="bg-[#f8f8f2] px-6 md:px-16 py-7 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        
        {/* Left Logo Section */}
        <div className="flex items-center space-x-2">
<Image src="/logo.svg" alt="PostLabs Logo" width={150} height={100} />

          </div>

        {/* Right Description Section */}
        <div className="text-right text-gray-800 font-medium max-w-[395px]">
          We’re building the backbone of Canadian digital media —
          a next-gen platform that gives creators the tools to thrive.
        </div>
      </div>
    </header>
    </>
  );}

