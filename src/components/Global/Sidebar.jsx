import React from "react";
import { IoClose } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Sidebar = ({ onclick }) => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div
      className="w-[80%] lg:w-[40%] 2xl:w-1/3 bg-gray-100 h-full float-end relative shadow-xl"
      onClick={onclick}
    >
      <div className="w-full horizontal-padding flex items-center justify-end gap-x-6 absolute top-6">
        <Link
          to="/contact-us"
          className="px-5 py-2 outline-none rounded-full text-sm font-medium flex items-center bg-[#E5B447] text-white"
        >
          Contact Us
          <TiArrowRight className="text-2xl" />
        </Link>
        <button onClick={onclick} className="">
          <IoClose className="text-3xl text-[#E5B447]" />
        </button>
      </div>

      <ul className="flex flex-col items-start gap-6 2xl:gap-5 text-black px-12 justify-center h-full">
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/")}
        >
          Home
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/about-us")}
        >
          About Us
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/what-we-do")}
        >
          Services
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/products")}
        >
          Products
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/industries-served")}
        >
          Industries Served
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/careers")}
        >
          Careers
        </li>
        {/* <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/")}
        >
          Partners
        </li>
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/")}
        >
          News & Events
        </li> */}
        <li
          className="text-2xl lg:text-5xl quantico-fonts font-extrabold secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          onClick={() => handleNavigate("/contact-us")}
        >
          Contact Us
        </li>
      </ul>

      <div className="w-full absolute bottom-6 flex items-center justify-end gap-x-5 horizontal-padding">
        <Link
          target="_blank"
          to={"https://www.facebook.com"}
          className="text-[#E5B447] text-lg"
        >
          <TiSocialFacebook className="text-[#E5B447] text-lg" />
        </Link>
        <Link target="_blank" to={"https://www.instagram.com"}>
          <FaInstagram className="text-[#E5B447] text-base" />
        </Link>
        <Link target="_blank" to={"https://www.twitter.com"}>
          <RiTwitterXLine className="text-[#E5B447] text-base ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
