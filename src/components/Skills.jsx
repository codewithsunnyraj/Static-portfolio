import React from "react";
import { assets, skills } from "../constant/constant";

const Skills = () => {
  return (
    <div className="py-4 px-2 md:py-20" id="skill">
      <div>
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-xl">
          My Skills
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 my-6 md:my-16">
        {skills.map((items, index) => (
          <div
            className="p-2 border border-black bg-[#1e293b6c] transition-all duration-300 hover:border-[#8750f6] hover:-translate-y-4"
            key={index}
          >
            <div>
              <div className="flex justify-center">
                <img
                  src={items.image}
                  className="w-32  h-32 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-red-500 py-3 text-xl md:text-2xl lg:text-3xl font-Inter-Sora text-center">
                  {items.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
