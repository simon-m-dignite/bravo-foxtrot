import React, { useEffect } from "react";
import IndustriesList from "../../components/IndustriesServed/IndustriesList";
import Lenis from "lenis";

const IndustriesServed = () => {
  useEffect(() => {
    document.title = "Industries Served - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full">
      <IndustriesList />
    </div>
  );
};

export default IndustriesServed;
