import {
  ArrowPathIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { FadeUp, StaggerChildren, WordReveal } from "./Animations";

const features = [
  {
    name: "Smart Automation",
    description:
      "Automate repetitive tasks and save valuable time with intelligent AI-powered workflows designed to boost productivity.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Real-Time Insights",
    description:
      "Gain powerful data-driven insights and actionable recommendations to make smarter business decisions.",
    icon: ChartBarIcon,
  },
  {
    name: "Seamless Integration",
    description:
      "Easily connect Boost AI with your existing tools and systems for a smooth and efficient workflow.",
    icon: ArrowPathIcon,
  },
  {
    name: "Enterprise-Level Security",
    description:
      "Your data is protected with advanced encryption and secure infrastructure built for reliability and trust.",
    icon: ShieldCheckIcon,
  },
];

export default function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="py-16 sm:py-24 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div id="benefits-heading">
            <WordReveal
              text="Powerful AI tools to accelerate your growth"
              as="h2"
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance leading-tight"
              staggerDelay={0.04}
            />
          </div>
          <FadeUp delay={0.2} duration={0.6}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              Boost AI helps you automate workflows, gain real-time insights,
              and scale faster with intelligent solutions built for modern
              teams.
            </p>
          </FadeUp>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-4xl">
          <StaggerChildren
            className="grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:grid-cols-2 lg:gap-y-16"
            staggerDelay={0.13}
            initialDelay={0.05}
          >
            {features.map((feature) => (
              <article key={feature.name} className="relative pl-14 sm:pl-16">
                <dt className="text-sm sm:text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-9 sm:size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 sm:size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </dd>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
