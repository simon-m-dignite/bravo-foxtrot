import React, { useEffect } from "react";
import CompanyHistory from "../../components/About/CompanyHistory";
import OurValuesSection from "../../components/About/OurValuesSection";
import TeamSection from "../../components/About/TeamSection";
import Company from "../../components/About/Company";
import Lenis from "lenis";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-black text-white">
      <CompanyHistory />
      <Company />
      <OurValuesSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
