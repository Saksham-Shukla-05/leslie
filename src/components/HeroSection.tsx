import React from "react";

function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-bottom bg-no-repeat
                 md:bg-[url('/desktop.png')] bg-[url('/mobile.png')]"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative pt-[251px] pl-[10px]  z-10 flex flex-col items-center gap-0 justify-center h-full text-center text-white">
        <button className="bg-black/60 px-5 py-1  rounded-full text-xs tracking-wide mb-6 border border-gray-500">
          → FOR TECH_DRIVEN LEADERS
        </button>

        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          Lead <em className="italic font-semibold">Smarter</em>. Build{" "}
          <em className="italic font-semibold">Trust</em>.<br />
          Spark <em className="italic font-semibold">Innovation</em>.
        </h1>

        <p className="max-w-2xl text-sm md:text-base mb-8">
          From Fortune 100s to startups, Leslie Martinich brings technical minds
          the human tools they need to lead with clarity, connection, and
          courage.
        </p>

        <button className="bg-teal-400 text-sm text-black px-6 py-3 rounded-full font-semibold hover:bg-teal-300 transition">
          Still Losing Great People? Let’s Fix That. →
        </button>

        <p className="mt-4 text-xs opacity-80">
          You can’t scale if trust doesn’t.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
