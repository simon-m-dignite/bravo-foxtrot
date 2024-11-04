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
        <div className="w-full lg:w-[55%] min-h-[50vh] lg:min-h-[80vh] relative group flex justify-center">
          <img
            src="/our-products-make-cents.jpeg"
            alt=""
            className="lg:absolute top-1.5 left-12 lg:left-6 inset-0 w-[90%] lg:w-2/3 mx-auto h-[450px] lg:h-[550px] rounded-[30px] object-cover"
          />
          {/* </div> */}
        </div>

        <div className="w-full lg:w-[45%] px-4 md:px-8 lg:px-12 2xl:px-44">
          <h3 className="text-4xl lg:text-7xl quantico-fonts font-semibold red-text mb-6">
            Make Cents
          </h3>
          <p
            className={`secondary-text text-sm md:text-base lg:text-xl xl:text-2xl ${
              index % 2 === 0
                ? "border-l border-[#e0a56b] pl-8"
                : "border-r border-[#e0a56b] pr-8"
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

          <Link
            to="/contact-us"
            className="w-full block text-center border border-[#e0a56b] uppercase py-3 hover:bg-[#e0a56b] transition-all duration-500 font-normal quantico-fonts mt-12"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
