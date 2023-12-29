import React from "react";
import ReactSwipe from "react-swipe";

import Image1 from "../assets/images/Img1.jpg";
import Image2 from "../assets/images/Img2.jpg";
import Image3 from "../assets/images/Img3.jpg";

const Home = () => {
  let reactSwipeE1;
  return (
    <>
      {/* Slider  */}

      <div className="hero_section  p-10">
        <ReactSwipe
          className="carousel w-full"
          swipeOptions={{ continuous: true, auto: 5000, disableScroll: false }}
          ref={(el) => (reactSwipeE1 = el)}
        >
          <div className="flex justify-center items-center 2xl:h-[800px] w-full">
            <img src={Image1} className="max-w-full max-h-full rounded-2xl" />
          </div>
          <div className="flex justify-center items-center 2xl:h-[800px]">
            <img src={Image2} className="max-w-full max-h-full rounded-2xl" />
          </div>
          <div className="flex justify-center items-center 2xl:h-[800px]">
            <img src={Image3} className="max-w-full max-h-full rounded-2xl" />
          </div>
        </ReactSwipe>
        <div className="flex items-center justify-center pt-5">
          <button
            type="button"
            className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() => reactSwipeE1.prev()}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-400/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-400/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() => reactSwipeE1.next()}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-gray-400/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-400/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      {/* Hero  */}

      <section className="pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Let’s be a part of the best running experience this
                  <span className="text-greenColor"> Green Planet Run!</span>
                </h1>
                <p className="text_para">
                  The run is about celebrating the passion of environmental
                  sustainability and improvising reusable economy. This run is
                  also for health awareness & advocating appropriate handling of
                  e-waste as it impacts our health due to hazardous gases &
                  particles.
                </p>

                <button className="btn">Register Now</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1,00,000+
                  </h2>
                  <span className="w-[100px] h-2 bg-greenColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Last Year Prizes Worth</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5,000+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Last Year Participants</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    16+
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-300 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Total Sponsors</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="h-auto w-[370px] rounded-xl"
                  src={Image1}
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <img
                  src={Image2}
                  alt=""
                  className="h-auto w-[270px] mb-[30px] rounded-xl hover: "
                />
                <img
                  src={Image3}
                  alt=""
                  className="h-auto w-[270px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center"></h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
