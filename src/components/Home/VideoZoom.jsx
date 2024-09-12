import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const VideoZoom = () => {
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
    <div className="mt-12">
      <motion.video
        ref={imgRef}
        initial={{ scale: 0.8 }}
        animate={controls}
        className="w-full h-auto lg:h-screen object-cover brightness-75"
        autoPlay
        loop
        muted
      >
        <source src="/zooming-video.mp4" />
      </motion.video>
    </div>
  );
};

export default VideoZoom;
