import {
  useInView,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import React, { useEffect, useRef, useState } from "react";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const ProductCard = ({
  images,
  title,
  desc,
  index,
  tag,
  features,
  tag_line,
}) => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const IMAGES = [
    {
      id: 1,
      imageSrc: "/anti-money-laundering.jpg",
    },
    {
      id: 2,
      imageSrc: "/fraud-detection.jpg",
    },
    {
      id: 3,
      imageSrc: "/cryptocurrency-monitoring.jpg",
    },
    {
      id: 4,
      imageSrc: "/enhanced-investigation-support.jpg",
    },
    // {
    //   id: 5,
    //   imageSrc: "/information-sharing.jpg",
    // },
    // {
    //   id: 6,
    //   imageSrc: "/record-management.jpg",
    // },
  ];

  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageCount]);

  return (
    <div className="w-full">
      <div
        className={`relative w-full group flex flex-col-reverse lg:flex-row gap-x-4 gap-y-7 overflow-hidden mt-20`}
      >
        <div className="w-full lg:w-[55%] h-[50vh] lg:min-h-[80vh] relative group flex justify-center">
          {/* slider-container */}
          {/* <div className="slider">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${IMAGES[activeImageIndex].imageSrc})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image"
              />
            </AnimatePresence>
          </div> */}
          <div className="relative">
            <img
              src="/mobile-timers.png"
              alt=""
              className="absolute top-1 rounded-t-[35px] left-6 w-[255px] z-10 "
            />
            <img
              src="/ios-app-mobile-sketch.png"
              alt=""
              className="w-[303px] h-[560px] object-contain"
            />
            <img
              src="/make-cents-1.jpg"
              alt=""
              className="absolute top-1 left-6 inset-0 w-[255px] h-[550px] rounded-[35px] object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="/mobile-timers.png"
              alt=""
              className="absolute top-2 rounded-t-[35px] left-6 w-[255px] z-10 "
            />
            <img
              src="/ios-app-mobile-sketch.png"
              alt=""
              className="w-[303px] h-[560px] object-contain"
            />
            <img
              src="/make-cents-2.jpg"
              alt=""
              className="absolute top-1 left-6 inset-0 w-[255px] h-[550px] rounded-[35px] object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[45%] px-4 md:px-8 lg:px-12 2xl:px-44">
          <h3 className="text-4xl lg:text-7xl quantico-fonts font-semibold red-text mb-6">
            Make Cents
          </h3>
          <p
            className={`secondary-text text-sm md:text-base lg:text-xl xl:text-2xl ${
              index % 2 === 0
                ? "border-l border-yellow-600 pl-8"
                : "border-r border-yellow-600 pr-8"
            }`}
          >
            Our advanced financial crime tool enables law enforcement to
            identify and fight fraud and money laundering. Using sophisticated
            algorithms and data analysis, Make Cents provides insights into
            economic transactions, flagging suspicious activities and patterns.
            This tool is essential for agencies aiming to protect financial
            integrity and assert justice in the face of increasingly complex
            financial crimes.
          </p>

          <p className="red-text mt-6 italic text-sm">- Coming Soon</p>

          <button className="w-full border border-[#F79F1F] uppercase py-3 hover:bg-[#f79f1f] transition-all duration-500 font-normal quantico-fonts mt-12">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
