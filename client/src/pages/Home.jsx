import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { CountDown } from "../components/CountDown/CountDown";
import Testimonial from "../components/Testimonial/Testimonial";

import "./Home.css";

const Home = () => {
  const BannerRef = useRef(null);
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
  }, []);

  const isMobile = windowWidth <= 768;

  // useEffect(() => {
  //   const BannerImageDiv = document.querySelector(".Banner-blur");
  //   const img = BannerImageDiv.querySelector("img");
  //   function loaded() {
  //     BannerImageDiv.classList.add("loaded");
  //   }
  //   if (img.complete) {
  //     loaded();
  //   } else {
  //     img.addEventListener("load", loaded);
  //   }
  // }, [BannerRef]);

  return (
    <div className="">
      <div className="hero_section p-1 flex justify-center md:p-10 ">
        <Link to="/register">
          <div
            className="div-blur aspect-[2/1] w-screen h-auto md:aspect-[970/251] md:w-[750px] lg:w-[100%]"
            style={{
              backgroundImage: `${
                isMobile
                  ? "url(/assets/images/Banner_small-small.jpg)"
                  : "url(/assets/images/BannerLarge-small.png)"
              }`,
            }}
          >
            <img
              src={
                isMobile
                  ? "/assets/images/Banner_small.jpg"
                  : "/assets/images/BannerLarge.png"
              }
              className="w-full rounded-xl object-center object-cover block"
              loading="lazy"
            ></img>
          </div>
        </Link>
      </div>
      <CountDown></CountDown>
      <section className="md:pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Participate in The <br />
                  <span className="text-greenColor"> Green Planet Run 2.0</span>
                </h1>
                <p className="text_para text-justify">
                  As you participate in this event, you contribute towards a
                  good cause that helps keep planet Earth Fit and Fine. This is
                  an opportunity to be a part of a global cause where your
                  participation powers the mission to help keep our earth Green
                  while conveying your commitment to recycling waste. Running is
                  good for you, it keeps you physically and mentally fit.
                </p>

                <Link to="/register">
                  <button className="btn">Register</button>
                </Link>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[20px] md:text-[36px] md:leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1,00,000+
                  </h2>
                  <span className="w-1/3 md:w-[100px] h-2 bg-greenColor rounded-full block mt-[-14px]"></span>
                  <p className="text-[12px] md:text-[18px] md:leading-[30px] font-[400] text-textColor mt-[18px]">
                    Last Year Prizes Worth
                  </p>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[36px] md:leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5,000+
                  </h2>
                  <span className="w-1/3 md:w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                  <p className="text-[12px] md:text-[18px] md:leading-[30px] font-[400] text-textColor mt-[18px]">
                    Last Year Participants
                  </p>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[36px] md:leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    16+
                  </h2>
                  <span className="w-1/3 md:w-[100px] h-2 bg-blue-300 rounded-full block mt-[-14px]"></span>
                  <p className="text-[12px] md:text-[18px] md:leading-[30px] font-[400] text-textColor mt-[18px]">
                    Total Sponsors
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[5px] md:gap-[30px] justify-end">
              <div
                className="rounded-xl div-blur aspect-square max-w-[370px] h-fit"
                style={{
                  backgroundImage: "url(/assets/images/img11-small.jpg)",
                }}
              >
                <img
                  loading="lazy"
                  className="h-auto w-[370px] rounded-xl"
                  src="/assets/images/img11.jpg"
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <div
                  className="rounded-xl div-blur aspect-square max-w-[270px] h-fit"
                  style={{
                    backgroundImage: "url(/assets/images/IMG22-small.jpg)",
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/IMG22.jpg"
                    alt=""
                    className="h-auto w-[270px] mb-[30px] rounded-xl hover: "
                  />
                </div>
                <div
                  className="rounded-xl div-blur aspect-square max-w-[270px] h-fit"
                  style={{
                    backgroundImage: "url(/assets/images/IMG33-small.jpg)",
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/IMG33.jpg"
                    alt=""
                    className="h-auto w-[270px] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid m-auto md:mt-[100px] max-w-[1240px] py-8 px-3 w-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0">
        <div className="flex justify-center mt-[10px] md:mt-[60px] sm:justify-center order-1 md:order-2 id h-auto  flex-nowwrap">
          <div
            className="rounded-xl div-blur aspect-square w-full md:w-[370px] h-fit"
            style={{
              backgroundImage: "url(/assets/images/5KM-small.jpg)",
            }}
          >
            <img
              loading="lazy"
              src="/assets/images/5KM.jpg"
              className="h-auto rounded-3xl p-2 flex justify-self-center w-full md:max-w-[370px]"
            />
          </div>
        </div>

        <div className="flex justify-center order-2 w-full md:min-w-[360px] md:order-1 md:max-h-[350px] flex-wrap m-auto md:pb-20">
          <h2 className="text-3xl">5&nbsp;KM Fun Run</h2>

          <div className="mt-2 m-auto md:px-10 text-[14px] text-justify md:px-12 lg:px-28 ">
            5KM run typically refers to a running event or race with a total
            distance of 5 kilometers (approximately 3.1 miles). This distance is
            a common choice for various running events, promoting fitness,
            fundraising, or community engagement. Participants in a 5KM run
            cover the specified distance, and it's a popular distance for both
            casual runners and competitive athletes.
            <br></br>
            <p className="mt-2">
              <span className="font-bold">Participants will receive:</span>{" "}
              <br></br>T-shirts, Medals, Non-Time BIB, etc.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/register">
              <button className=" flex button mt-7">
                <div className="top">Register</div>
                <div className="bottom">₹300</div>
              </button>
            </Link>

            <p className="text-textColor text-[10px] text-center mt-2">
              Note: No Cash prizes for this category will be awarded
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-[10px] md:mt-[60px] sm:justify-center order-3 id h-auto  flex-nowwrap">
          <div
            className="rounded-xl div-blur aspect-square w-full md:w-[370px] h-fit"
            style={{
              backgroundImage: "url(/assets/images/10KM-small.jpg)",
            }}
          >
            <img
              loading="lazy"
              src="/assets/images/10KM.jpg"
              className="h-auto rounded-3xl p-2 flex justify-self-center w-full md:max-w-[370px] "
            />
          </div>
        </div>

        <div className="flex justify-center order-4 w-full md:min-w-[360px] md:order-4 md:max-h-[350px] md:mt-[60px] flex-wrap ">
          <h2 className="text-3xl">10&nbsp;KM Time Run</h2>
          <div className="md:px-10 lg:px-28 text-[14px] text-justify m-auto mt-3">
            10KM run refers to a running event or race with a total distance of
            10 kilometers, which is approximately 6.2 miles. Similar to the 5KM
            run, the 10KM run is a popular distance for various running events,
            ranging from casual runs to competitive races. It attracts
            participants of different fitness levels and is often used for
            fitness challenges, fundraisers, and community events. Participants
            in a 10KM run cover the specified distance, challenging themselves.
            <br></br>
            <p className="mt-2">
              <span className="font-bold">Participants will receive:</span>{" "}
              <br></br>T-shirts, Medals, Winner Prizes Money, Time BIB, etc.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/register">
              {" "}
              <button className=" flex mt-7  button">
                <div className="top ">Register</div>
                <div className="bottom">₹350</div>
              </button>
            </Link>
            <p className="text-textColor text-[10px] text-center mt-2">
              Note: Cash prizes for this category will be announced soon
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
