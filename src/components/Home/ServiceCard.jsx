import { useInView } from "react-intersection-observer";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const ServiceCard = ({ service, index }) => {
  const SectionRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const [titleRef, titleInView] = useInView({ triggerOnce: true });
  const [imageRef, imageInView] = useInView({ triggerOnce: true });
  const [descRef, descInView] = useInView({ triggerOnce: true });
  const [numRef, numInView] = useInView({ triggerOnce: true });

  return (
    <div className="px-4 lg:px-0">
      <div
        className={`w-full relative lg:hidden flex flex-col items-start gap-5 lg:py-16`}
      >
        {/* Service Title */}
        <h3
          // ref={titleRef}
          // style={{
          //   transform: titleInView
          //     ? "none"
          //     : `translateY(${isMobile ? "50px" : "100px"})`,
          //   opacity: titleInView ? 1 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
          className="text-white text-4xl lg:text-7xl bg-transparent z-20 font-extrabold quantico-fonts"
        >
          {service.title}
        </h3>

        {/* Service Description */}
        <p
          // ref={descRef}
          // style={{
          //   transform: descInView
          //     ? "none"
          //     : `translateY(${isMobile ? "50px" : "100px"})`,
          //   opacity: descInView ? 1 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
          className="bg-transparent lg:w-[80%] secondary-text text-xl"
        >
          {service.description}
        </p>

        {/* Service Image */}
        <div className="h-full lg:w-2/3 relative">
          <img
            // ref={imageRef}
            src={service.image}
            alt={service.title}
            className="h-[40vh] w-full object-cover relative z-10"
            // style={{
            //   transform: imageInView ? "none" : "translateY(100px)",
            //   scale: imageInView ? 1 : 0.5,
            //   opacity: imageInView ? 0.5 : 0.2,
            //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            // }}
          />
        </div>
      </div>

      <div
        ref={SectionRef}
        className={`w-full hidden relative lg:flex items-start py-16 ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        {/* Service Title */}
        <h3
          ref={titleRef}
          style={{
            transform: titleInView ? "none" : "translateY(100px)",
            opacity: titleInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-white absolute top-0 left-[30%] text-7xl bg-transparent z-20 font-extrabold quantico-fonts"
        >
          {service.title}
        </h3>

        {/* Service Image */}
        <div className="h-full lg:w-2/3 relative">
          <img
            ref={imageRef}
            src={service.image}
            alt={service.title}
            className="h-[80vh] w-full object-cover relative z-10"
            style={{
              transform: imageInView ? "none" : "translateY(100px)",
              scale: imageInView ? 1 : 0.5,
              opacity: imageInView ? 0.5 : 0.2,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
        </div>

        {/* Service Description */}
        <div className="h-full lg:w-1/3 lg:px-12 lg:pt-20 relative">
          <p
            ref={descRef}
            style={{
              transform: descInView ? "none" : "translateY(100px)",
              opacity: descInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:absolute z-10 bg-transparent lg:w-[80%] secondary-text text-3xl"
          >
            {service.description}
          </p>

          {/* Service Number */}
          <span
            ref={numRef}
            className={`absolute text-[228px] text-white font-bold rotate-90 ${
              index % 2 === 0 ? "-left-4" : "-right-10"
            } top-20 border-text quantico-fonts`}
            style={{
              scale: numInView ? 1 : 0.5,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {service.num}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
