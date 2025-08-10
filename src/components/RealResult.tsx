import {
  BookCheck,
  Flower,
  Handshake,
  Magnet,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function RealResult() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 p-32 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        {/* Heading section */}
        <div className="mb-16 flex flex-col items-end justify-center  ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results. <span className="text-gray-400">Human Impact.</span>
          </h1>
          <p className="text-xl text-right     text-gray-600 max-w-3xl  mb-10">
            When leadership becomes more human, teams perform better. Here's
            what clients experience after working with Leslie{" "}
            <FaArrowRight className="inline-block ml-1 text-teal-500" />
          </p>
        </div>

        <div className="flex w-full justify-between gap-7">
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-3 rounded-2xl">
            <p>
              <Handshake color="teal" />
            </p>
            <p className="font-bold">Teams That Actually Collaborate</p>
            <p>
              People stopped working next to each other & started working with
              each other.
            </p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-3 rounded-2xl">
            <p>
              <Magnet color="teal" />
            </p>
            <p className="font-bold">People Stay. Teams Grow.</p>
            <p>Turnover dropped. Loyalty grew. Culture became magnetic.</p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-3 rounded-2xl">
            <p>
              <BookCheck color="teal" />
            </p>
            <p className="font-bold">Trust Became the Foundation</p>
            <p>People spoke up Teams opened up. Performance followed</p>
          </div>
        </div>

        <div className="flex w-full justify-between gap-7">
          <div className="flex flex-col flex-1 gap-3 border bg-[#ebece9] p-3 rounded-2xl">
            <p>
              <Flower color="teal" />
            </p>
            <p className="font-bold">Clarity in the Chaos</p>
            <p>Even in messy change, leaders stood steady-& led boldly.</p>
          </div>
          <div className="flex flex-col flex-1 gap-3 border bg-[#ebece9] p-3 rounded-2xl">
            <p>
              <MessageCircle color="teal" />
            </p>
            <p className="font-bold">Engineers Who Lead With Words</p>
            <p>Tech teams learned empathy, clarity, & the power of words</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealResult;
