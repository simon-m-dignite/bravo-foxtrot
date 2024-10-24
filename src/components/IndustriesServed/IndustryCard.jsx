import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useInView, useScroll, useTransform, motion } from "framer-motion";

const IndustryCard = ({ title, text, image, index }) => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`h-auto lg:h-screen flex flex-col-reverse lg:flex-row items-start gap-4 relative overflow-hidden ${
        index % 2 == 1 && "lg:flex-row-reverse"
      }`}
      ref={ref}
    >
      <motion.div
        className="absolute w-full h-[100%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="w-full lg:h-full lg:w-[50%]">
        <img
          src={image}
          alt=""
          className="rounded-3xl w-full h-full object-cover"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
      </div>
      <div className="rounded-3xl p-6 lg:p-14 flex flex-col items-start justify-between bg-[#101010] w-full lg:w-[50%] h-full">
        <h3
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="uppercase quantico-fonts"
        >
          Industry 0{index + 1}
        </h3>

        <div className="flex flex-col items-start gap-6 mt-3">
          <h3
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="section-heading red-text"
          >
            {title}
          </h3>
          <p
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="secondary-text text-2xl"
          >
            {text}
          </p>
        </div>

        <div className="mt-5">
          <Link
            to="/contact-us"
            className="flex items-center gap-2 text-sm uppercase quantico-fonts"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span className="border rounded-full w-9 h-9 flex items-center justify-center border-[#E5B447] yellow-bg">
              <GoArrowUpRight className="text-lg text-white" />
            </span>{" "}
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
