import { ArrowRight } from "lucide-react";
import React from "react";

function HowLeslieHelp() {
  return (
    <section className="flex flex-col gap-10 px-6 sm:px-12 lg:px-32 mt-20">
      <div className="flex flex-col gap-3 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          <span className="text-gray-400">How</span> Leslie Helps Leaders Lead
          Better
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto lg:mx-0">
          Whether you're transforming company culture, upskilling engineers, or
          seeking your own clarity — Leslie brings wisdom, energy, and results.
          Choose what works for you.
        </p>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 border p-4 rounded-2xl shadow-sm hover:shadow-lg transition">
          <div className="w-full h-48 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Keynote Speaking"
            />
          </div>
          <p className="font-bold text-lg">Keynote Speaking</p>
          <p className="text-gray-700">Transform the Room With Every Word</p>
          <p className="text-gray-600">
            Bold, story-rich sessions tailored for your audience — delivered
            with depth & wit.
          </p>
          <p className="text-teal-500 flex items-center gap-2 underline cursor-pointer">
            Learn More <ArrowRight size={18} />
          </p>
        </div>

        <div className="flex flex-col gap-2 border p-4 rounded-2xl shadow-sm hover:shadow-lg transition">
          <div className="w-full h-48 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Executive Coaching"
            />
          </div>
          <p className="font-bold text-lg">Executive Coaching</p>
          <p className="text-gray-700">
            Lead Boldly. Speak Clearly. Show Up Fully
          </p>
          <p className="text-gray-600">
            Hands-on, human-centered learning to shift mindsets and upskill
            technical teams.
          </p>
          <p className="text-teal-500 flex items-center gap-2 underline cursor-pointer">
            Learn More <ArrowRight size={18} />
          </p>
        </div>

        <div className="flex flex-col gap-2 border p-4 rounded-2xl shadow-sm hover:shadow-lg transition">
          <div className="w-full h-48 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/leslie2.jpg"
              alt="Deep-Dive Workshops"
            />
          </div>
          <p className="font-bold text-lg">Deep-Dive Workshops</p>
          <p className="text-gray-700">Go beyond surface solutions.</p>
          <p className="text-gray-600">
            Hands-on, human-centered learning to shift mindsets and upskill
            technical teams.
          </p>
          <p className="text-teal-500 flex items-center gap-2 underline cursor-pointer">
            Learn More <ArrowRight size={18} />
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="mt-4 flex gap-3 items-center text-sm sm:text-base bg-teal-500 text-black rounded-full py-3 px-6 font-medium hover:bg-teal-600 transition">
          Start Your Leadership Journey With Leslie
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default HowLeslieHelp;
