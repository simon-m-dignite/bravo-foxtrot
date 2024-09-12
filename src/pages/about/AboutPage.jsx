import React, { useEffect } from "react";
import AboutUsHero from "../../components/About/AboutUsHero";
import CompanyHistory from "../../components/About/CompanyHistory";
import OurValuesSection from "../../components/About/OurValuesSection";
import TeamSection from "../../components/About/TeamSection";
import CompanyHistory1 from "../../components/About/CompanyHistory1";
import CareersSection from "../../components/About/CareersSection";
import VideoSection from "../../components/About/VideoSection";
import LifeAtBravoFoxtrot from "../../components/About/LifeAtBravoFoxtrot";
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
      <AboutUsHero />
      <Company />
      <CompanyHistory />
      <OurValuesSection />
      <TeamSection />
      <CareersSection />
      <LifeAtBravoFoxtrot />
    </div>
  );
};

export default AboutPage;
