import { useEffect, useRef } from "react";
// import logo3 from "../../assets/images/logo3.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/bib-expo",
    display: "EventInfo",
    submenus: [
      {
        path: "/bib-expo",
        display: "BIB Expo",
      },
      {
        path: "/race-day-info",
        display: "Race Day Info.",
      },
      {
        path: "/route-maps",
        display: "Route Maps",
      },
      {
        path: "/prize-money",
        display: "Prize Money",
      },
    ],
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

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  let boxClass = ["main-menu menu-right menuq1"];

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center bg-white" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home">
              <img
                loading="lazy"
                src="/assets/images/logo3.png"
                alt=""
                className="max-w-[80%] tablet:max-w-[60%] md:max-w-[30%]"
              />
            </Link>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu mx-5 flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.submenus ? (
                    <div className="relative group text-center border-b-[1px] border-t-[1px] md:border-0">
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor h-[60px]"
                        }
                      >
                        {link.display}
                      </NavLink>
                      <ul className="md:absolute md:hidden md:bg-white md:group-hover:block md:mt-[-25px] md:ml-[-50px] md:shadow-md md:rounded-md z-[400] w-[200px] ">
                        {link.submenus.map((submenu, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-center justify-center h-[50px]"
                          >
                            <NavLink
                              to={submenu.path}
                              className="textmd:text-textColor text-[12px] md:text-[15px] h-full font-[600] hover:text-primaryColor flex items-center justify-center"
                            >
                              {submenu.display}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] font-[600]"
                          : "text-textColor text-[16px] font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
