import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { useAnimate, stagger } from "framer-motion";
import Sidebar from "./Sidebar";
import { HiOutlineMenu } from "react-icons/hi";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 2 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.1), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.1, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full horizontal-padding py-6 flex items-center justify-between z-50 bg-black">
      <Link to={"/"} className="flex items-center justify-start gap-2">
        <img
          src="/logo-white.png"
          alt="logo"
          className="w-[48px] h-[48px] md:w-[70px] md:h-[70px]  z-50"
        />
        <span className="red-text quantico-fonts text-xl md:text-2xl">
          Bravo Foxtrot
        </span>
      </Link>
      <ul className="hidden items-center gap-10 2xl:gap-16 justify-end">
        <Link
          to="/"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/")}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/about-us")}
        >
          About Us
        </Link>
        {/* <Link
          to="/what-we-do"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
        >
          Services
        </Link> */}
        <Link
          to="/products"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/products")}
        >
          Products
        </Link>

        <Link
          to="/products"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/products")}
        >
          Industries Served
        </Link>

        <Link
          to="/careers"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/careers")}
        >
          Careers
        </Link>

        <Link
          to="/contact-us"
          className="text-lg quantico-fonts font-medium secondary-text cursor-pointer hover:text-[#E5B447] transition-all duration-300"
          // onClick={() => handleNavigate("/contact-us")}
        >
          Contact Us
        </Link>
      </ul>
      <div className="flex items-center gap-6">
        <Link
          to="/contact-us"
          className="px-5 py-3.5 yellow-bg outline-none rounded-full text-xs font-medium hidden md:flex items-center primary-bg text-white z-50"
        >
          Contact Us
          <TiArrowRight className="text-xl" />
        </Link>
        <button
          onClick={handleOpen}
          className="z-50 flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full"
        >
          <HiOutlineMenu className="text-2xl text-white" />{" "}
          <span className="text-lg font-medium">Menu</span>
        </button>
      </div>
      <div
        ref={scope}
        className={`w-full h-screen fixed inset-0 z-50 transition-all duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <Sidebar onclick={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
