import { GithubIcon, Twitch, TwitterIcon } from "lucide-react";
import React from "react";
import { FadeUp, StaggerChildren } from "./Animations";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top section */}
      <FadeUp duration={0.6}>
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16 lg:gap-20 items-start justify-start sm:justify-center py-10 sm:py-14 border-b border-zinc-800">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl" aria-label="BoostAI">
              BOOST<span className="font-bold">AI</span>
            </p>
            <p className="text-sm text-gray-400 max-w-50">
              Intelligent automation for faster, smarter work.
            </p>
            <button className="border rounded-3xl py-2.5 px-5 text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              Try for Free
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-white font-medium mb-3 text-sm">Navigation</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              {["Home", "Benefits", "Feedback", "Contacts"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic flex flex-col items-start gap-2 text-sm">
            <p className="text-white font-medium mb-1">Contact</p>
            <a
              href="mailto:support@boostai.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              support@boostai.com
            </a>
          </address>
        </div>
      </FadeUp>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-8 text-sm text-gray-400">
        <p>
          <small>&copy; 2026 BOOSTAI, Inc. All rights reserved.</small>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="BoostAI on GitHub"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#"
            aria-label="BoostAI on Twitch"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            <Twitch size={18} />
          </a>
          <a
            href="#"
            aria-label="BoostAI on Twitter"
            rel="noopener noreferrer"
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
