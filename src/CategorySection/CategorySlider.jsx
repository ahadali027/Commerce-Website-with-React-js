import React, { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import MyCardCategory from "./MyCardCategory";
import { CategoryCarddata } from "./CardData";

export default function CategorySlider() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
      spaceBetween={20}
      navigation={{
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
      }}
      breakpoints={{
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Navigation]}
      className="mySwiper relative "
    >
      {CategoryCarddata.map(({ img, title }) => (
        <SwiperSlide className="flex justify-center items-center relative">
          <MyCardCategory img={img} title={title} />
        </SwiperSlide>
      ))}

      <div className="flex justify-between  ">
        <button className="absolute top-1/2 z-10 -translate-y-1/2  swiper-prev-btn bg-yellow-500 p-2  rounded-full">
          <FaArrowLeftLong className="text-white" />
        </button>
        <button className="swiper-next-btn absolute top-1/2 z-10 right-0 -translate-y-1/2 bg-yellow-500 p-2  rounded-full">
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </Swiper>
  );
}
