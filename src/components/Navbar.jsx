import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full relative z-10 px-4   py-2 md:py-7 " id="nav">
      <div className="flex items-center justify-between">
        <div>
          <Link to="nav" smooth={true} duration={500}>
            <h2 className="text-[26px] cursor-pointer font-Inter-Sora text-white">
              @Portfolio
            </h2>
          </Link>
        </div>
        <div>
          <ul className="lg:flex gap-6 hidden  text-white cursor-pointer text-[16px] font-Inter-Sora">
            <li className="relative group">
              <Link
                to="home"
                className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
                >
                  About
                </Link>
              
            </li>
            <li className="relative group">
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Skills
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="Certification"
                smooth={true}
                duration={500}
                className="after:w-0 after:h-[3px] after:absolute after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Certification
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="after:absolute after:h-[3px] after:w-0 after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Projects
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="strength"
                smooth={true}
                duration={500}
                className="after:absolute after:h-[3px] after:w-0 after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-white md:flex hidden cursor-pointer gap-3 text-xl font-semibold">
            <a href="javascript:void(0)">
              <FaXTwitter />
            </a>
            <a href="javascript:void(0)">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/codewithsunny/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/codewithsunnyraj" target="_blank">
              <FaLink />
            </a>
          </div>
          <div>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="rounded-full md:flex hidden bg-button hover:duration-300 hover:transition-all font-Inter-Sora py-2 bg-button-bg text-white px-8 "
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="lg:hidden  text-white flex" onClick={handleMenu}>
          {open ? (
            <IoClose size={20} className="text-white cursor-pointer" />
          ) : (
            <FaAlignRight size={20} className="text-white cursor-pointer" />
          )}
        </div>
      </div>
      {open && (
        <div
          className={`bg-red-500 p-6 lg:hidden top-14 md:top-[80px] absolute w-full left-0 duration-200 transition-left ${open}?'left-0':'left-[-100%]'`}
        >
          <div>
            <ul className=" gap-6 space-y-4  text-white cursor-pointer text-[16px] font-Inter-Sora">
              <li className="relative group border-b">
                <Link to="home" smooth={true} duration={500} className="">
                  Home
                </Link>
              </li>
              <li className="relative group border-b">
                <Link to="about" smooth={true} duration={500} className="">
                  About
                </Link>
              </li>
              <li className="relative group border-b">
                <Link className="" to="skill" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="relative group border-b">
                <Link
                  to="certification"
                  smooth={true}
                  duration={500}
                  className=""
                >
                  certification
                </Link>
              </li>
              <li className="group relative border-b">
                <Link to="project" smooth={true} duration={500} className="">
                  Projects
                </Link>
              </li>
              <li className="group relative border-b">
                <Link to="strength" smooth={true} duration={500} className="">
                  Events
                </Link>
              </li>
              <li className="group relative border-b">
                <Link to="Contact" smooth={true} duration={500} className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
