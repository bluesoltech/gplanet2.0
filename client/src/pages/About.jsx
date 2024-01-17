import React from "react";
import Img1 from "../assets/images/gpr_logo2.png";
import OrganizerList from "../components/Organizer/OrganizerList";
import Slider from "react-slick";
import img2 from '../assets/images/Logos/logo1.png';
import img3 from '../assets/images/Logos/logo2.png';
import img4 from '../assets/images/Logos/logo3.png';
import img5 from '../assets/images/Logos/logo4.png';
import img6 from '../assets/images/Logos/logo5.png';
import img7 from '../assets/images/Logos/logo6.png';
import img8 from '../assets/images/Logos/logo7.png';
import img9 from '../assets/images/Logos/logo8.png';
import img10 from '../assets/images/Logos/logo9.png';
import img11 from '../assets/images/Logos/logo10.png';
import img12 from '../assets/images/Logos/logo11.png';
import img13 from '../assets/images/Logos/logo12.png';
import img14 from '../assets/images/Logos/logo13.png';
import img15 from '../assets/images/Logos/logo14.png';

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row align-items-center">
            <div className="relative lg:h-[600px] w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img className="max-h-full max-w-full" src={Img1} alt="" />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">
                Green <span className="text-greenColor">Planet</span> Run
              </h2>
              <p className="text_para">
                We have seen catastrophic events and natural disasters of alarming proportions increasing every year. This is due to the negligence of us humans towards preserving the environment.
              </p>
              <br />

              <p className="text_para">
                Leading a sustainable lifestyle that preserves the earth's resources is one great solution to keep the earth healthy.
              </p>
              <br />
              <p className="text_para">
                It is our collective responsibility to raise the awareness of preserving the earth’s resources through recycling waste especially the e-waste as it has a great impact on the environment.
                {/* <span className="text-greenColor font-bold">
                  ‘Fit India Movement’
                </span> */}
              </p>
              <br />
              <p className="text_para">
                Participate in this Run and be a part of an event that helps promote a Green Earth through Green Run.
              </p>
              <br />
              {/* <p className="text_para">
                PM Modi also administered a fitness pledge to the people of the
                country. The aim of the 'Fit India movement' is to encourage
                people to prioritise sports and fitness in their day-to-day
                lives.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Organizers</h2>
            <p className="text_para text-center">
              RPlanet Integrated Solutions Pvt.Ltd. and Technogreen Recycling Pvt.Ltd. are jointly organizing the Planet Green Run 2.0 event.
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
                <img className="w-[150px]" src={img5} />
              </div>
              <div>
                <img className="w-[150px]" src={img4} />
              </div>
              <div>
                <img className="w-[150px]" src={img3} />
              </div>
              <div>
                <img className="w-[150px]" src={img2} />
              </div>
              <div>
                <img className="w-[150px]" src={img6} />
              </div>
              <div>
                <img className="w-[150px]" src={img8} />
              </div>
              <div>
                <img className="w-[150px]" src={img7} />
              </div>
              <div>
                <img className="w-[150px]" src={img9} />
              </div>
              <div>
                <img className="w-[150px]" src={img10} />
              </div>
              <div>
                <img className="w-[150px]" src={img15} />
              </div>
              <div>
                <img className="w-[150px]" src={img14} />
              </div>
              <div>
                <img className="w-[150px]" src={img12} />
              </div>
              <div>
                <img className="w-[150px]" src={img13} />
              </div>
              <div>
                <img className="w-[150px]" src={img11} />
              </div>

            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
