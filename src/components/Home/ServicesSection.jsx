import { useInView, useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:py-20 min-h-screen relative text-white">
      <div className="w-full horizontal-padding flex flex-col items-center justify-center gap-5 relative">
        <motion.div
          className="absolute w-full h-[120%] -z-10"
          style={{ top: y }}
        ></motion.div>
        <h2
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="red-text section-heading"
        >
          Key Offerings
        </h2>
        <p
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
        >
          Bravo Foxtrot LLC is committed to delivering specialized solutions
          that meet the unique needs of our diverse client base and ensure
          safety, security, and operational excellence.
        </p>
      </div>

      <div className="w-full mt-20 flex flex-col gap-y-28">
        {services.map((service, index) => {
          return <ServiceCard service={service} key={index} index={index} />;
        })}
      </div>
    </section>
  );
};

export default ServicesSection;

const services = [
  {
    title: "Predictive Analysis",
    description:
      "Tools that provide insights into criminal behavior and potential threats, helping law enforcement agencies proactively address crime.",
    image: "/services-predictive-analysis.jpeg",
    num: "03",
  },
  {
    title: "Real-Time Data Integration",
    description:
      "Seamless integration with Records Management Systems (RMS) and Computer-Aided Dispatch (CAD) systems for comprehensive situational awareness.",
    image: "/services-real-time-data-integration.jpeg",
    num: "04",
  },
  {
    title: "Secure Communication Platforms",
    description:
      "Solutions for secure, real-time communication and data sharing between agencies to enhance coordination and response further enabling joint operations.",
    image: "/services-secure-communication-platforms.jpeg",
    num: "05",
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training and ongoing support for law enforcement personnel to maximize the effectiveness of our technology solutions.",
    image: "/services-corporate-training-and-support.jpeg",
    num: "06",
  },
];
