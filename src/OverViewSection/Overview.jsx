import React from "react";

function Overview() {
  return (
    <div className="max-w-7xl  p-6 mx-auto grid lg:grid-cols-2 grid-cols-1 place-items-center gap-7 mt-16">
      <div className="relative overflow-hidden rounded-3xl ">
        <img
          className=" rounded-2xl w-[39rem] hover:scale-110 transition-all duration-700"
          src="../../public/OverviewSection/m8_collection_01 (1).jpeg"
          alt=""
        />
        <h3 className="rounded-r-full absolute top-0 bg-white px-7 lg:w-72 md:w-52 lg:py-3 md:py-3 py-2  lg:text-lg text-base  ">
          Elegence in Knits
        </h3>
        <p className="rounded-r-full bg-white px-7 absolute lg:top-10 md:top-10 top-9 lg:py-4 md:py-3 py-2 lg:text-2xl tracking-widest font-semibold ">
          The winter Wonderland Sweater
        </p>
      </div>
      <div>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            className="rounded-2xl w-full hover:scale-110 transition-all duration-700"
            src="../../public/OverviewSection/m8_collection_021.jpeg"
            alt=""
          />
          <h3 className="rounded-r-full absolute bottom-0  bg-white px-7 lg:w-72  lg:py-3 md:py-3 py-2  lg:text-lg text-base ">
            ELEGANCE IN CARRYALLS
          </h3>
          <p className="rounded-r-full bg-white px-7 absolute lg:bottom-11 md:bottom-11 bottom-10  lg:py-4 md:py-3 py-2 lg:text-2xl  tracking-widest font-semibold ">
            A Symphony of Women's Bags
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
