import { useInView } from "framer-motion";
import React, { useRef } from "react";

const TeamMemberCard = ({ name, image, designation, index, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      key={index}
      ref={ref}
      className={`w-full flex flex-col items-start gap-1 lg:mb-12 ${
        index % 2 !== 0 ? "lg:mt-16" : "mt-0"
      }`}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-full h-[390px] lg:h-[630px] relative overflow-hidden group cursor-pointer"
      >
        <img
          src={image}
          alt="profile-image"
          className="h-[390px] lg:h-[630px] object-cover w-full group-hover:scale-105 transition-all duration-500 grayscale"
        />
      </div>
      <h3
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="text-xl md:text-3xl font-normal text-white mt-3 quantico-fonts cursor-pointer hover:text-[#F79F1F] "
      >
        {name}
      </h3>
      <p
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="red-text opacity-80 text-base quantico-fonts my-2"
      >
        {designation}
      </p>
      <p
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="secondary-text opacity-80 text-base quantico-fonts"
      >
        {description}
      </p>
    </div>
  );
};

export default TeamMemberCard;
