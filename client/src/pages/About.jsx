import React from "react";
import OrganizerList from "../components/Organizer/OrganizerList";
import Slider from "react-slick";

// import img2 from "/assets/images/Logos/logo1.png";
// import img3 from "/assets/images/Logos/logo2.png";
// import img4 from "/assets/images/Logos/logo3.png";
// import img5 from "/assets/images/Logos/logo4.png";
// import img8 from "/assets/images/Logos/logo7.png";
// import img9 from "/assets/images/Logos/logo8.png";
// import img10 from "/assets/images/Logos/logo9.png";
// import img11 from "/assets/images/Logos/logo10.png";
// import img12 from "/assets/images/Logos/logo11.png";
// import img13 from "/assets/images/Logos/logo12.png";
// import img14 from "/assets/images/Logos/logo13.png";
// import img15 from "/assets/images/Logos/logo14.png";

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <>
      <section className="hero_section pt-[40px] 2xl:h-[600px] lg:h-[550px] ">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row align-items-center">
            <div className="relative lg:h-[600px] w-full lg:w-3/4 lg:w-1/2 xl:w-[560px] xl:top-[90px] z-10 order-2 lg:order-1 ">
              <img
                loading="lazy"
                className="max-h-full max-w-full rounded mx-auto"
                src="/assets/images/Banner.jpg"
                alt="image"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:h-vh xl:w-[670px] text-sm order-1 lg:order-2 md:justify-center 2xl:w-[600px]">
              <h2 className="heading lg:text-[50px] text-center mb-[20px] md:flex justify-center">
                Green <span className="text-greenColor">Planet</span> Run
              </h2>
              <p className="lg:text-[15px] lg:text-[10px] xl:text-[18px] xl:leading-[30px] font-[400] text-textColor mt-[15px] lg:text-[1]">
                We have seen catastrophic events and natural disasters of
                alarming proportions increasing every year. This is due to the
                negligence of us humans towards preserving the environment.
              </p>
              <br />
              <p className="lg:text-[15px] lg:text-[10px] xl:text-[18px] xl:leading-[30px] font-[400] text-textColor mt-[2px]">
                Leading a sustainable lifestyle that preserves the earth's
                resources is one great solution to keep the earth healthy.
              </p>
              <br />
              <p className="lg:text-[15px] lg:text-[10px] xl:text-[18px] xl:leading-[30px] font-[400] text-textColor mt-[3px]">
                It is our collective responsibility to raise the awareness of
                preserving the earth’s resources through recycling waste
                especially the e-waste as it has a great impact on the
                environment.
              </p>
              <br />
              <p className="lg:text-[15px] lg:text-[10px] xl:text-[18px] xl:leading-[30px] font-[400] text-textColor mt-[3px]">
                Participate in this Run and be a part of an event that helps
                promote a Green Earth through Green Run.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Organizers</h2>
            <div className="flex justify-center gap-5">
              <img
                loading="lazy"
                className="w-[150px]"
                src="/assets/images/Logos/logo9.png"
              />
              <img
                loading="lazy"
                className="w-[150px]"
                src="/assets/images/Logos/logo13.png"
              />
            </div>
            <p className="text_para text-center">
              RPlanet Integrated Solutions Pvt.Ltd. and Technogreen Recycling
              Pvt.Ltd. are jointly organizing the Planet Green Run 2.0 event.
              They are pioneers in e-waste management.
            </p>
          </div>
          <OrganizerList />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="heading text-center mb-5">Our past Sponsor</h2>
          <div>
            <Slider {...settings}>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo4.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo3.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo2.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo1.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo7.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo8.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo14.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo11.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo12.png"
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  className="w-[150px]"
                  src="/assets/images/Logos/logo10.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
