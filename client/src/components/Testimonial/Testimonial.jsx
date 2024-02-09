import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiStar } from "react-icons/hi";
import { testimonial } from "../../../public/assets/data/testimonial";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="my-[15vh] lg:my-[20vh]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1254: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {testimonial.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img
                  loading="lazy"
                  className="max-h-[52px]"
                  src={review.img_url}
                  alt=""
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                    <HiStar className="text-yellow-500 w-[18px] h-5" />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                {review.msg}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
