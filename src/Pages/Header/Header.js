import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdWork } from "react-icons/md";

import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        
        className={`flex items-center text-text text-xl cursor-pointer gap-x-2 p-1 font-medium ${
          activeLink === "home" ? "text-green-500" : "text-text"
        }`}
      >
        <Link
          to={"/home"}
          className="flex gap-1"
          onClick={() => handleLinkClick("home")}
        >
          <IoMdHome className="text-3xl" />
          <div className="flex items-center">Home</div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center text-text text-xl cursor-pointer gap-x-2 p-1 font-medium ${
          activeLink === "about-me" ? "text-green-500" : "text-blue-gray"
        }`}
      >
        <Link
          to={"/about-me"}
          className="flex gap-1"
          onClick={() => handleLinkClick("about-me")}
        >
          <IoPersonSharp className="text-3xl" />
          <div className="flex items-center">About Me</div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center text-text text-xl cursor-pointer gap-x-2 p-1 font-medium ${
          activeLink === "experiences" ? "text-green-500" : "text-blue-gray"
        }`}
      >
        <Link
          to={"/experiences"}
          className="flex gap-1"
          onClick={() => handleLinkClick("experiences")}
        >
          <MdDashboard className="text-3xl" />
          <div className="flex items-center">Experiences</div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center text-text text-xl cursor-pointer gap-x-2 p-1 font-medium ${
          activeLink === "projects" ? "text-green-500" : "text-blue-gray"
        }`}
      >
        {" "}
        <Link
          to={"/projects"}
          className="flex gap-1"
          onClick={() => handleLinkClick("projects")}
        >
          <MdDashboard className="text-3xl" />
          <div className="flex items-center">Projects</div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center text-text text-xl cursor-pointer gap-x-2 p-1 font-medium ${
          activeLink === "contacts" ? "text-green-500" : "text-blue-gray"
        }`}
      >
        <Link
          to={"/contacts"}
          className="flex gap-1"
          onClick={() => handleLinkClick("contacts")}
        >
          <MdWork className="text-3xl" />

          <div className="flex items-center">Contact ME</div>
        </Link>
      </Typography>
    </ul>
  );
  return (
    <div>
      <Navbar className=" fixed top-0  max-w-full shadow-xl z-10 bg-BgBtn border-none rounded-none  px-4 py-2 lg:px-8 lg:py-4">
        <div className=" flex items-center justify-around ">
          <Link to={"/home"}>
          <Typography
            as="a"
            href="#home"
            className="mr-4 text-2xl cursor-pointer py-1.5 font-bold"
          >
            <span className="text-[#02a65a]">Sorphea</span>{" "}
            <span className="text-text">Vimean</span>
          </Typography>
          </Link>
          
          <div className="hidden lg:block">{navList}</div>
          {/* <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div> */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <MobileNav open={openNav}>
          <div className="container ">
            {navList}
            {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
