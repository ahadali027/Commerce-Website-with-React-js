import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function ProductCards({ img, hover_img, title, price }) {
  return (
    <div className="w-full overflow-hidden hover:shadow-md transition-all p-5">
      <div className="w-full relative rounded-2xl overflow-hidden ">
        <img className="w-full relative " src={img} alt="" />
        <div className="flex  flex-col absolute top-8 right-5 gap-3">
          <span className="bg-white p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
            <FaRegHeart />
          </span>
          <span className="bg-white p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
            <IoSearch />
          </span>
        </div>
      </div>

      <p className="font-medium mt-5  text-[16px] cursor-pointer hover:text-yellow-500 transition-colors">
        {title}
      </p>
      <p className="mt-2 text-gray-600">{price}</p>
    </div>
  );
}

export default ProductCards;
