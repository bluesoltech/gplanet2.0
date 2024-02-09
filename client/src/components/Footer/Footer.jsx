import React, { useEffect, useState, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo3.png";

import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/@GreenPlanetRun",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/GreenPlanetRunAhmedabad",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/company/greenplanetrun/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/green_planet_run/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://twitter.com/Greenplanetrun",
    icon: <RiTwitterXFill className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/results",
    display: "Results",
  },
];
const quickLinks02 = [
  {
    path: "/about",
    display: "Past Sponsors",
  },
  {
    path: "/about",
    display: "About Event",
  },
  {
    path: "/about",
    display: "About Organizer",
  },
];
const quickLinks03 = [
  {
    path: "/register",
    // path: "/register",
    display: "Register Now",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const quickLinks04 = [
  {
    path: "/bib-expo",
    display: "BIB Expo",
  },
  ,
  {
    path: "/race-day-info",
    display: "Race Day Information",
  },
  ,
  {
    path: "/route-maps",
    display: "Route Maps",
  },
  {
    path: "/prize-money",
    display: "Prize Money",
  },
];

const Footer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleLinkClick = (display, content) => {
    setPopupOpen(true);
    setSelectedLink({ display, content });
  };
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedLink(null);
  };

  // const year = new Date().getFullYear;
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopupOpen(false);
          setSelectedLink(null);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <footer className="pb-6 pt-10 ">
      <div className="container">
        <div className="border-b-[1px] border-t-[1px] p-4 flex flex-col items-center md:flex-row justify-between">
          <img
            loading="lazy"
            className="max-w-[200px]"
            src="/assets/images/logo3.png"
            alt="logo"
          />
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 flex-nowwrap gap-[20px] pt-4">
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Event Information
            </h2>
            <ul>
              {quickLinks04.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-[10px] mt-3 flex justify-center text-gray-400">
          <h1 className="mr-2">© COPYRIGHT GREEN PLANET RUN 2023-24</h1>
          <h1>This Website is Created & Managed by BlueSoltech</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
