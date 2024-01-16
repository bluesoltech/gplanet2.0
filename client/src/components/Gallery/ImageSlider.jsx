import React from "react";
import img1 from "../../assets/images/Gallery/img1.jpg";
import img2 from "../../assets/images/Gallery/img2.jpg";
import img3 from "../../assets/images/Gallery/img3.jpg";
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
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
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
    </section>
  );
};

export default ImageSlider;
