import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import VideoSection from "./VideoSection";

const CompanyHistory = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  // Create individual refs for each element
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <section className="w-full relative" ref={SectionRef}>
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <VideoSection />
        </div>
        <div className="flex flex-col items-start text-start justify-center gap-6 px-4 lg:px-12 xl:px-16 relative">
          <h3
            ref={ref1}
            style={{
              transform: inView1 ? "none" : "translateY(70px)",
              opacity: inView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="section-heading red-text"
          >
            Mission
          </h3>
          <p
            ref={ref2}
            style={{
              transform: inView2 ? "none" : "translateY(70px)",
              opacity: inView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-size"
          >
            Provide first responders with the investigative tools needed to
            predict, prevent, and respond to criminal activities with accuracy,
            efficiency, and safety.
          </p>
          <h3
            ref={ref1}
            style={{
              transform: inView1 ? "none" : "translateY(70px)",
              opacity: inView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="section-heading red-text"
          >
            Vision
          </h3>
          <p
            ref={ref3}
            style={{
              transform: inView3 ? "none" : "translateY(70px)",
              opacity: inView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-size"
          >
            We aim to become a trusted leader in investigative analytics,
            renowned for our groundbreaking solutions that significantly enhance
            public safety. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
