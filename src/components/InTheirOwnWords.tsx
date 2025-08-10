import { ArrowRight } from "lucide-react";
import React from "react";

function InTheirOwnWords() {
  return (
    <section className="px-32  flex flex-col mt-32 gap-9 items-center justify-between">
      <div className="flex flex-col items-center justify-between gap-5">
        <h2 className=" text-5xl text-center">In Their Own Words</h2>
        <p className="max-w-2xl text-center">
          Watch real leaders share how Leslie helped transform communication,
          culture, and confidence in their teams.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="p-3 h-full overflow-hidden">
          <div className="w-full h-70">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="font-bold">Seth Morris</p>
          <p className="text-sm">
            VP, Economic Development Greater Waco Chamber
          </p>
        </div>
        <div className="p-3 h-full overflow-hidden">
          <div className="w-full h-70">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="font-bold">Isha Desai</p>
          <p className="text-sm">Security Technical Specialist IBM</p>
        </div>
        <div className="p-3 h-full overflow-hidden">
          <div className="w-full h-70">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="font-bold">Andrew Bluiett P.E.</p>
          <p className="text-sm">
            Senior Engineer, Lower Colorado River Authority
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-4 items-center text-sm bg-teal-500 text-black rounded-full py-2 px-8 font-medium hover:bg-teal-600 transition">
        <button className="">
          Want this for your team as well ? Let's talk{" "}
        </button>
        <ArrowRight />
      </div>
    </section>
  );
}

export default InTheirOwnWords;
