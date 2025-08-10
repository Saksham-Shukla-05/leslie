import { ArrowRight, Diamond } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";

function Intro() {
  return (
    <section className="px-4 sm:px-12 lg:px-32 mt-20 lg:mt-32 w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-12 lg:gap-0">
      <div className="flex-1 p-4 sm:p-6 gap-2 flex flex-col justify-center text-center lg:text-left">
        <div>
          <p className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-semibold">
            Meet Leslie
          </p>
          <p className="text-sm sm:text-base">
            The leadership coach redefining how IT
          </p>
          <p className="text-sm sm:text-base">leaders lead humanely</p>
        </div>

        <div className="px-2 flex flex-col gap-3 mt-4">
          <div className="flex gap-3 sm:gap-4 items-start sm:items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm sm:text-base">
              Engineer, Keynote Speaker, Mentor to 500+ tech teams across 3
              continents
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 items-start sm:items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm sm:text-base">
              Trusted by Dell, Emerson & more
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 items-start sm:items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm sm:text-base">
              Built trust-based leadership models for modern teams
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-start sm:items-center text-xs sm:text-sm mt-4 justify-center lg:justify-start">
          <FaQuoteLeft size={12} />
          <p>I help people become more human leaders - not just better ones</p>
        </div>

        <button className="mt-4 flex flex-wrap gap-2 sm:gap-4 items-center justify-center lg:justify-start text-sm sm:text-base bg-teal-500 text-black rounded-full py-2 px-6 sm:px-8 font-medium hover:bg-teal-600 transition">
          Let's Chat - Book Your Free 20-Min Call
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-0 items-center justify-center">
        <div className="rounded-3xl border overflow-hidden w-48 sm:w-64 lg:w-72">
          <img
            src="/leslie.jpg"
            alt="Leslie"
            className="w-full h-full object-cover"
          />
        </div>
        <img src="/30EXp.png" className="-mt-3 w-24 sm:w-32 lg:w-auto" alt="" />
      </div>
    </section>
  );
}

export default Intro;
