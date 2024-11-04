import {
  useInView,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const ProductCard = ({ index }) => {
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
      imageSrc: "/1.png",
    },
    {
      id: 2,
      imageSrc: "/2.png",
    },
    {
      id: 3,
      imageSrc: "/3.png",
    },
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
        className={`relative w-full group flex flex-col lg:flex-row gap-x-4 gap-y-7 overflow-hidden ${
          index % 2 === 0 ? "flex-row-reverse" : "mt-14 "
        }`}
      >
        <div className="w-full lg:w-[45%] px-4 md:px-8 lg:px-12 2xl:px-44">
          <h3 className="text-4xl lg:text-7xl quantico-fonts font-semibold red-text mb-6">
            Route Scout
          </h3>
          <p
            className={`secondary-text text-sm md:text-base lg:text-xl xl:text-2xl border-l border-[#e0a56b] pl-8`}
          >
            Route Scout is our state-of-the-art vehicle recognition and tracking
            software designed to enhance the capabilities of law enforcement
            agencies. It utilizes vehicle recognition technology for accurate
            monitoring and prediction capabilities and also enables seamless
            information sharing and coordination across different jurisdictions.
          </p>
          <Link
            to="/contact-us"
            className="w-full block text-center border border-[#e0a56b] uppercase py-3 hover:bg-[#e0a56b] transition-all duration-500 font-normal quantico-fonts mt-12"
          >
            Request Demo
          </Link>
        </div>

        <div className="w-full lg:w-[55%] min-h-[50vh] lg:min-h-[80vh] relative group flex justify-center">
          <div className="relative">
            <img
              src="/ios-app-mobile-sketch.png"
              alt=""
              className="w-[305px] h-[460px] lg:h-[560px] object-contain"
            />
            <img
              src="/route-scout-1.png"
              alt=""
              className="absolute top-1.5 left-12 lg:left-6 inset-0 w-[210px] lg:w-[255px] h-[450px] lg:h-[550px] rounded-[30px] object-cover"
            />
          </div>
          <div className="relative hidden md:block">
            <img
              src="/ios-app-mobile-sketch.png"
              alt=""
              className="w-[305px] h-[460px] lg:h-[560px] object-contain"
            />
            <img
              src="/route-scout-2.png"
              alt=""
              className="absolute top-1.5 left-12 lg:left-6 inset-0 w-[210px] lg:w-[255px] h-[450px] lg:h-[550px] rounded-[30px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
