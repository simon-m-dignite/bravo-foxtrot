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
    <section className="w-full py-12 lg:my-20 horizontal-padding relative">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="w-full flex flex-col gap-6 items-center justify-between z-10">
        <div className="w-full text-center">
          <h2
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="red-text section-heading text-center quantico-fonts"
          >
            Who we are
          </h2>
        </div>
        <div className="w-full lg:w-[70%] mx-auto text-center">
          <p
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-xl lg:text-xl leading-[37px] 2xl:leading-8 text-white"
          >
            Bravo Foxtrot is a leading software company at the forefront of
            developing innovative software solutions that leverage AI/ML to
            combat criminal and illicit activities. Our mission is to empower
            law enforcement with cutting-edge tools that enhance officer safety
            and operational effectiveness. Our Route Scout and Make Cents
            products equip investigative teams with the predictive analytics and
            real-time insights necessary to tackle issues like human
            trafficking, homicide, kidnapping, narcotics, financial crimes, and
            beyond.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/contact-us"
              className="px-7 py-3.5 uppercase rounded-full yellow-bg text-white font-medium text-[15px] flex items-center gap-2"
            >
              Learn More <GoArrowUpRight className="text-xl" />
            </Link>
            {/* <Link
              to="/contact-us"
              className="bg-[#F79F1F] text-white py-4 px-4 rounded-full m-[1px]"
            >
              <GoArrowUpRight className="text-2xl" />
            </Link> */}
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
