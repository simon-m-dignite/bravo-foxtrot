import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jobOpenings } from "../../constants/jobs";

const CurrentOpenings = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="w-full py-12 lg:py-20 flex flex-col items-center gap-6 bg-black text-white horizontal-padding"
      id="open-positions"
      ref={sectionRef}
    >
      <motion.h2
        className="uppercase quanitco-fonts red-text font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Future Openings
      </motion.h2>

      <motion.h3
        className="section-heading text-center lg:leading-[70px]"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        Want to join Team <br /> Bravo Foxtrot
      </motion.h3>

      <motion.div
        className="mt-10 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      >
        <table className="w-full">
          <thead>
            <tr className="bg-[#1c1c1c]">
              <th className="text-start py-5 pl-10 rounded-l-xl red-text">
                Job Title
              </th>
              <th className="text-start py-5 red-text">Department</th>
              {/* <th className="text-start py-5 red-text">Pay Type</th> */}
              <th className="text-start py-5 rounded-r-xl red-text">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobOpenings.map((job, index) => (
              <tr key={index} className="mb-8 border-b border-[#1c1c1c]">
                <td className="font-normal text-base py-5 lg:pl-5">
                  {job.name}
                </td>
                <td className="py-5">{job.department}</td>
                {/* <td className="py-5">{job.payType}</td> */}
                <td className="py-5">
                  <button
                    type="button"
                    className="text-sm py-2 rounded-lg font-normal"
                  >
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
        {/* <div className="w-full border grid grid-cols-3">
          {jobOpenings.map((job, index) => (
            <div key={index} className="mb-8">
              <h3 className="font-semibold text-xl">{job.name}</h3>
              <p>Department: {job.department}</p>
              <p>Pay Type: {job.payType}</p>
            </div>
          ))}
        </div>
        <h4 className="quantico-fonts font-bold red-text text-xl">
          Coming Soon
        </h4> */}
      </motion.div>
    </section>
  );
};

export default CurrentOpenings;
