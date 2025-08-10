import React from "react";

function ComingSoon() {
  return (
    <div className="mt-32 w-full flex flex-col items-center justify-center gap-12 px-4">
      <div className="relative w-full">
        <h2 className="text-4xl sm:text-6xl md:text-8xl uppercase w-full text-center p-2 text-teal-600 opacity-20 leading-relaxed tracking-widest">
          Coming Soon
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 -top-30 sm:-top-12 w-32 h-48 sm:w-40 sm:h-60 bg-teal-400 shadow-lg rounded-2xl -rotate-5 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full p-4 text-center uppercase font-bold text-red-700">
            <p className="text-xl sm:text-3xl tracking-wide leading-relaxed w-full border-t-2 pt-3">
              Harpo
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base">and his</p>
            <p className="my-1 sm:my-2 text-sm sm:text-base">Performing</p>
            <p className="text-xl sm:text-3xl tracking-wide leading-relaxed w-full border-b-2 pb-3">
              Team
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 max-w-2xl px-2">
        <div className="uppercase flex flex-wrap gap-2 font-bold text-2xl sm:text-3xl md:text-4xl text-center">
          <p className="text-gray-400">Meet</p>
          <p>harpo..</p>
        </div>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          A book-in-progress about building high-performing teams through trust,
          empathy & emotional intelligence
        </p>
        <button className="mt-4 bg-teal-500 text-black rounded-full py-2 px-6 sm:px-8 font-medium hover:bg-teal-600 transition text-sm sm:text-base">
          Notify me when it is out
        </button>
      </div>
    </div>
  );
}

export default ComingSoon;
