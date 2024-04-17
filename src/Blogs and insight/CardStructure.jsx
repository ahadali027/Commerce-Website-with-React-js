import React from "react";

function CardStructure({ img, publisher, date, title, about, button }) {
  return (
    <div className="max-w-7xl w-96 mx-auto ">
      <div className="w-96 overflow-hidden cursor-pointer rounded-2xl">
        <img
          className="w-96 hover:scale-110 transition-all duration-700"
          src={img}
          alt=""
        />
      </div>
      <div className="p-1">
        <span className="flex gap-3 mt-3">
          <p className="text-sm font-medium">{publisher}</p>
          <p className="text-sm text-gray-500 font-medium">{date}</p>
        </span>
        <h2 className="text-[20px] mt-2 hover:text-yellow-500 transition-colors cursor-pointer font-semibold ">
          {title}
        </h2>
        <p className="mt-4 text-gray-700">{about}</p>
      </div>
      <button className="px-5 py-2 rounded-full mt-4 hover:bg-yellow-500 hover:border-transparent hover:text-white transition-colors duration-300 border">
        {button}
      </button>
    </div>
  );
}

export default CardStructure;
