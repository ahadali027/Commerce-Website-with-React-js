import React from "react";

function ImgSlider() {
  return (
    <div className="relative flex-grow h-full border w-full lg:max-w-[70%] overflow-hidden aspect-[16/9]  lg:aspect-video rounded-lg">
      <img
        className="absolute inset-0 h-full w-full object-cover object-top"
        src="../../public/herosection img/m8_slide_02.jpg"
        alt=""
      />

      <div className="relative z-10  max-w-lg lg:m-10 md:m-7 m-5  ">
        <p className="">EmpowerHer Suits</p>
        <h1 className="lg:text-6xl md:text-3xl text-2xl max-w-[80%] pr-5 font-semibold lg:mt-3 mt-2 sm:mt-1">
          Classic Elegance for Women
        </h1>
        <p className="mt-1 lg:mt-3 hidden md:block md:mt-3 lg:block lg:mr-32 text-gray-500 md:mr-32 mr-48">
          Naming a collection of women's suit jackets can help convey the style
          and identity of your brand.
        </p>
        <button className=" lg:mt-4 md:mt-4 mt-2  bg-yellow-500  px-4 py-1 lg:px-6 lg:py-2 rounded-full font-medium text-white hover:bg-black transition-colors">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default ImgSlider;
