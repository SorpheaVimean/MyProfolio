import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="relative w-full bg-BgBtn pt-10">
        <div className=" w-full  px-8">
          <div className="grid grid-cols-1 justify-evenly gap-4 md:grid-cols-3">
            <Link to={"/home"}>
              <Typography variant="h5" className="mb-6 text-3xl">
                <span className="text-[#02a65a]">Sorphea</span>{" "}
                <span className="text-text">Vimean</span>
              </Typography>
            </Link>

            <Typography variant="h5" className="mb-6">
              <div className=""></div>
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              <ul>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 text-text font-medium opacity-70"
                >
                  Quick Links
                </Typography>

                <li>
                  <Link to={"/home"}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-text hover:text-BgBtnHover"
                    >
                      Home
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to={"/about-me"}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-text hover:text-BgBtnHover"
                    >
                      About Me
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to={"/experiences"}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-text hover:text-BgBtnHover"
                    >
                      Experiences
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to={"/projects"}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-text hover:text-BgBtnHover"
                    >
                      Projects
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to={"/contacts"}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-text hover:text-BgBtnHover"
                    >
                      Contact
                    </Typography>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex w-full items-center justify-center border-t  py-4 ">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-text md:mb-0"
            >
              &copy; 2024{" "}
              <a href="https://material-tailwind.com/">Sorphea Vimean</a>. All
              Rights Reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
