import React from "react";
import pageKeys from "~/content/pageKeys.json";
import Typewritter from "~/components/Typewritter";

const Hero = () => {
  return (
    <div className="mb-8">
      <div className="hero-big pb-10">{pageKeys.titles.heroGreeting}</div>
      <div className="flex flex-col items-start space-y-2 hero-body">
        <p>{pageKeys.titles.heroIntro}</p>
        <Typewritter
          strings={pageKeys.titles.heroSubIntro}
          className="text-[#90AECF] min-h-[50px] sm:min-h-[96px]"
        />
      </div>
    </div>
  );
};

export default Hero;
