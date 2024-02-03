import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Image1 from "../assets/images/Img1.jpg";
import IMG11 from "../assets/images/IMG11.jpg";
import IMG22 from "../assets/images/IMG22.jpg";
import IMG33 from "../assets/images/IMG33.jpg";

// import BannerL from "../assets/images/Banner_large.jpg";
import BannerL from "../assets/images/Banner_largeNew.jpg";
import BannerS from "../assets/images/Banner_small.jpg";
// import Image2 from "../assets/images/Img2.jpg";
// import Image3 from "../assets/images/Img3.jpg";
import km5 from "../assets/images/5 KM.jpg";
import km10 from "../assets/images/10 KM.jpg";
import { CountDown } from "../components/CountDown/CountDown";

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
    <div>
      {/* Slider  */}

      <div className="hero_section p-1 flex justify-center md:p-10 ">
        <Link to="https://allevents.by/23422580">
          <img loading="lazy"  src={isMobile ? BannerS : BannerL} className="rounded-xl"></img>
        </Link>
      </div>

      {/* Hero  */}
      <CountDown></CountDown>
      <section className="pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Participate in The <br />
                  <span className="text-greenColor">
                    {" "}
                    Green Planet Run 2.0
                  </span>
                </h1>
                <p className="text_para">
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
                <img loading="lazy" 
                  className="h-auto w-[370px] rounded-xl"
                  src={IMG11}
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <img loading="lazy" 
                  src={IMG22}
                  alt=""
                  className="h-auto w-[270px] mb-[30px] rounded-xl hover: "
                />
                <img loading="lazy" 
                
                  src={IMG33}
                  alt=""
                  className="h-auto w-[270px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid m-auto mt-[100px] max-w-[1240px] py-8 px-3 w-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0">
        <div className="sm:justify-center m-auto order-1 sm:order-2 md:order-2  flex-nowwrap">
          <img loading="lazy" 
          
            src={km5}
            className="h-auto w-full flex justify-self-center max-w-[370px]  rounded-3xl p-2"
            alt="Image2"
          />
        </div>

        <div className="flex justify-center order-2 min-w-[360px] md:order-1 max-h-[350px] flex-wrap m-auto pb-20">
          <h2 className="text-3xl">5&nbsp;KM Fun Run</h2>

          <div className="mt-2 m-auto px-10 text-[14px] text-justify md:px-12 lg:px-28 ">
            5KM run typically refers to a running event or race with a total distance of 5 kilometers (approximately 3.1 miles).
            This distance is a common choice for various running events, promoting fitness, fundraising, or community engagement.
            Participants in a 5KM run cover the specified distance, and it's a popular distance for both casual runners and competitive athletes.
            <br></br>
            <p className="mt-2"><span className="font-bold">Participants will receive:</span> <br></br>T-shirts, Medals, Non-Time BIB, etc.</p>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/register">
              <button class=" flex button mt-7">
                <div class="top">Register</div>
                <div class="bottom">₹300</div>
              </button>
            </Link>

            <p className="text-textColor text-[10px] text-center mt-2">
              Note: No Cash prizes for this category will be awarded
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-[60px] sm:justify-center order-3 id h-auto  flex-nowwrap">
          <img loading="lazy" 
          
            src={km10}
            className="h-auto rounded-3xl p-2 flex justify-self-center max-w-[370px] "
            alt="Image3"
          />
        </div>

        <div className="flex justify-center order-4 min-w-[360px] md:order-4 md:max-h-[350px] mt-[60px] flex-wrap ">
          <h2 className="text-3xl">10&nbsp;KM Time Run</h2>
          <div className="px-10 md:px-12 lg:px-28 text-[14px] text-justify m-auto mt-3">
            10KM run refers to a running event or race with a total distance of 10 kilometers, which is approximately 6.2 miles.
            Similar to the 5KM run, the 10KM run is a popular distance for various running events, ranging from casual runs to competitive races.
            It attracts participants of different fitness levels and is often used for fitness challenges,
            fundraisers, and community events. Participants in a 10KM run cover the specified distance, challenging themselves.<br></br>
            <p className="mt-2"><span className="font-bold">Participants will receive:</span> <br></br>T-shirts, Medals, Winner Prizes Money, Time BIB, etc.</p>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/register">
              {" "}
              <button class=" flex mt-7  button">
                <div class="top ">Register</div>
                <div class="bottom">₹350</div>
              </button>
            </Link>
            <p className="text-textColor text-[10px] text-center mt-2">
              Note: Cash prizes for this category will be announced soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
