import { ArrowRight } from "lucide-react";
import React from "react";

function BigMoment() {
  return (
    <section className="px-6 sm:px-12 lg:px-32 flex flex-col md:mt-5 mt-20 gap-9 items-center justify-between">
      <div className="flex flex-col items-center justify-between gap-4 text-center">
        <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          <span className="text-gray-400">See the Moment </span>
          Tech Teams Begin to Shift
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          This isn't theory. It's real transformation as it happens.
        </p>
      </div>

      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-lg">
        <img
          className="w-full h-auto object-cover"
          src="/leslie2.jpg"
          alt="Leslie coaching a tech team"
        />
      </div>

      <button className="mt-4 flex flex-wrap justify-center gap-3 items-center text-sm sm:text-base bg-teal-500 text-black rounded-full py-2 px-6 sm:px-8 font-medium hover:bg-teal-600 transition">
        Want this for your team as well? Let’s talk
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

export default BigMoment;
