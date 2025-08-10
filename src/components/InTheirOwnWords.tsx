import { ArrowRight } from "lucide-react";
import React from "react";

function InTheirOwnWords() {
  return (
    <section className="px-6 sm:px-12 lg:px-32 flex flex-col mt-20 lg:mt-32 gap-9 items-center">
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          In Their Own Words
        </h2>
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base">
          Watch real leaders share how Leslie helped transform communication,
          culture, and confidence in their teams.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="p-3 rounded-2xl shadow-sm hover:shadow-lg transition bg-white">
          <div className="w-full h-60 rounded-3xl border overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Seth Morris"
            />
          </div>
          <p className="p-2 font-bold">Seth Morris</p>
          <p className="px-2 -mt-2 text-sm text-gray-600">
            VP, Economic Development Greater Waco Chamber
          </p>
        </div>

        <div className="p-3 rounded-2xl shadow-sm hover:shadow-lg transition bg-white">
          <div className="w-full h-60 rounded-3xl border overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Isha Desai"
            />
          </div>
          <p className="p-2 font-bold">Isha Desai</p>
          <p className="px-2 -mt-2 text-sm text-gray-600">
            Security Technical Specialist IBM
          </p>
        </div>

        <div className="p-3 rounded-2xl shadow-sm hover:shadow-lg transition bg-white">
          <div className="w-full h-60 rounded-3xl border overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Andrew Bluiett"
            />
          </div>
          <p className="p-2 font-bold">Andrew Bluiett P.E.</p>
          <p className="px-2 -mt-2 text-sm text-gray-600">
            Senior Engineer, Lower Colorado River Authority
          </p>
        </div>
      </div>
    </section>
  );
}

export default InTheirOwnWords;
