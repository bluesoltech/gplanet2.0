import React, { useState, useEffect } from "react";
import ReactSwipe from "react-swipe";
import { Link } from "react-router-dom";

import Image1 from "../assets/images/Img1.jpg";
import BannerL from "../assets/images/Banner_large.jpg";
import BannerS from "../assets/images/Banner_small.jpg";
import Image2 from "../assets/images/Img2.jpg";
import Image3 from "../assets/images/Img3.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import PlantIcon from "../components/Header/PlantIcon";
import km5 from "../assets/images/5 KM Run.jpg";
import km10 from "../assets/images/10 KM Run.jpg";
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const isMobile = windowWidth <= 768;
  return (
    <>
      {/* Slider  */}

      {/* <div className="hero_section  p-10">
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
      </div> */}
      <div className="hero_section p-1 flex justify-center md:p-10 ">
        <img src={isMobile ? BannerS : BannerL} className="rounded-xl"></img>
      </div>

      {/* Hero  */}

      <section className="pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Participate in The Green Planet Run 2.0 <br />
                  <span className="text-greenColor"> Green Planet Run!</span>
                </h1>
                <p className="text_para">
                  As you participate in this event, you contribute towards a good cause that helps keep planet Earth Fit and Fine. This is an opportunity to be a part of a global cause where your participation powers the mission to help keep our earth Green while conveying your commitment to recycling waste. Running is good for you, it keeps you physically and mentally fit.
                </p>

                <Link to="/register">
                  <button className="btn">Register</button>
                </Link>
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

      <div className="grid m-auto max-w-[1240px] py-8 px-3 w-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0">
        <div className="sm:justify-center m-auto order-1 sm:order-2 md:order-2  flex-nowwrap">
          <img
            src={km5}
            className="h-auto  w-full flex justify-self-start  max-w-[370px]  rounded-3xl p-2"
            alt="Image2"
          />
        </div>

        <div className="flex justify-center order-2 min-w-[360px] md:order-1 max-h-[350px] flex-wrap m-auto  pb-20">
          <h2 className="text-3xl">5&nbsp;KM Fun Run</h2>
          <p className=" mt-5 m-auto px-28">
            An event organized Professionally in association with experienced Marathoners.
            This specially carved Run is suited for all age groups.
            Water, refreshments, medical support, and the team of volunteers cheer the participants.
            T-shirts, Medals, Prizes, BIB, etc.

          </p>
          <Link onClick={(e) => { e.preventDefault(); window.location.href = '/register'; }}>
           
            <button class=" flex button mt-7">
              <div class="top ">Register</div>
              <div class="bottom">₹300</div>
            </button>
          </Link>
        </div>

        <div className="flex justify-center m-auto sm:justify-center order-3 id h-auto  flex-nowwrap">
          <img
            src={km10}
            className="h-auto rounded-3xl p-2 flex justify-self-center  max-w-[370px] "
            alt="Image3"
          />
        </div>

        <div className="flex justify-center order-4 min-w-[360px] md:order-4 md:max-h-[350px] m-auto flex-wrap ">
          <h2 className="text-3xl">10&nbsp;KM Time Run</h2>
          <p className="px-28 m-auto mt-5">
            This Run is for Joggers and athletes who practice regularly.
            Different age categories are marked for this Run.
            Prizes for all age categories like:
            _____ to _____ years
            _____ to _____ years
            _____ to _____ years
            Water, refreshments, medical support, and the team of volunteers cheer the participants.
            T-shirts, Medals, Prizes, BIB, etc.

          </p>
          <Link to="/register">
            {" "}
            <button class=" flex mt-7  button">
              <div class="top ">Register</div>
              <div class="bottom">₹350</div>
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonial */}
      <section className="">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Past Participants</h2>
            <p className="text_para text-center">
              Green Planet Run was conducted on 13th November 2022
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
