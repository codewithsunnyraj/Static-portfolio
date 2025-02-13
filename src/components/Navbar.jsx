import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full relative z-10  py-2 md:py-7 ">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[26px] font-Inter-Sora text-white">@Portfolio</h2>
        </div>
        <div>
          <ul className="flex gap-6 text-white cursor-pointer text-[16px] font-Inter-Sora">
            <li className="relative group">
              <a
                href=""
                className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href=""
                className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <a
                className="after:w-0 after:h-[3px] after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:absolute after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
                href=""
              >
                Skills
              </a>
            </li>
            <li className="relative group">
              <a
                href=""
                className="after:w-0 after:h-[3px] after:absolute after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Services
              </a>
            </li>
            <li className="group relative">
              <a
                href=""
                className="after:absolute after:h-[3px] after:w-0 after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li className="group relative">
              <a
                href=""
                className="after:absolute after:h-[3px] after:w-0 after:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 after:right-0 hover:after:left-0 after:bottom-[-10px] after:transition-all after:duration-500 group-hover:after:w-full"
              >
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-white flex cursor-pointer gap-3 text-xl font-semibold">
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaLink />
          </div>
          <div>
            <button className="rounded-full bg-button hover:duration-300 hover:transition-all font-Inter-Sora py-2 bg-button-bg text-white px-8 ">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
