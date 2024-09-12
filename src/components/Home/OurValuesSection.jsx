import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { values } from "../../constants/Values";
import { useInView } from "react-intersection-observer";

const OurValuesSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.2,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  return (
    <section className="w-full py-12 horizontal-padding min-h-screen relative">
      <motion.div className="absolute w-full h-[120%] -z-10"></motion.div>
      <motion.h2
        className="red-text section-heading text-center quantico-fonts"
        initial="hidden"
        whileInView="visible"
        variants={childVariants}
        viewport={{ once: true }}
      >
        Our Values
      </motion.h2>

      <div className="w-full mt-20 2xl:mt-20 flex flex-col gap-y-20">
        {values.map((value, index) => {
          return (
            <div
              key={index}
              className={`w-full flex gap-y-8 items-center justify-between gap-x-10 ${
                index % 2 === 0 && "flex-col lg:flex-row-reverse"
              }`}
            >
              <motion.div
                className={`flex flex-col items-start py-10 2xl:pt-36 rounded-xl gap-5 md:px-4 lg:px-0 2xl:px-10 text-start relative overflow-hidden w-full lg:w-[50%]`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span
                  variants={childVariants}
                  className="secondary-text bg-transparent text-3xl font-medium quantico-fonts"
                >
                  /0{index + 1}
                </motion.span>
                <motion.h3
                  variants={childVariants}
                  className="red-text text-2xl lg:text-5xl"
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  className="2xl:leading-7 text-base lg:text-2xl secondary-text"
                >
                  {value.desc}
                </motion.p>
              </motion.div>
              <div className="w-full lg:w-[50%]">
                <img
                  src={value.image}
                  alt=""
                  className="lg:w-full object-cover h-[70vh]"
                  style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurValuesSection;
