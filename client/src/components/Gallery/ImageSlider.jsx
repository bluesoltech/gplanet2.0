import React from "react";
import { Link } from "react-router-dom";

import Slide from "./Slide";
import Slider from "react-slick";

const ImageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <Slider {...settings} className="">
          <Slide add="/assets/images/Gallery/img1.jpg" className="" />
          <Slide add="/assets/images/Gallery/img2.jpg" />
          <Slide add="/assets/images/Gallery/img4.jpg" />
          <Slide add="/assets/images/Gallery/img5.jpg" />
          <Slide add="/assets/images/Gallery/img6.jpg" />
          <Slide add="/assets/images/Gallery/img7.jpg" />
          <Slide add="/assets/images/Gallery/img8.jpg" />
          <Slide add="/assets/images/Gallery/img9.jpg" />
          <Slide add="/assets/images/Gallery/img10.jpg" />
          <Slide add="/assets/images/Gallery/img11.jpg" />
          <Slide add="/assets/images/Gallery/img12.jpg" />
          <Slide add="/assets/images/Gallery/img13.jpg" />
          <Slide add="/assets/images/Gallery/img14.jpg" />
          <Slide add="/assets/images/Gallery/img15.jpg" />
          <Slide add="/assets/images/Gallery/img16.jpg" />
          <Slide add="/assets/images/Gallery/img17.jpg" />
          <Slide add="/assets/images/Gallery/img18.jpg" />
          <Slide add="/assets/images/Gallery/img19.jpg" />
          <Slide add="/assets/images/Gallery/img20.jpg" />
        </Slider>
      </div>
      <div className="flex justify-center mt-[100px]">
        <Link
          to="https://drive.google.com/drive/folders/1S8kxY4--PphormxVUKbSjBFyNGUOfs6W?usp=sharing"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] 
            transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
            dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="mr-1 h-4 w-4">
            <path
              fillRule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
              clipRule="evenodd"
            />
          </svg>
          More Images
        </Link>
      </div>
    </section>
  );
};

export default ImageSlider;
