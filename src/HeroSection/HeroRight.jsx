import React from "react";
import CountDownTimer from "../components/CountDownTimer";

function HeroRight() {
  return (
    <div className="relative p-10 h-full flex flex-col col-span-4 items-center justify-center rounded-2xl overflow-hidden">
      <img
        className="inset-0 absolute h-full w-full object-cover "
        src="../../public/herosection img/m8_deal_bg.jpg"
        alt=""
      />
      <div className="flex flex-col items-center relative z-20 h-full">
        <p className="text-gray-500 text-lg font-medium">Up to 30% off</p>
        <h1 className="text-2xl font-semibold mt-2">Shoulder Bags</h1>
        <img
          className="w-[50%] mt-2"
          src="../../public/herosection img/m8_p_deal.png"
          alt=""
        />
        <CountDownTimer />

        <button
          type="button"
          class="rounded-full lg:mt-8 mt-3  border px-6 py-3 text-md font-semibold text-black transition-colors shadow-md hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Shop now
        </button>
      </div>
    </div>
  );
}

export default HeroRight;
