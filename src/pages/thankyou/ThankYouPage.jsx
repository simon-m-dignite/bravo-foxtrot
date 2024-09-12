import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

const ThankYouPage = () => {
  return (
    <div className="w-full horizontal-padding py-24 bg-black text-white flex flex-col items-center gap-6">
      <motion.div
        className="w-20 h-20 rounded-full bg-[#F79F1F] flex items-center justify-center p-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FaCheck className="text-white w-full h-full" />
      </motion.div>

      <motion.h2
        className="text-5xl md:text-6xl font-bold quantico-fonts"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        Thank You
      </motion.h2>

      <motion.p
        className="text-center text-size"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        We appreciate your time and patience.
      </motion.p>

      <motion.p
        className="text-center text-size md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
      >
        Our consultant will get in touch with you via mail or text within 48
        hours. If you have any urgent queries, feel free to call us now.
      </motion.p>
    </div>
  );
};

export default ThankYouPage;
