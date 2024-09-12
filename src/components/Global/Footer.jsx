import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full flex flex-col items-center justify-start gap-6 horizontal-padding bg-[#101010] h-full pt-10 pb-5 lg:pb-7 lg:pt-20">
        <h2 className="section-heading red-text text-center">Contact us</h2>
        <h3 className="text-center text-2xl md:text-4xl font-semibold bg-[#101010]">
          You've got this far. <br />
          Ready to get started?
        </h3>
        <Link to="/contact-us" className="btn">
          Get in touch
        </Link>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 items-start bg-[#101010] py-10 horizontal-padding justify-between">
        <div className="w-[55%] flex flex-col items-start gap-6 bg-[#101010]">
          {/* <h3 className="section-heading red-text">Bravo Foxtrot</h3>
           */}
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-16 h-16" />
          </Link>
          <p>
            Redefining Safety Through <br /> Innovation
          </p>
          <div className="flex items-center gap-6 bg-[#101010]">
            <Link to="https://www.facebook.com" className="red-text">
              <GrFacebookOption className="red-text" />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram className="red-text" />
            </Link>
            <Link to="https://www.linkedin.com">
              <FaLinkedinIn className="red-text" />
            </Link>
            <Link to="https://www.twitter.com">
              <IoLogoTwitter className="red-text" />
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#101010]">
          <div className="flex flex-col items-start gap-5">
            <Link to="/">Home</Link>
            <Link to="/">About us</Link>
            <Link to="/">Services</Link>
            <Link to="/">Products</Link>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Link to="/">Resources</Link>
            <Link to="/">Merchandise</Link>
            <Link to="/">Industries Served</Link>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Link to="/">Partners</Link>
            <Link to="/">News & Events</Link>
            <Link to="/">Contact us</Link>
          </div>
        </div>
      </div>

      <div className="w-full border border-[#1f1f1f]" />
      <div className="w-full bg-[#101010] horizontal-padding flex flex-col md:flex-row items-center justify-between gap-6 py-5">
        <p className="secondary-text flex items-center text-sm">
          Copy right @ BravoFoxtrot.
        </p>
        <div className="flex items-center gap-14 bg-[#101010]">
          <p className="secondary-text flex items-center gap-2 text-sm">
            Privacy Policy
          </p>
          <p className="secondary-text flex items-center gap-2 text-sm">
            Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
