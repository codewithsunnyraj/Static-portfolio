import React from "react";
import { assets } from "../constant/constant";

const Skills = () => {
  return (
    <div className="py-4 md:py-20">
      <div>
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-xl">
          My Skills
        </h2>
      </div>
      <div className="grid md:grid-cols-6 gap-6 my-6 md:my-16">
        <div className="p-4 border border-black bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img src={assets.html} className="w-52" alt="" />
            </div>
            <div>
              <h4 className="text-red-500 py-3 text-3xl font-Inter-Sora text-center">
                HTML
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.css}
                className="w-32 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500 text-3xl py-3 font-Inter-Sora text-center">
                CSS
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.js}
                className="w-28 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500 text-3xl font-Inter-Sora py-3 text-center">
                Javacsript
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.react}
                className="w-36 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500 text-3xl py-3 font-Inter-Sora text-center">
                Reactjs
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.nodejs}
                className="w-32 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500 text-3xl py-3 font-Inter-Sora text-center">
                Nodejs
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.express}
                className="w-32 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500  py-3 text-3xl font-Inter-Sora text-center">
                Expressjs
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.github}
                className="w-32 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500  py-3 text-3xl font-Inter-Sora text-center">
                Github
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border border-black group bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.mongo}
                className="w-24 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500  py-3 text-3xl font-Inter-Sora text-center">
                Mongodb
              </h4>
            </div>
          </div>
        </div>
        <div className="p-4 border group border-black bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4">
          <div>
            <div className="flex justify-center">
              <img
                src={assets.php}
                className="w-32 group-hover:scale-110 duration-300"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-red-500  py-3 text-3xl font-Inter-Sora text-center">
                Php
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
