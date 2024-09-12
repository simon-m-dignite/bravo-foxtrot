import { useInView, useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const OverviewSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:my-20 horizontal-padding min-h-screen relative">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="w-full flex items-start justify-between z-10">
        <div className="w-full lg:w-[40%]">
          <h2
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="red-text text-xl quantico-fonts uppercase"
          >
            Who we are
          </h2>
        </div>
        <div className="w-full lg:w-[60%]">
          <p
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              // scale: isInView ? "1" : "0.5",
            }}
            className="text-3xl leading-[37px] 2xl:leading-8 text-white text-start"
          >
            Bravo Foxtrot is one of the leading software companies developing
            practical and new- generational software solutions incorporating
            AI/ML in the fight against criminal and illicit activities. Our
            mission is to provide the best products to law enforcement to ensure
            the officer’s safety and the effectiveness of their operations.
            Route Scout and Make Cents products provide the investigative team
            with the predictive analysis and real-time needed to investigate
            human trafficking, homicide, kidnapping, narcotics, financial
            crimes, and more.
          </p>
          <div className="mt-14 flex items-center">
            <Link
              to="/contact-us"
              className="px-7 py-4 uppercase rounded-full bg-[#F79F1F] text-white font-medium text-base"
            >
              Know More
            </Link>
            <Link
              to="/contact-us"
              className="bg-[#F79F1F] text-white py-4 px-4 rounded-full m-[1px]"
            >
              <GoArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="w-full absolute top-0 z-0 lg:w-1/2 right-0">
        <video
          src="/overview-section-video.mp4"
          className="h-screen object-cover "
        ></video>
      </div> */}
    </section>
  );
};

export default OverviewSection;
