import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/Gallery/img1.jpg";
import img2 from "../../assets/images/Gallery/img2.jpg";
import img4 from "../../assets/images/Gallery/img4.jpg";
import img5 from "../../assets/images/Gallery/img5.jpg";
import img6 from "../../assets/images/Gallery/img6.jpg";
import img7 from "../../assets/images/Gallery/img7.jpg";
import img8 from "../../assets/images/Gallery/img8.jpg";
import img9 from "../../assets/images/Gallery/img9.jpg";
import img10 from "../../assets/images/Gallery/img10.jpg";
import img11 from "../../assets/images/Gallery/img11.jpg";
import img12 from "../../assets/images/Gallery/img12.jpg";
import img13 from "../../assets/images/Gallery/img13.jpg";
import img14 from "../../assets/images/Gallery/img14.jpg";
import img15 from "../../assets/images/Gallery/img15.jpg";
import img16 from "../../assets/images/Gallery/img16.jpg";
import img17 from "../../assets/images/Gallery/img17.jpg";
import img18 from "../../assets/images/Gallery/img18.jpg";
import img19 from "../../assets/images/Gallery/img19.jpg";
import img20 from "../../assets/images/Gallery/img20.jpg";
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
          <Slide add={img1} className="" />
          <Slide add={img2} />
          <Slide add={img13} />
          <Slide add={img4} />
          <Slide add={img5} />
          <Slide add={img6} />
          <Slide add={img7} />
          <Slide add={img8} />
          <Slide add={img9} />
          <Slide add={img10} />
          <Slide add={img11} />
          <Slide add={img12} />
          <Slide add={img13} />
          <Slide add={img14} />
          <Slide add={img15} />
          <Slide add={img16} />
          <Slide add={img17} />
          <Slide add={img18} />
          <Slide add={img19} />
          <Slide add={img20} />
        </Slider>
      </div>
      <div className="flex justify-center mt-[100px]">
        
          <Link
          to="https://drive.google.com/drive/folders/1S8kxY4--PphormxVUKbSjBFyNGUOfs6W?usp=sharing"
            
            data-te-ripple-init
            data-te-ripple-color="light"
            class="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] 
            transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 
            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
            dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-1 h-4 w-4">
              <path
                fill-rule="evenodd"
                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                clip-rule="evenodd" />
            </svg>
            More Images
          </Link>
        
      </div>
    </section>
  );
};

export default ImageSlider;
