import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 bg-transparent text-white z-50">
      <div className="flex items-center justify-between px-6 md:px-[100px] py-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Leslie Martinich Logo"
            className="h-10 w-10"
          />
          <div className="uppercase leading-tight">
            <p className="text-sm font-semibold">Leslie Martinich</p>
            <p className="text-[9px] tracking-wide">Leading Brilliant People</p>
          </div>
        </div>

        <div className="md:flex hidden items-center gap-8 text-sm">
          <a href="#" className="hover:text-teal-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            About
          </a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-teal-400 transition">
            <a href="#">Programs</a>
            <ChevronDown size={16} />
          </div>
          <a href="#" className="hover:text-teal-400 transition">
            Success Stories
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Resources
          </a>
        </div>

        <button className="bg-[#2daeac] md:block hidden text-white rounded-full px-5 py-2 font-medium hover:bg-[#249b99] transition">
          Book a Session
        </button>

        <div
          className="md:hidden block"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-teal-400">
            Home
          </a>
          <a href="#" className="block hover:text-teal-400">
            About
          </a>
          <div className="flex items-center gap-1 hover:text-teal-400">
            <a href="#">Programs</a>
            <ChevronDown size={16} />
          </div>
          <a href="#" className="block hover:text-teal-400">
            Success Stories
          </a>
          <a href="#" className="block hover:text-teal-400">
            Resources
          </a>
          <button className="w-full bg-[#2daeac] text-white rounded-full px-5 py-2 font-medium hover:bg-[#249b99] transition">
            Book a Session
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
