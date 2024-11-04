import { useInView } from "framer-motion";
import React, { useRef } from "react";

const TeamMemberCard = ({ name, image, designation, index, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={`bg-red-100 w-full h-[490px] lg:h-[610px] mx-auto mt-10 relative overflow-hidden group ${
        index % 2 !== 0 ? "lg:mt-16" : "mt-0"
      }`}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover absolute inset-0 z-10 grayscale"
      />

      <div className="absolute bg-[#e0a56b]/90 inset-0 z-20 translate-y-full group-hover:translate-y-0 transition-all duration-700 p-5 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-white mt-3 quantico-fonts cursor-pointer">
          {name}
        </h3>
        <p className="text-base quantico-fonts my-2 font-semibold">
          {designation}
        </p>
        <p className="text-gray-200 text-[13px] md:text-base quantico-fonts">
          {description}
        </p>
      </div>
    </div>
    // <div
    //   key={index}
    //   ref={ref}
    //   className={`w-full flex flex-col items-start gap-1 lg:mb-12 relative group ${
    //     index % 2 !== 0 ? "lg:mt-16" : "mt-0"
    //   }`}
    // >
    //   <img
    //     src={image}
    //     alt="profile-image"
    //     className="h-[390px] lg:h-[630px] object-cover w-full group-hover:scale-105 transition-all duration-500 grayscale"
    //     style={{
    //       transform: isInView ? "none" : "translateY(70px)",
    //       opacity: isInView ? 1 : 0,
    //       transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //     }}
    //   />
    //   <div
    // style={{
    //   transform: isInView ? "none" : "translateY(70px)",
    //   opacity: isInView ? 1 : 0,
    //   transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    // }}
    //     className="w-full lg:h-[630px] absolute inset-0 h-full overflow-hidden group cursor-pointer px-6 flex flex-col items-center text-center justify-center bg-[#e0a56b]/70 translate-y-full opacity-0"
    //   >
    // <h3
    //   style={{
    //     transform: isInView ? "none" : "translateY(70px)",
    //     opacity: isInView ? 1 : 0,
    //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //   }}
    //   className="text-xl md:text-3xl font-normal text-white mt-3 quantico-fonts cursor-pointer"
    // >
    //   {name}
    // </h3>
    // <p
    //   style={{
    //     transform: isInView ? "none" : "translateY(70px)",
    //     opacity: isInView ? 1 : 0,
    //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //   }}
    //   className="text-base quantico-fonts my-2"
    // >
    //   {designation}
    // </p>
    // <p
    //   style={{
    //     transform: isInView ? "none" : "translateY(70px)",
    //     opacity: isInView ? 1 : 0,
    //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //   }}
    //   className="text-gray-200 opacity-80 text-base quantico-fonts"
    // >
    //   {description}
    // </p>
    //   </div>
    // </div>
  );
};

export default TeamMemberCard;
