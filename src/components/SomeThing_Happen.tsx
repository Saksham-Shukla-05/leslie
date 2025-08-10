import { Brain, MessageCircleMore, TreeDeciduous } from "lucide-react";
import React from "react";

function SomeThing_Happen() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6 sm:px-12 lg:px-32 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-bold max-w-xl">
            Let's Make Something Happen For Real, This Time.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 -mt-1">
            You've done leadership. Let's do what's next.
          </p>
          <p className="text-base text-gray-600 max-w-3xl">
            Whether it's a keynote, coaching, or something more custom — Leslie
            helps tech leaders go from functional to influential, from managing
            to moving people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-3 border bg-[#ebece9] p-5 rounded-2xl text-center">
            <Brain color="teal" size={32} />
            <p className="font-bold">
              Get clarity where there's confusion — in your team, your goals, or
              yourself.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 border bg-[#ebece9] p-5 rounded-2xl text-center">
            <MessageCircleMore color="teal" size={32} />
            <p className="font-bold">
              Speak with purpose and influence without force.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 border bg-[#ebece9] p-5 rounded-2xl text-center">
            <TreeDeciduous color="teal" size={32} />
            <p className="font-bold">
              Grow the kind of culture that inspires loyalty, not just
              performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8 text-center">
          <p className="max-w-lg">
            A quick, no-pressure conversation to understand what's possible for
            you, your team, or your audience.
          </p>
          <button className="rounded-full px-6 py-3 bg-teal-400 hover:bg-teal-500 text-black font-medium transition">
            Start Your Leadership Journey With Leslie →
          </button>
        </div>
      </div>
    </section>
  );
}

export default SomeThing_Happen;
