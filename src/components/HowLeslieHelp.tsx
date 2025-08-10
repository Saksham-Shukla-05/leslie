import { ArrowRight } from "lucide-react";
import React from "react";

function HowLeslieHelp() {
  return (
    <section className="flex flex-col gap-10 px-32 mt-20">
      <div className="flex flex-col gap-3">
        <h2 className="text-5xl">
          <span className="text-gray-400">How</span> Leslie helps Leaders Lead
          Better
        </h2>
        <p className="text-base">
          Whether you're transforming company culture, upskilling engineers, or
          seeking your own clarity -Leslie brings wisdom, energy, and results.
          Choose what works for you.
        </p>
      </div>
      <div className="flex  gap-3">
        <div className="flex flex-col gap-2 border p-3 rounded-2xl">
          <div className="w-full h-42 rounded-2xl overflow-hidden">
            <img className="w-full h-full" src="/leslie2.jpg" alt="" />
          </div>
          <p className="font-bold">Keynote Speaking</p>
          <p>Transform the Room With Every Word</p>
          <p>
            Bold, story-rich sessions tailored for your audience-delivered with
            depth & wit.
          </p>
          <p className="text-teal-500 flex items-end gap-3 underline">
            Learn More <ArrowRight size={20} />
          </p>
        </div>
        <div className="flex flex-col gap-2 border p-3 rounded-2xl">
          <div className="w-full h-42 rounded-2xl overflow-hidden">
            <img className="w-full h-full" src=" /leslie2.jpg" alt="" />
          </div>
          <p className="font-bold">Executive Coaching</p>
          <p>Lead Boldly. Speak Clearly. Show Up Fully</p>
          Hands-on, human-centered learning to shift mindsets and upskill
          technical teams
          <p className="text-teal-500 flex items-end gap-3 underline">
            Learn More <ArrowRight size={20} />
          </p>
        </div>
        <div className="flex flex-col gap-2 border p-3 rounded-2xl">
          <div className="w-full h-42 rounded-2xl overflow-hidden">
            <img className="w-full h-full" src=" /leslie2.jpg" alt="" />
          </div>
          <p className="font-bold"> Deep-Dive Workshops</p>
          <p>Go beyond surface solutions.</p>
          <p>
            Hands-on, human-centered learning to shift mindsets and upskill
            technical teams
          </p>
          <p className="text-teal-500 flex items-end gap-3 underline">
            Learn More <ArrowRight size={20} />
          </p>
        </div>
      </div>
      <div>
        <button className="mt-4 flex gap-4 items-center text-sm bg-teal-500 text-black rounded-full py-3 px-2 font-medium hover:bg-teal-600 transition">
          Start Your Leadership Journey With Leslie
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default HowLeslieHelp;
