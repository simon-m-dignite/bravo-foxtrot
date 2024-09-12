import { useInView, useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../constants/products";

const ProductsSection = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full py-12 lg:py-20 relative min-h-screen text-white overflow-x-hidden">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <div className="w-full flex flex-col gap-10">
        <div className="">
          <div className="flex flex-col items-center gap-5">
            <h2
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // scale: isInView ? "1" : "0.5",
              }}
              className="red-text section-heading text-center"
            >
              Our Products
            </h2>
            <p
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // scale: isInView ? "1" : "0.5",
              }}
              className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
            >
              Bravo Foxtrot is a leading software company specializing in
              innovative and practical software solutions that incorporate AI
              and ML to combat criminal and illicit activities. Our mission is
              to deliver the best products to law enforcement, enhancing officer
              safety and operational effectiveness. With offerings like Route
              Scout and Make Cents, we equip investigative teams with predictive
              analysis and real-time data essential for tackling human
              trafficking, homicide, kidnapping, narcotics, financial crimes,
              and more.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 mt-20">
        {products.map((product, index) => {
          return (
            <ProductCard
              image={product.product_image}
              title={product.product_title}
              desc={product.product_desc}
              key={index}
              index={index}
              tag={product.tag}
              features={product.features}
              tag_line={product.tag_line}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
