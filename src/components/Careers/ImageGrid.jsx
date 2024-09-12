import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageGrid = () => {
  // useInView hooks for each image
  const [img1Ref, img1InView] = useInView({ triggerOnce: true });
  const [img2Ref, img2InView] = useInView({ triggerOnce: true });
  const [img3Ref, img3InView] = useInView({ triggerOnce: true });
  const [img4Ref, img4InView] = useInView({ triggerOnce: true });
  const [img5Ref, img5InView] = useInView({ triggerOnce: true });

  return (
    <section className="w-full horizontal-padding grid grid-cols-1 lg:grid-cols-5 bg-black gap-5">
      <motion.div
        className="col-span-1 lg:col-span-1"
        ref={img1Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: img1InView ? 1 : 0, y: img1InView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      >
        <img src="/careers-img-1.jpg" alt="" className="object-cover" />
      </motion.div>

      <motion.div
        className="col-span-1 lg:col-span-1 hidden lg:flex flex-row lg:flex-col gap-5"
        ref={img2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: img2InView ? 1 : 0, y: img2InView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
      >
        <img
          src="/office-1.jpg"
          alt=""
          className="h-[220px] lg:h-[60%] w-1/2 lg:w-auto object-cover"
        />
        <img
          src="/office-2.jpg"
          alt=""
          className="h-[220px] lg:h-[40%] w-1/2 lg:w-auto object-cover"
        />
      </motion.div>

      <motion.div
        className="col-span-0 hidden lg:block lg:col-span-2"
        ref={img3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: img3InView ? 1 : 0, y: img3InView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.4 }}
      >
        <img
          src="/careers-img-2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="col-span-0 hidden lg:col-span-1 lg:flex flex-col gap-5"
        ref={img4Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: img4InView ? 1 : 0, y: img4InView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.6 }}
      >
        <img src="/office-3.jpg" alt="" className="h-[35%] object-cover" />
        <img src="/office-5.jpg" alt="" className="h-[65%] object-cover" />
      </motion.div>
    </section>
  );
};

export default ImageGrid;
