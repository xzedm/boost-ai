import { GithubIcon, Twitch, TwitterIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 lg:gap-20 items-start justify-start sm:justify-center py-10 sm:py-14 border-b border-zinc-800">
        {/* Brand */}
        <div className="flex flex-col items-start gap-4">
          <p className="text-xl">
            BOOST<span className="font-bold">AI</span>
          </p>
          <p className="text-sm text-gray-400 max-w-[200px]">
            Intelligent automation for faster, smarter work.
          </p>
          <button className="border rounded-3xl py-2.5 px-5 text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer">
            Try for Free
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-start gap-2 text-sm text-gray-400">
          <p className="text-white font-medium mb-1">Navigation</p>
          {["Home", "Benefits", "Feedback", "Contacts"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="text-white font-medium mb-1">Contact</p>
          <a
            href="mailto:support@boostai.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            support@boostai.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-8 text-sm text-gray-400">
        <p>&copy; 2026 BOOSTAI, Inc.</p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitch"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            <Twitch size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-400 transition-colors duration-200"
          >
            <TwitterIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
