import React from "react";
import { IoPlayOutline } from "react-icons/io5";

function Video() {
  return (
    <div className="max-w-7xl  mx-auto flex justify-center relative mt-5 overflow-hidden">
      <img
        className="lg:rounded-2xl relative "
        src="../../public/Video/m8_video_bg.jpeg"
        alt=""
      />
      <div className="max-w-[30rem] absolute lg:mt-10 md:mt-8 mt-2  w-full flex flex-col px-3 lg:gap-5 md:gap-3 gap-1 items-center ">
        <h2 className="lg:text-4xl md:text-4xl text-2xl mt-1 font-bold text-center ">
          Timeless Beauty The Vintage Classic Revival
        </h2>
        <p className="text-slate-600  text-center ">
          A collection name should reflect the theme, style, or inspiration
          behind the furniture pieces.
        </p>
        <button className=" hover:bg-yellow-500 transition-colors duration-300 lg:p-5 lg:mt-5 md:p-3 p-2 md:mt-3  bg-black rounded-full ">
          <IoPlayOutline size={25} className="  text-white" />
        </button>
      </div>
    </div>
  );
}

export default Video;
