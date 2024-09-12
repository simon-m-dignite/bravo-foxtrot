import React from "react";
import { useInView } from "react-intersection-observer";
import { cards } from "../../constants/CompanyOnboardingSteps";

const Company = () => {
  return (
    <section className="w-full py-12 bg-black text-white grid grid-cols-1 lg:grid-cols-2 gap-x-20 horizontal-padding">
      {cards.map((card, index) => {
        // Create a ref for each card to track its visibility
        const [ref, inView] = useInView({
          triggerOnce: true, // Only trigger once when the card is in view
        });

        return (
          <div
            className="flex flex-col items-start gap-4 py-6"
            key={index}
            ref={ref} // Attach the ref to the card container
            style={{
              transform: inView ? "none" : "translateY(50px)", // Slide up animation
              opacity: inView ? 1 : 0, // Fade in animation
              transition: "all 0.7s ease-in-out", // Smooth transition
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
