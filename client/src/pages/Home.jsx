import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between"></div>
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Let’s be a part of the best running experience this
                  <span className="text-greenColor"> Green Planet Run!</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
