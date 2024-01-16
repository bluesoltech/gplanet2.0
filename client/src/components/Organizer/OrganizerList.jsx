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
    desc: "Technogreen is into integrated management of electronic waste and recycling. With environmental sustainability at heart, and to create a positive social impact, they turn electronic waste into opportunities, addressing the pressing issue of meaningful employment in a digital world. Being EPR Consultants, aligned with CPCB guidelines; they ensure that Electrical and Electronic Equipment (EEE) is responsibly channeled, dismantled, and recycled.",
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
