import React from "react";

function Offercard({ Icon, title, heading }) {
  return (
    <div className=" ">
      <div className="flex items-center gap-3">
        <span className="border border-gray-300 p-5 rounded-full">
          <Icon />
        </span>
        <div>
          <h2 className="font-medium">{title}</h2>
          <p className="text-gray-500">{heading}</p>
        </div>
      </div>
    </div>
  );
}

export default Offercard;
