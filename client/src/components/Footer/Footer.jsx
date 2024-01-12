import React, { useEffect, useState, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
    display: "Register Now",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const quickLinks04 = [
  {
    display: "Privacy Policy",
    content:
      `<ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ This privacy policy sets out how West Land Gadgetry LLP uses and protects any information that you give West Land Gadgetry LLP when you visit their website and/or agree to purchase from them.</li>
    <li>⦿ West Land Gadgetry LLP is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</li>
     </ul>
     <br>
    <ul>
    <h4><b><u>We may collect the following information:</u></b></h4>
    <li>⦿ Name</li>
    <li>⦿ Contact information including email address</li>
    <li>⦿ Demographic information such as postcode, preferences and interests, if required<li>
    <li>⦿ Other information relevant to customer surveys and/or offer</li>
    <li>⦿ What we do with the information we gather</li>
    </ul>
    <br>
    <ul>
    <h4><b><u>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</u></b></h4>
    <li>⦿ Internal record keeping.</li>
    <li>⦿ We may use the information to improve our products and services.</li>
    <li>⦿ We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
    <li>⦿ From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
    <li>⦿ We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</li>
    </ul>
    <br>
    <ul>
    <h4><b><u>How we use cookies:</u></b></h4>
    <li>⦿ A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</li>
    <li>⦿ We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</li>
    <li>⦿ Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</li>
    <li>⦿ You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</li>
    <li>⦿ Controlling your personal information</li>
    </ul>
    <br>
    <ul>
    <h4><b><u>You may choose to restrict the collection or use of your personal information in the following ways:</u></b></h4>
    <li>⦿ whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
    <li>⦿ if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at</li>
    <li>⦿ We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</li>
    <li>⦿ If you believe that any information we are holding on you is incorrect or incomplete, please write to E/102, Anand Crystal, Nr. Anand Vihar, Tragad RD Ahmedabad GUJARAT 380027 . or contact us at or as soon as possible. We will promptly correct any information found to be incorrect.</li>
    </ul>`

  },
  {
    display: "Terms & Conditions",
    content: `<ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean West Land Gadgetry LLP, whose registered/operational office is E/102, Anand Crystal, Nr. Anand Vihar, Tragad RD Ahmedabad GUJARAT 380027 . "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</li>
    </ul>
    <br>
    <ul>
    <h4><b><u>Your use of the website and/or purchase from us are governed by following Terms and Conditions:</u></b><h4>
    <li>⦿ The content of the pages of this website is subject to change without notice.</li>
    <li>⦿ Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
    <li>⦿ Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</li>
    <li>⦿ Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
    <li>⦿ All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
    <li>⦿ Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
    <li>⦿ From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
    <li>⦿ You may not create a link to our website from another website or document without West Land Gadgetry LLP’s prior written consent.</li>
    <li>⦿ Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India .</li>
    <li>⦿ We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
    </ul>`
  },
  {
    display: "Cancellation",
    content: `
    <ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ No cancellations & Refunds are entertained</li>
    </ul>
    `,
  },
  {
    display: "Refund Policy",
    content: `
    <ul>
    <li>⦿ Last updated on Jan 9th 2024</li>
    <li>⦿ No cancellations & Refunds are entertained</li>
    </ul>
    `,
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

  const year = new Date().getFullYear;
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
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-nowwrap gap-[30px]">
          <div>
            <img className="max-w-[200px]" src={logo} alt="logo"/>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Blue Soltech PVT. LTD. ALL rights
              reserved.
            </p>
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
          <div>
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
          <div>
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
          <div>
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
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Privacy & Security
            </h2>
            <ul>
              {quickLinks04.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    key={index}
                    onClick={() => handleLinkClick(item.display, item.content)}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
     
      </div>
      {isPopupOpen && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-[99999] shadow-xs">
          <div ref={wrapperRef} className="bg-gray-100 rounded-md w-[1000px] xsm:w-[250px] md:w-[850px] max-h-[600px] h-auto overflow-y-auto overflow-x-hidden">
            <div className="flex w-full p-2 m-0 items-center bg-white text-black shadow-lg">
              <div className="justify-center justify-items-center w-full ">
                <h2 className="flex text-xl font-bold !justify-center justify-self-center">{selectedLink.display}</h2>
              </div>
              <div className="flex justify-end justify-items-end text-end">
                <button className="justify-end justify-items-end" onClick={closePopup}><IoCloseCircle className="h-8 w-8" /></button>
              </div>
            </div>
            <div className="px-3 mt-2 mb-3">
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedLink.content }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
