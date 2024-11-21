import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        emailjs
          .sendForm("service_dkyakw9", "template_bchzmof", form.current, {
            publicKey: "hIfSXgwwkGvo0ENce",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              setErrors({});
              setLoading(false);
              navigate("/thank-you");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        console.log("Form submitted successfully", formData);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black horizontal-padding text-white flex items-center pb-32">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <motion.div
          className="w-full lg:w-[50%] lg:pt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        >
          <p className="text-xl leading-[36px] tracking-wide lg:w-[76%]">
            We specialize in creating and implementing effective digital
            marketing strategies that drive growth and increase revenue. Our
            team of skilled professionals has a wealth of experience in web
            design, search engine optimization, social media marketing,
            pay-per-click advertising, and more.
          </p>

          <div className="flex flex-col items-start gap-6 mt-10">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.2,
              }}
            >
              <TfiEmail className="text-[#E5B447] text-xl" />
              <Link to="mailto:" className="text-[15px]">
                info@bravofoxtrotllc.com
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.4,
              }}
            >
              <FiPhoneCall className="text-[#E5B447] text-xl" />
              <Link to="tel:(404) 236-9456" className="text-[15px]">
                (404) 236-9456
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center justify-start gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.6,
              }}
            >
              <SlLocationPin className="text-[#E5B447] text-xl" />
              <p className="text-[15px]">
                225 Reformation Pkwy Suite #200-42, Canton, GA 30114
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.8,
              }}
            >
              <TfiEmail className="text-[#E5B447] text-xl" />
              <Link
                to="mailto:careers@bravofoxtrotllc.com"
                className="text-[15px]"
              >
                careers@bravofoxtrotllc.com
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-[50%] flex items-center justify-start lg:p-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        >
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-start gap-y-8"
          >
            <div className="w-full relative z-0 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.2,
                }}
              >
                <label
                  htmlFor="firstName"
                  className="red-text font-medium px-5"
                >
                  First name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={`block p-5 w-full text-2xl text-white bg-transparent border rounded-full border-[#2d2d2d] appearance-none focus:border-[#E5B447] focus:outline-none focus:ring-0 peer font-normal quantico-fonts ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  placeholder="Your first Name"
                  autoComplete="off"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm px-5">
                    {errors.firstName}
                  </p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.4,
                }}
              >
                <label htmlFor="lastName" className="red-text font-medium px-5">
                  Last name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={`block p-5 w-full text-2xl text-white bg-transparent border rounded-full border-[#2d2d2d] appearance-none focus:border-[#E5B447] focus:outline-none focus:ring-0 peer font-normal quantico-fonts ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  placeholder="Your last Name"
                  autoComplete="off"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm px-5">{errors.lastName}</p>
                )}
              </motion.div>
            </div>

            <motion.div
              className="w-full relative z-0 mt-5 flex flex-col gap-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.6,
              }}
            >
              <label htmlFor="email" className="red-text font-medium px-5">
                Your email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`block p-5 w-full text-2xl text-white bg-transparent border rounded-full border-[#2d2d2d] appearance-none focus:border-[#E5B447] focus:outline-none focus:ring-0 peer font-normal quantico-fonts ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm px-5">{errors.email}</p>
              )}
            </motion.div>

            <motion.div
              className="w-full relative z-0 flex flex-col gap-2 mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.8,
              }}
            >
              <label htmlFor="message" className="red-text font-medium px-5">
                Tell us more about your project goals:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`block p-5 w-full text-2xl text-white bg-transparent border rounded-[44px] border-[#2d2d2d] appearance-none focus:border-[#E5B447] focus:outline-none focus:ring-0 peer font-normal quantico-fonts ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Your message"
                style={{ resize: "none" }}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm px-5">{errors.message}</p>
              )}
            </motion.div>

            <motion.div
              className="w-full mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 1.0,
              }}
            >
              <button
                type="submit"
                className="border border-[#E5B447] px-10 py-3 text-xl font-semibold text-[#E5B447] hover:text-white hover:bg-[#E5B447] transition-all duration-300 rounded-full flex items-center gap-2"
              >
                {loading ? "Sending..." : "Send"}{" "}
                <FiArrowRight className="text-2xl" />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
