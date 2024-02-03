import React from "react";
import Dropdown1 from "../components/Result/Dropdown1";
import bgimg from "../assets/images/result.jpg"

const Results = () => {
  return (
    <div style={{ "background": `url(${bgimg})`, "background-repeat": "no-repeat", "background-size": "cover" }} className="md:p-[100px] hero_section h-auto bg-contain flex items-center justify-center text-3xl text-textColor ">
      <Dropdown1 />
    </div>
  );
};

export default Results;
