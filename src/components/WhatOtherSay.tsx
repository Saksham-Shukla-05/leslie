import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function WhatOtherSay() {
  return (
    <section className="flex p-32">
      <div className="flex flex-1 flex-col gap-5">
        <h2 className="text-5xl -mt-3">What Other Says...</h2>
        <p className="max-w-5xs">
          From executive leaders to aspiring engineers, Leslie's presence
          changes people not just professionally, but personally.
        </p>
      </div>
      <FaQuoteLeft />
      <div className="flex flex-1 flex-col gap-5 items-center">
        <p className="text-right text-base">
          <i>
            Leslie helped our engineers find their voice - and our culture
            finally found its soul.
          </i>
        </p>
        <div>
          <div className="flex gap-3">
            <div>
              <img className="w-12 h-12 rounded-3xl" src="/leslie.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p>Susan Hilr,</p>
              <p>СТО Executive Coaching ClientTO</p>
            </div>
            <div className="flex  items-center gap-8">
              <p>
                <ChevronLeft
                  size={28}
                  className="border rounded-3xl bg-white"
                />
              </p>
              <p>
                <ChevronRight
                  size={28}
                  color="white"
                  className="border rounded-3xl bg-teal-900 "
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatOtherSay;
