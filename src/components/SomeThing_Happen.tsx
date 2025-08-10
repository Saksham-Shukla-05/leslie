import {
  BookCheck,
  Brain,
  Handshake,
  Magnet,
  MessageCircleMore,
  TreeDeciduous,
} from "lucide-react";
import React from "react";

function SomeThing_Happen() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 p-32 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        <div className="mb-16 flex flex-col items-center justify-center gap-3  ">
          <h1 className="text-3xl md:text-4xl max-w-xl text-center font-bold mb-6">
            Let's Make Something Happen For Real, This Time.
          </h1>
          <p className="text-sm -mt-5">
            {" "}
            You've done leadership. Let's do what's next.
          </p>
          <p className="text-base text-center     text-gray-600 max-w-3xl   ">
            Whether it's a keynote, coaching, or something more custom-Leslie
            helps tech leaders go from functional to influential, from managing
            to moving people.
          </p>
        </div>

        <div className="flex w-full justify-between gap-7">
          <div className="flex flex-col flex-1 gap-3 border bg-[#ebece9] items-center justify-center p-5 rounded-2xl">
            <p>
              <Brain color="teal" />
            </p>
            <p className="font-bold text-center">
              Get clarity where there's confusion - in your team. your goals, or
              yourself.
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-3 border bg-[#ebece9] items-center justify-center p-5 rounded-2xl">
            <p>
              <MessageCircleMore color="teal" />
            </p>
            <p className="font-bold text-center">
              Speak with purpose and influence without force.
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-3 border bg-[#ebece9] items-center justify-center p-5 rounded-2xl">
            <p>
              <TreeDeciduous color="teal" />
            </p>
            <p className="font-bold text-center">
              Grow the kind of culture that inspires loyalty, not just
              performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-10 items-center justify-center gap-5 ">
          <div>
            A quick, no-pressure conversation to understand what's possible for
            you, your team, or your audience.
          </div>
          <div>
            <button className="border  rounded-full px-5 py-2 bg-teal-400 border-none">
              Start Your Leadership Journey With Leslie →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SomeThing_Happen;
