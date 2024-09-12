import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const CareersSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const [titleRef, titleInView] = useInView({ triggerOnce: true });
  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true });
  const [comingSoonRef, comingSoonInView] = useInView({ triggerOnce: true });

  return (
    <section
      ref={SectionRef}
      className="w-full horizontal-padding text-center py-12 lg:py-20 min-h-screen relative"
    >
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2
          ref={titleRef}
          style={{
            transform: titleInView ? "none" : "translateY(70px)",
            opacity: titleInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="section-heading red-text uppercase"
        >
          career opportunities
        </h2>

        <p
          ref={descriptionRef}
          className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
          style={{
            transform: descriptionInView ? "none" : "translateY(70px)",
            opacity: descriptionInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Get ready for something big! We’re gearing up for expansion and on the
          lookout for amazing people to join our marketing, sales, development,
          and support teams. Stay tuned for exciting updates on how you can be
          part of Bravo Foxtrot’s mission to revolutionize and elevate public
          safety!
        </p>
        <p
          ref={comingSoonRef}
          className="mt-20 section-heading quantico-fonts"
          style={{
            transform: comingSoonInView ? "none" : "translateY(70px)",
            opacity: comingSoonInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Coming Soon
        </p>
      </div>
    </section>
  );
};

export default CareersSection;
