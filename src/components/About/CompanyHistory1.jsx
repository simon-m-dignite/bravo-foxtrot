import { useInView, useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { cards } from "../../constants/CompanyOnboardingSteps";

const CompanyHistory1 = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:pb-20 relative flex flex-col lg:flex-row">
      <div className="flex flex-col items-start gap-y-6 lg:pl-16 xl:pl-28 lg:w-[60%] z-10 min-h-screen relative px-4">
        <motion.div
          className="absolute w-full h-[120%] -z-10"
          style={{ top: y }}
        ></motion.div>
        <div
          className="flex items-center justify-center gap-3"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span className="red-text uppercase quantico-fonts">
            Company History
          </span>
        </div>

        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start gap-4 mb-2 lg:mb-8"
            >
              <h3
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="font-normal red-text section-heading"
              >
                {card.title}
              </h3>
              <p
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="text-size"
              >
                {card.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="static lg:sticky top-10 right-0 z-0 w-full h-[50vh] lg:h-screen lg:w-4/5">
        <img
          src="/product-image.jpg"
          alt=""
          className="w-full h-full object-cover"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/50 z-10" />
      </div>
    </section>
  );
};

export default CompanyHistory1;
