import { motion } from "framer-motion";
import React from "react";

const ContactUsHero = () => {
  return (
    <main className="w-full py-10 lg:pt-32 horizontal-padding bg-black text-white flex flex-col items-start gap-6">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-[89px] xl:text-[99.7px] 2xl:text-[129px] lg:leading-[96px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      >
        Get In Touch
      </motion.h1>
    </main>
  );
};

export default ContactUsHero;
