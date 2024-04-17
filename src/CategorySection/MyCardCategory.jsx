import React from "react";

export default function MyCardCategory({ title, img }) {
  return (
    <div className="w-48 mt-5 group relative flex flex-col items-center aspect-square">
      <div className="w-full aspect-square overflow-hidden rounded-full relative">
        <img
          className="w-full h-full rounded-full object-cover group-hover:scale-[1.1] transition-all duration-500 "
          src={img}
          alt=""
        />
      </div>
      <p className="font-bold mt-3 transition-colors group-hover:text-yellow-400 ">
        {title}
      </p>
    </div>
  );
}
