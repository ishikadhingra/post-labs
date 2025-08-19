import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative z-1">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Logo */}
        <div>
          <Image
              src="/logo-white.svg"
              alt="PostLabs Logo"
              width={150}
              height={100}
            />
        </div>

        {/* Links */}
        <div className="space-y-3">
          <ul className="space-y-2">
            <li>
             <Link href={"#"}  className="underline hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href={"#"}  className="underline hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link href={"#"} className="underline hover:text-gray-300">Privacy Policy</Link>
            </li>
            <li>
            <Link href={"#"}  className="underline hover:text-gray-300">Cookie Policy</Link>
            </li>
          </ul>
           <div>
          <h3 className="text-lg mb-4">Sign Up for Our Newsletter</h3>
          <form className="flex flex-col space-y-3">
            <div className="border-b border-gray-600 flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-black w-full p-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="text-xl hover:text-gray-300"
              >
                →
              </button>
            </div>
          </form>
        </div>
        </div>

        {/* Newsletter */}
       
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white-800 py-6 text-sm text-white-200 flex justify-between items-center px-5  max-w-[100%] mx-auto">
        <p>© 2025 Post Labs, Inc. All rights reserved.</p>
        <a href="#" className="underline hover:text-gray-200">
          Designed by HRVST.
        </a>
      </div>
    </footer>
    
  );
}
