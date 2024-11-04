import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Fast growing company",
    text: "We are at an infection point to achieve accelerated.",
  },
  {
    title: "Great Colleagues",
    text: "We are at an infection point to achieve accelerated.",
  },
  {
    title: "Take Charge",
    text: "We are at an infection point to achieve accelerated.",
  },
  {
    title: "Don't stop learning",
    text: "We are at an infection point to achieve accelerated.",
  },
  {
    title: "Latest technology stack",
    text: "We are at an infection point to achieve accelerated.",
  },
  {
    title: "Cross domain exposure",
    text: "We are at an infection point to achieve accelerated.",
  },
];

const BenefitsSection = () => {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [gridRef, gridInView] = useInView({ triggerOnce: true });
  // const [imageRef, imageInView] = useInView({ triggerOnce: true });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 lg:pt-32 lg:pb-20 flex flex-col items-center gap-6 bg-black text-white horizontal-padding"
    >
      <motion.h2
        className="uppercase quantico-fonts red-text font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      >
        benefits
      </motion.h2>
      <motion.h3
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
      >
        Why Join Us
      </motion.h3>
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10"
        ref={gridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 }}
      >
        {benefits.map((benefit, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col items-start gap-4 p-3 lg:px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 50 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.2 + index * 0.1,
              }}
            >
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="secondary-text text-xl">{benefit.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
