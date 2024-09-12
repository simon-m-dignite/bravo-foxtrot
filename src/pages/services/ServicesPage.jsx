import React, { useEffect } from "react";
import Hero from "../../components/ServicesPage/Hero";
import OurServicesSection from "../../components/ServicesPage/OurServicesSection";
import ProductsSection from "../../components/Home/ProductsSection";
import Lenis from "lenis";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="w-full overflow-x-hidden bg-black">
      <Hero />
      <OurServicesSection />
      <ProductsSection />
    </div>
  );
};

export default ServicesPage;

// secure-communication-platforms.jpg
