import { useEffect, useRef, useContext } from "react";
// import logo from "../../assets/images/logo.png";
// import logo2 from "../../assets/images/Logo2.png";
import logo3 from "../../assets/images/logo3.png";
// import logo4 from "../../assets/images/logo4.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
// import { Dropdown } from 'primereact/dropdown'

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
    display: "Event_Information",
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
    ]
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
  const { user, token } = useContext(authContext);

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
                src={logo3}
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
                    <div className="relative group">
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {link.display}
                      </NavLink>
                      <ul className="absolute w-full hidden bg-white group-hover:block p-4 mt-1 shadow-md rounded-md z-[400]">
                        {link.submenus.map((submenu, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={submenu.path}
                              className="text-textColor text-[15px] h-[100px] font-[600] hover:text-primaryColor w-[500px]"
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
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link to="/users/profile/me">
                  {/* <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={userImg} className="w-full rounded-full" alt="" />
                  </figure> */}
                  <h2 className="text-lg font-semiBold p-1 bg-primaryColor rounded-[4px] text-white w-auto text-center">
                    {user?.name.split(" ")[0]}
                  </h2>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
