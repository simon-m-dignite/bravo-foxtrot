import React from "react";
import { useInView } from "react-intersection-observer";
import { cards } from "../../constants/CompanyOnboardingSteps";

const Company = () => {
  return (
    <section className="w-full py-12 bg-black text-white grid grid-cols-1 lg:grid-cols-2 gap-x-20 horizontal-padding">
      {cards.map((card, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
        });

        return (
          <div
            className="flex flex-col items-start gap-4 py-6"
            key={index}
            ref={ref}
            style={{
              transform: inView ? "none" : "translateY(50px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.7s ease-in-out",
            }}
          >
            <h3 className="red-text text-3xl font-bold quantico-fonts">
              {card.title}
            </h3>
            <p className="text-base">{card.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Company;
