"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager @ Vercel",
    avatar: "",
    initials: "SM",
    feedback:
      "BoostAI completely changed how our team handles repetitive workflows. We saved over 12 hours a week in the first month alone. The automation is seamless.",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "CTO @ Luma Labs",
    avatar: "",
    initials: "JO",
    feedback:
      "The real-time insights dashboard is genuinely impressive. I've tried a dozen AI tools and nothing comes close to how actionable BoostAI's recommendations are.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Founder @ Stackbloom",
    avatar: "",
    initials: "PN",
    feedback:
      "Integration took under 10 minutes. It just works with everything we already use. The enterprise security features gave our compliance team peace of mind.",
    stars: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "Lead Engineer @ Drifted",
    avatar: "",
    initials: "LF",
    feedback:
      "I was skeptical at first but the productivity gains are real. Our sprint velocity went up 30% after integrating BoostAI into our dev pipeline.",
    stars: 4,
  },
  {
    name: "Emma Thornton",
    role: "Head of Ops @ Finova",
    avatar: "",
    initials: "ET",
    feedback:
      "Finally an AI platform that doesn't require a PhD to set up. Intuitive, fast, and our whole team was onboarded in a single afternoon.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Growth Lead @ Orbit",
    avatar: "",
    initials: "DC",
    feedback:
      "BoostAI's insights helped us identify a funnel drop-off we'd been missing for months. Paid for itself in the first week after we fixed it.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-indigo-400 text-indigo-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}

export default function FeedbackSection() {
  const autoplay = Autoplay({ delay: 3500, stopOnInteraction: true });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 sm:py-18 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance leading-tight">
            Loved by teams worldwide
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Here's what people are saying after switching to BoostAI.
          </p>
        </div>

      </div>

      {/* Carousel — full width with px padding so edge cards have breathing room */}
      <div
        className="overflow-hidden px-4 sm:px-6 lg:px-8"
        ref={emblaRef}
      >
        {/* gap is handled via margin-right on each slide */}
        <div className="flex">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-none w-[85vw] sm:w-[46vw] lg:w-[31vw] xl:w-[29vw] mr-4 sm:mr-5 lg:mr-6"
            >
              <div className="h-full flex flex-col justify-between gap-5 bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-indigo-500/40 transition-colors duration-300">

                {/* Stars */}
                <StarRating count={t.stars} />

                {/* Quote */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                  "{t.feedback}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                  <Avatar className="size-9 sm:size-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-indigo-600 text-white text-xs font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center size-9 rounded-full border border-zinc-700 text-gray-400 hover:border-indigo-500 hover:text-white transition-colors duration-200"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center size-9 rounded-full border border-zinc-700 text-gray-400 hover:border-indigo-500 hover:text-white transition-colors duration-200"
          aria-label="Next"
        >
          ›
        </button>
      </div>

    </section>
  );
}