import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

function BigMoment() {
  return (
    <section className="px-32  flex flex-col mt-5 gap-9 items-center justify-between">
      <div className="flex flex-col items-center justify-between gap-5">
        <h2 className="max-w-2xl text-5xl text-center">
          <span className="text-gray-400">See the Moment</span>
          Tech teams Begin to Shift
        </h2>
        <p>This isn't theory. It's real transformation as it happens.</p>
      </div>
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <img className="w-full h-full" src="/leslie2.jpg" alt="" />
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

export default BigMoment;
