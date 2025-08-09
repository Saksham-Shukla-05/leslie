function Navbar() {
  return (
    <nav className="w-full text-white fixed top-0 left-0 flex items-center justify-between px-[100px] py-[32px] bg-transparent z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 flex items-center justify-center">
          SVG
        </div>
        <div className="uppercase leading-tight">
          <p className="text-sm font-semibold">Leslie Martinich</p>
          <p className="text-[9px] tracking-wide">Leading Brilliant People</p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-sm">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Programs</a>
        <a href="#">Success Stories</a>
        <a href="#" className="hover:text-gray-300">
          Resources
        </a>
      </div>

      {/* Button */}
      <div>
        <button className="border border-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition">
          Book a Session
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
