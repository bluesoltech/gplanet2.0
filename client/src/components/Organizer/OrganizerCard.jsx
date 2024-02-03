import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const OrganizerCard = ({ item }) => {
  return (
    <div className="py-[30px] px-3 lg:px-5 border-[1px] border-primaryColor">
      <h2 className="text-[26px] leading-9 text-headingColor flex justify-center min-[320px]:text-center max-[600px] font-[700]">
        {item.name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {item.desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to={item.address}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default OrganizerCard;
