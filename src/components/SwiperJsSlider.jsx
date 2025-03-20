import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const SwiperJsSlider = ({ projectItem }) => {
  console.log(projectItem);

  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {projectItem.map((el) => (
        <SwiperSlide key={el.id}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperJsSlider;
