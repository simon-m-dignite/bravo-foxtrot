import React from "react";
import { cards } from "../../constants/CompanyOnboardingSteps";

const CompanySteps = () => {
  return (
    <section className="w-full py-12 relative horizontal-padding">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div>
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-4 mb-12"
              >
                <h3>{card.title}</h3>
                <p className="secondary-text">{card.text}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CompanySteps;
