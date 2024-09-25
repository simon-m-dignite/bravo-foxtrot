import React, { useEffect } from "react";
import Hero from "../../components/Home/Hero";
import VideoZoom from "../../components/Home/VideoZoom";
import OverviewSection from "../../components/Home/OverviewSection";
import OurValuesSection from "../../components/Home/OurValuesSection";
import StatisticsSection from "../../components/Home/StatisticsSection";
import ProductsSection from "../../components/Home/ProductsSection";
import ServicesSection from "../../components/Home/ServicesSection";
import Lenis from "lenis";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home - Bravo Foxtrot";
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
      <VideoZoom />
      <OverviewSection />
      {/* <OurValuesSection /> */}
      {/* <StatisticsSection /> */}
      <ProductsSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
