import React from "react";
import Slogan from "../components/Gallery/Slogan";
import ImageSlider from "../components/Gallery/ImageSlider";

const Gallery = () => {
  return (
    <div className="overflow-x-hidden">
      <Slogan comment="Kickstart Your Mornings with a Boost! These products come highly recommended for a vibrant start!" />
      <ImageSlider />
    </div>
  );
};

export default Gallery;
