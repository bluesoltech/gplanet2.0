import React from "react";
import OrganizerCard from "./OrganizerCard";

const OrganizerList = () => {
  const rplanet = {
    name: "RPlanet Intergrated Solutions PVT. LTD.",
    desc: `RPlanet does eco-friendly recycling and reuse of electronic and plastic wastes. They have implemented reverse logistics for recycling E-waste as well as plastic waste to minimize threats to our environment. They are regularly conducting awareness programs at schools, colleges, etc. to imbibe a culture of environmental protection in the new generation. `,
    address: "https://rplanet.in/about-us",
  };
  const technogreen = {
    name: "Technogreen Recycling PVT. LTD.",
    desc: "At Technogreen, we are at the forefront of the electronic waste recycling movement.With deep commitment to environmental sustainability and social impact, we turnaelectronic waste into opportunities, addressing the pressing issue of meaningful aemployment in a digital world.",
    address: "https://www.technogreen.in/",
  };
  return (
    <div className="grid grid-cols-1 justify-center text-justify md:grid-cols-2 gap-5 mt-[30px]">
      <OrganizerCard item={rplanet} />
      <OrganizerCard item={technogreen} />
    </div>
  );
};

export default OrganizerList;
