import React from "react";
import Img1 from "../assets/images/gpr_logo.png";
import OrganizerList from "../components/Organizer/OrganizerList";

const About = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative lg:h-[600px] w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img className="max-h-full max-w-full" src={Img1} alt="" />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">
                Green <span className="text-greenColor">Planet</span> Run
              </h2>
              <p className="text_para">
                The run is about celebrating the passion of environmental
                sustainability and improvising reusable economy. This run is
                also for health awareness & advocating appropriate handling of
                e-waste as it impacts our health due to hazardous gasses &
                particles.
              </p>
              <br />

              <p className="text_para">
                Going in, you have to remember that the race is supposed to be
                the fun part...
              </p>
              <br />
              <p className="text_para">
                On The Occasion of National sports Day our prime minister Shri
                Narendra Modi ji launched the much-anticipated nation-wide
                <span className="text-greenColor font-bold">
                  ‘Fit India Movement’
                </span>
                .
              </p>
              <br />
              <p className="text_para">
                This race urged citizens to make fitness a daily habit. The aim
                of GREEN PLANET RUN is to encourage people to prioritize fitness
                in their routine Lives.
              </p>
              <br />
              <p className="text_para">
                PM Modi also administered a fitness pledge to the people of the
                country. The aim of the 'Fit India movement' is to encourage
                people to prioritise sports and fitness in their day-to-day
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Organizers</h2>
            <p className="text_para text-center">
              Green Planet Run is organized and managed by RPlanet Integrated
              Solution Pvt Ltd and Technogreen Recycling Pvt Ltd.
            </p>
          </div>
          <OrganizerList />
        </div>
      </section>
    </>
  );
};

export default About;
