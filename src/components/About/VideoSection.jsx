import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { cards } from "../../constants/CompanyOnboardingSteps";
import { useInView } from "react-intersection-observer";

const VideoSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  const [imgRef, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ scale: 0.8 });
    }
  }, [controls, inView]);
  return (
    <div className="mt-12 mx-auto relative mb-20">
      <motion.video
        ref={imgRef}
        initial={{ scale: 0.8 }}
        animate={controls}
        className="w-full h-auto lg:h-[90vh] object-cover brightness-50"
        autoPlay
        loop
        muted
      >
        <source src="/video-2.mp4" />
      </motion.video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black to-black/5 z-10" />
    </div>
  );
};

export default VideoSection;
