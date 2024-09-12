import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import ServiceCard from "../Home/ServiceCard";
import { useInView } from "react-intersection-observer";

const OurServicesSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const [ref, isInView] = useInView({ triggerOnce: true }); // Trigger animations once

  return (
    <section
      ref={SectionRef}
      className="w-full py-12 lg:py-20 min-h-screen relative text-white px-4 lg:px-0"
    >
      <div className="w-full horizontal-padding flex flex-col items-center justify-center gap-5 relative">
        <motion.div
          className="absolute w-full h-[120%] -z-10"
          style={{ top: y }}
        ></motion.div>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5,
          }}
          className="red-text section-heading"
        >
          What We Do
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.6,
          }}
          className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
        >
          Bravo Foxtrot LLC is committed to delivering specialized solutions
          that meet the unique needs of our diverse client base and ensure
          safety, security, and operational excellence.
        </motion.p>
      </div>

      <div className="w-full mt-20 flex flex-col lg:gap-y-28">
        {services.map((service, index) => {
          return <ServiceCard service={service} key={index} index={index} />;
        })}
      </div>
    </section>
  );
};

export default OurServicesSection;

const services = [
  {
    title: "Predictive Analysis",
    description:
      "Tools that provide insights into criminal behavior and potential threats, helping law enforcement agencies proactively address crime.",
    image: "/commercial-solutions.jpg",
    num: "03",
  },
  {
    title: "Real-Time Data Integration",
    description:
      "Seamless integration with Records Management Systems (RMS) and Computer-Aided Dispatch (CAD) systems for comprehensive situational awareness.",
    image: "/aml.jpg",
    num: "04",
  },
  {
    title: "Secure Communication Platforms",
    description:
      "Solutions for secure, real-time communication and data sharing between agencies to enhance coordination and response.",
    image: "/secure-communication-platforms.jpg",
    num: "05",
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training and ongoing support for law enforcement personnel to maximize the effectiveness of our technology solutions.",
    image: "/law-enforcement.jpg",
    num: "06",
  },
];
