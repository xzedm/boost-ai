import React from 'react'
import Buttons from './Buttons';
import Image from 'next/image';
import ShinyText from './ui/ShinyText';

const MainSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6 px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-24 lg:pb-20">
      {/* main text */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
        <ShinyText
          text="BoostAI — Supercharge Your Productivity with Intelligent Automation"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </h1>

      {/* secondary text */}
      <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg md:max-w-2xl leading-relaxed">
        Boost AI is a powerful AI-driven platform designed to help businesses
        and creators work smarter, faster, and more efficiently.
      </p>

      {/* buttons */}
      <Buttons />

      {/* image */}
      <div className="w-full mt-4 sm:mt-6 -mb-15 sm:-mb-25 lg:-mb-35">
        <Image
          src="/image.png"
          alt="BoostAI platform preview"
          width={1605}
          height={619}
          className="w-full h-auto rounded-xl opacity-90"
          priority
        />
      </div>
    </div>
  );
}

export default MainSection
