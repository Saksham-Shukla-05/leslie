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
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-12 lg:px-32 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="mb-8 flex flex-col items-center lg:items-end text-center lg:text-right">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Results. <span className="text-gray-400">Human Impact.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mb-6">
            When leadership becomes more human, teams perform better. Here's
            what clients experience after working with Leslie{" "}
            <FaArrowRight className="inline-block ml-1 text-teal-500" />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-5 rounded-2xl">
            <Handshake color="teal" />
            <p className="font-bold">Teams That Actually Collaborate</p>
            <p>
              People stopped working next to each other & started working with
              each other.
            </p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-5 rounded-2xl">
            <Magnet color="teal" />
            <p className="font-bold">People Stay. Teams Grow.</p>
            <p>Turnover dropped. Loyalty grew. Culture became magnetic.</p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-5 rounded-2xl">
            <BookCheck color="teal" />
            <p className="font-bold">Trust Became the Foundation</p>
            <p>People spoke up. Teams opened up. Performance followed.</p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-5 rounded-2xl">
            <Flower color="teal" />
            <p className="font-bold">Clarity in the Chaos</p>
            <p>Even in messy change, leaders stood steady — & led boldly.</p>
          </div>
          <div className="flex flex-col gap-3 border bg-[#ebece9] p-5 rounded-2xl">
            <MessageCircle color="teal" />
            <p className="font-bold">Engineers Who Lead With Words</p>
            <p>Tech teams learned empathy, clarity, & the power of words.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealResult;
