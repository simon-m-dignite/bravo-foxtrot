import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";
import { products } from "../../constants/products";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProductsSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  // For header and paragraph
  const [headerRef, headerInView] = useInView({ once: true });
  const [paragraphRef, paragraphInView] = useInView({ once: true });

  return (
    <section
      ref={SectionRef}
      className="w-full py-12 lg:py-20 relative text-white overflow-hidden"
    >
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>

      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col items-center gap-5">
          <motion.h2
            ref={headerRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: headerInView ? 1 : 0,
              y: headerInView ? 0 : 100,
            }}
            transition={{
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.5,
            }}
            className="red-text section-heading text-center"
          >
            Featured Products
          </motion.h2>
          <motion.p
            ref={paragraphRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: paragraphInView ? 1 : 0,
              y: paragraphInView ? 0 : 100,
            }}
            transition={{
              duration: 1.4,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.5,
            }}
            className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
          >
            Bravo Foxtrot’s mission is to provide law enforcement with superior
            products that enhance officer safety and operational efficiency.
            Through tools like Route Scout and Make Cents, we empower
            investigative teams with critical predictive analytics and real-time
            data to effectively combat human trafficking, homicide, kidnapping,
            narcotics, financial crimes, and more.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 mt-20 overflow-hidden">
        {/* {products.map((product, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
                delay: index * 0.1,
              }}
            >
              <ProductCard />
            </motion.div>
          );
        })} */}
        <ProductCard />
        <ProductCard2 />
      </div>

      <div className="w-full flex justify-center mt-28">
        <Link
          to="/products"
          className="border border-[#E5B447] text-[#E5B447] px-10 py-3 quantico-fonts hover:bg-[#E5B447] hover:text-white transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
