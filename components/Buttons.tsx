"use client";

import React from "react";

const Buttons = () => {
  return (
    <>
      <style>{`
        @keyframes gradientSpin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-border-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(270deg, #6366f1, #a855f7, #ec4899, #f59e0b, #6366f1);
          background-size: 300% 300%;
          animation: gradientSpin 3s ease infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
        {/* Button 1 — animated gradient border */}
        <button className="gradient-border-btn relative cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base text-white font-medium bg-transparent hover:bg-white/5 transition-colors duration-300">
          Get Started
        </button>

        {/* Button 2 — solid white fill */}
        <button className="relative cursor-pointer px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base text-black font-semibold bg-white hover:bg-gray-300 transition-colors duration-200">
          Try for Free
        </button>
      </div>
    </>
  );
};

export default Buttons;
