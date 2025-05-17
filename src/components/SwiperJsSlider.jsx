import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const SwiperJsSlider = ({ projectItem }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      modules={[Pagination, Autoplay]}
    >
      {projectItem.map((el) => (
        <SwiperSlide key={el.id}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperJsSlider;
