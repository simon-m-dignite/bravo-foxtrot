import { useInView, useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { team_members } from "../../constants/TeamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full py-12 lg:py-20 relative min-h-screen horizontal-padding overflow-hidden">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div
        className="flex items-center justify-center gap-3"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(70px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {/* <div
          className="w-10 h-3 yellow-bg"
          style={{
            background:
              "linear-gradient(to right, rgba(250, 200, 21, 0), rgba(250, 200, 21, 1))",
          }}
        /> */}
        <h2 className="section-heading red-text uppercase">Team members</h2>
        {/* <div
          className="w-10 h-3 yellow-bg"
          style={{
            background:
              "linear-gradient(to left, rgba(250, 200, 21, 0), rgba(250, 200, 21, 1))",
          }}
        /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 gap-y-8 lg:gap-12 mt-20 w-full z-10">
        {team_members.map((card, index) => {
          return (
            <TeamMemberCard
              name={card.name}
              designation={card.designation}
              index={index}
              image={card.image}
              key={index}
              description={card.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
