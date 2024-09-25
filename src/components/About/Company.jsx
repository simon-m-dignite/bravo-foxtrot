import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cards } from "../../constants/CompanyOnboardingSteps";
import { useScroll, useTransform } from "framer-motion";

const Company = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  // Create individual refs for each element to track their visibility
  const [headingRef, headingInView] = useInView({ triggerOnce: true });

  return (
    <section className="w-full py-12 bg-black text-white horizontal-padding">
      <h2
        ref={headingRef}
        style={{
          transform: headingInView ? "none" : "translateY(70px)",
          opacity: headingInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="section-heading red-text text-center mb-10 lg:mb-16"
      >
        Company History
      </h2>

      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-20">
        {cards.map((card, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
          });

          return (
            <div
              className="flex flex-col items-start gap-4 py-6"
              key={index}
              ref={ref}
              style={{
                transform: inView ? "none" : "translateY(50px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.7s ease-in-out",
              }}
            >
              <h3 className="red-text text-3xl font-bold quantico-fonts">
                {card.title}
              </h3>
              <p className="text-base">{card.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Company;
