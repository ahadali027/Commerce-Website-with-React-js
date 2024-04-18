import React, { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import TopSellerCards from "./TopSellerCards";
import { TopSellerData } from "./TopSellerCardsData";
import TopSellerHeading from "./TopSellerHeading";

function TopSeller() {
  return (
    <div className="max-w-7xl mx-auto mt-10 ">
      <TopSellerHeading />
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-next-btn",
          prevEl: ".swiper-prev-btn",
        }}
        modules={[Navigation]}
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
        }}
        className="mySwiper relative flex items-center cursor-grab"
      >
        {TopSellerData.map(({ img, title, price }, ind) => (
          <SwiperSlide key={ind} className="">
            <TopSellerCards
              className=" z-10"
              img={img}
              title={title}
              price={price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopSeller;
