"use client";

import { GithubIcon, Menu, Twitch, TwitterIcon, X } from "lucide-react";
import React, { useState } from "react";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Benefits", "Feedback", "Contact"];

  return (
    <nav className="relative z-50 text-white">
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <p className="text-2xl cursor-pointer tracking-wide select-none">
          BOOST<span className="font-bold">AI</span>
        </p>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-md text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitch"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            <Twitch size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-400 transition-colors duration-200"
          >
            <TwitterIcon size={20} />
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── sits OUTSIDE the flex row so it drops below ── */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-2xl px-4 sm:px-6 lg:px-8 pt-4 pb-6 flex flex-col gap-4 max-w-7xl mx-auto w-full">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white transition-colors duration-200 tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          {/* Mobile social icons */}
          <div className="flex items-center gap-5 pt-3 mt-1 border-t border-zinc-800 text-white">
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition-colors duration-200"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitch"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <Twitch size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
