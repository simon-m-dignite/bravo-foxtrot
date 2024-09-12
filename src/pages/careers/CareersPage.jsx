import React, { useEffect } from "react";
import CareersHero from "../../components/Careers/CareersHero";
import ImageGrid from "../../components/Careers/ImageGrid";
import BenefitsSection from "../../components/Careers/BenefitsSection";
import CurrentOpenings from "../../components/Careers/CurrentOpenings";
import Lenis from "lenis";

const CareersPage = () => {
  useEffect(() => {
    document.title = "Careers - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <CareersHero />
      <ImageGrid />
      <BenefitsSection />
      <CurrentOpenings />
    </div>
  );
};

export default CareersPage;
