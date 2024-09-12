import React, { useRef } from "react";
import IndustryCard from "./IndustryCard";
import { INDUSTRIES_SERVED } from "../../constants/IndustriesServed";
import { useInView, useScroll, useTransform, motion } from "framer-motion";

const IndustriesList = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-black text-white horizontal-padding relative overflow-hidden">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div
        ref={ref}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20 py-10 lg:py-16"
      >
        <div>
          <span
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-size red-text quantico-fonts"
          >
            Industries
          </span>
          <h1
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="section-heading mt-3"
          >
            Tailored Brand Solutions
          </h1>
        </div>
        <div className="flex items-end">
          <p
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-size secondary-text"
          >
            Bravo Foxtrot LLC is dedicated to delivering specialized solutions
            that cater to the unique needs of our diverse client base, ensuring
            safety, security, and operational excellence.
          </p>
        </div>
      </div>
      <div className="w-full mt-10 pb-20 flex flex-col gap-5">
        {INDUSTRIES_SERVED.map((industry, index) => {
          return (
            <IndustryCard
              title={industry.title}
              text={industry.text}
              image={industry.image_src}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesList;
