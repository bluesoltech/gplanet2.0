import React from "react";
import img1 from "../../assets/images/Gallery/Gallery_1.png";
import img2 from "../../assets/images/Gallery/Gallery_2.png";

const Slogan = ({ name, position, comment }) => {
  return (
    <div className="flex flex-col items-center justify-center p-0 md:p-10 m-2 md:m-4 rounded-5 text-center h-full">
      <img loading="lazy"  className="w-[30px] h-[30px]" src={img1} />
      <p className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 w-full md:w-1/2 lg:w-2/5 font-normal text-gray-500">
        {comment}
      </p>

      <img loading="lazy"  className="w-[30px] h-[30px]" src={img2} />
    </div>
  );
};

export default Slogan;
