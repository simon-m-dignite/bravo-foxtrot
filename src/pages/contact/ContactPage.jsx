import React, { useEffect } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import ContactUsHero from "../../components/Contact/ContactUsHero";
import Lenis from "lenis";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Bravo Foxtrot";
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <ContactUsHero />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
