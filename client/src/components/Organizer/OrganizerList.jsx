import React from "react";
import OrganizerCard from "./OrganizerCard";

const OrganizerList = () => {
  const rplanet = {
    name: "RPlanet Intergrated Solutions PVT. LTD.",
    desc: "The RPlanet e-waste and plastic recycling plants are capable to completely disintegrate the e-waste and recycling takes place treating harmful consequences caused to the environment in the most eco-friendly way.",
    address: "https://rplanet.in/about-us",
  };
  const technogreen = {
    name: "Technogreen Recycling PVT. LTD.",
    desc: "Turning electronic waste into opportunity to solve the problem of meaningful employment in a digital world. #recycleforimpact",
    address: "https://www.technogreen.in/",
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[30px]">
      <OrganizerCard item={rplanet} />
      <OrganizerCard item={technogreen} />
    </div>
  );
};

export default OrganizerList;
