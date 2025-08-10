import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

function OtherSays() {
  return (
    <section className="flex flex-col lg:flex-row p-6 sm:p-12 lg:p-32 gap-10 items-center lg:items-start ">
      <div className="flex flex-1 flex-col gap-5 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl -mt-1">
          What Others Say...
        </h2>
        <p className="max-w-md text-gray-600 mx-auto lg:mx-0">
          From executive leaders to aspiring engineers, Leslie's presence
          changes people not just professionally, but personally.
        </p>
      </div>

      <div className="hidden lg:block text-teal-500 text-3xl self-start">
        <FaQuoteLeft />
      </div>

      <div className="flex flex-1 flex-col gap-5 items-center lg:items-end">
        <p className="text-center lg:text-right text-base italic text-gray-800">
          Leslie helped our engineers find their voice — and our culture finally
          found its soul.
        </p>

        <div className="flex flex-col sm:flex-row  items-center gap-4 sm:gap-6">
          <div className="flex  items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="/leslie.jpg"
              alt="Client"
            />
            <div className="flex flex-col text-sm text-gray-700">
              <p className="font-semibold">Susan Hilr</p>
              <p className="text-gray-500">CTO, Executive Coaching Client</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="border rounded-full p-1 bg-white hover:bg-gray-100 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="border rounded-full p-1 bg-teal-900 text-white hover:bg-teal-800 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherSays;
