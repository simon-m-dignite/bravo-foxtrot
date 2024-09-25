import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const LifeAtBravoFoxtrot = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  // Create individual refs for each element to track their visibility
  const [headingRef, headingInView] = useInView({ triggerOnce: true });
  const [paragraphRef, paragraphInView] = useInView({ triggerOnce: true });
  const [linkRef, linkInView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={SectionRef}
      className="relative overflow-hidden py-12 lg:py-20 horizontal-padding bg-black text-white"
    >
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="flex flex-col items-start justify-center gap-5">
          <h2
            ref={headingRef}
            style={{
              transform: headingInView ? "none" : "translateY(70px)",
              opacity: headingInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="section-heading red-text uppercase"
          >
            life at bravo foxtrot llc
          </h2>
          <p
            ref={paragraphRef}
            className="text-size mx-auto text-start 2xl:leading-8 lg:pr-8"
            style={{
              transform: paragraphInView ? "none" : "translateY(70px)",
              opacity: paragraphInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            At Bravo Foxtrot LLC, we are more than just a tech company; we are a
            community driven by a shared mission to support those who serve and
            protect. Our culture is built on the values of courage, commitment,
            and justice, which guide everything we do. We foster a
            collaborative, innovative, and inclusive environment where every
            team member’s ideas are valued and everyone has the opportunity to
            make an impact. We believe in work-life balance, professional
            growth, and continuous learning. We support and uplift each other
            through team-building activities, professional development programs,
            or just sharing a coffee break. At Bravo Foxtrot, you’re not just
            part of a company; you’re part of a mission-driven family making a
            real difference in public safety.
          </p>
          <div
            ref={linkRef}
            className="mt-4"
            style={{
              transform: linkInView ? "none" : "translateY(70px)",
              opacity: linkInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <Link
              to="/careers"
              className="inline-block outline-none border border-[#f79f1f] hover:bg-[#f79f1f] py-3 px-5 lg:px-40 text-center font-medium text-white text-sm"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 lg:space-x-3">
          <div className="hidden lg:grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg">
              <img
                src="https://placekeanu.com/200/300"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-3">
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="/life-at-bravo-1.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="life-at-bravo-2.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-3">
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="/life-at-bravo-3.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="life-at-bravo-4.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="life-at-bravo-5.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-3">
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="/life-at-bravo-6.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className="h-52 w-40 2xl:h-64 2xl:w-44 overflow-hidden rounded-lg"
              style={{
                transform: paragraphInView ? "none" : "translateY(70px)",
                opacity: paragraphInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="/life-at-bravo-7.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtBravoFoxtrot;
