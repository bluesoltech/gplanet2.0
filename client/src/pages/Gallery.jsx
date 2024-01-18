import React from "react";
import Slogan from "../components/Gallery/Slogan";
import ImageSlider from "../components/Gallery/ImageSlider";

const Gallery = () => {
  return (
    <div className="overflow-x-hidden ">
      <Slogan comment="A healthy start to every day! I highly recommend these products, they do the trick" />
      <ImageSlider />
    </div>
  );
};

export default Gallery;
