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
        <div className="p-3 h-full  ">
          <div className="w-full h-70 rounded-3xl border overflow-hidden">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="p-2 font-bold">Seth Morris</p>
          <p className="p-2 -mt-2 text-sm">
            VP, Economic Development Greater Waco Chamber
          </p>
        </div>
        <div className="p-3 h-full  ">
          <div className="w-full h-70 rounded-3xl border overflow-hidden">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="p-2 font-bold">Isha Desai</p>
          <p className="p-2 -mt-2 text-sm">Security Technical Specialist IBM</p>
        </div>
        <div className="p-3 h-full  ">
          <div className="w-full h-70 rounded-3xl border overflow-hidden">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="p-2 font-bold">Andrew Bluiett P.E.</p>
          <p className="p-2 -mt-2 text-sm">
            Senior Engineer, Lower Colorado River Authority
          </p>
        </div>
      </div>
    </section>
  );
}

export default InTheirOwnWords;
