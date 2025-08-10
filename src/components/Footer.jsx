import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaQuoteRight,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-[#001D1B] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="Leslie Martinich Logo"
                className="h-10"
              />
              <div>
                <h1 className="text-lg font-semibold">LESLIE MARTINICH</h1>
                <p className="text-sm text-gray-300">
                  LEADING BRILLIANT PEOPLE
                </p>
              </div>
            </div>

            <p className="italic text-teal-400 flex items-start gap-2">
              Where Leaders Learn to Lead With Heart.
              <FaQuoteRight className="text-teal-400 mt-1" />
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full border border-gray-500 hover:border-teal-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-500 hover:border-teal-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-500 hover:border-teal-400 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-teal-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Leslie",
                "Workshops",
                "Speaking",
                "Professional Development",
                "Testimonials",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-teal-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-teal-400 font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-teal-400" />{" "}
                leslie@lesliemartinich.com
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-teal-400" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineLocationMarker className="text-teal-400" /> San
                Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Leslie Martinich. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
