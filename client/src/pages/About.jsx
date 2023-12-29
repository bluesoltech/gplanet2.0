import React from "react";
import Img1 from "../assets/images/gpr_logo.png";

const About = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img className="max-h-full max-w-full" src={Img1} alt="" />
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">About Green Planet Run</h2>
            <p className=""></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
