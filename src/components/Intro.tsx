import { ArrowRight, Diamond } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";

function Intro() {
  return (
    <section className="px-32 mt-32 w-full flex items-stretch justify-center ">
      {/* Left Column */}
      <div className="flex-1 p-6 gap-2   flex flex-col justify-center">
        <div>
          <p className="text-4xl mb-2">Meet Leslie</p>
          <p>The leadership coach redefining how IT</p>
          <p>leaders lead humanely</p>
        </div>

        <div className="px-2 flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm">
              Engineer, Keynote Speaker, Mentor to 500+ tech teams across 3
              continents
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm">Trusted by Dell, Emerson & more</p>
          </div>
          <div className="flex gap-4 items-center">
            <Diamond fill="#2daeac" color="#2daeac" size={16} />
            <p className="text-sm">
              Built trust-based leadership models for modern teams
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center text-sm mt-4">
          <FaQuoteLeft size={12} />
          <p>I help people become more human leaders - not just better ones</p>
        </div>

        <button className="mt-4 flex gap-4 items-center text-sm bg-teal-500 text-black rounded-full py-2 px-8 font-medium hover:bg-teal-600 transition">
          Let's Chat - Book Your Free 20-Min Call
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Right Column */}
      <div className="flex-1   flex-col flex gap-0 items-center justify-center">
        <div className="rounded-3xl border overflow-hidden w-72">
          <img
            src="/leslie.jpg"
            alt="Leslie"
            className="w-full h-full object-cover"
          />
        </div>
        <img src="/30EXp.png" className="-mt-3" alt="" />
      </div>
    </section>
  );
}

export default Intro;
