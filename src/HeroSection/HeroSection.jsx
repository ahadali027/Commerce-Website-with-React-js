import React from "react";
import ImgSlider from "./ImgSlider";
import HeroRight from "./HeroRight";

function HeroSection() {
  return (
    <div className="lg:p-10 md:p-5 p-3 max-w-7xl relative flex gap-5 mx-auto lg:aspect-[21/9] flex-col lg:flex-row overflow-hidden">
      <ImgSlider />
      <HeroRight />
    </div>
  );
}

export default HeroSection;
