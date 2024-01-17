import React from "react";

const Slide = (props) => {
  return (
    <div className={` max-w-full mx-7 mb-[20px]`}>
      <img className={`h-full w-full`} src={props.add} alt="" />
    </div>
  );
};

export default Slide;
