import React from "react";
import me from "../assets/me1.png";
const Hero = () => {
  return (
    <div className="container mx-auto py-6 relative md:py-32">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <h3 className="text-white font-Inter-Sora text-xl py-3  md:text-5xl">
              I am{" "}
              <span className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent">
                Sunny Raj
              </span>
            </h3>
            <p className="text-white font-Inter-Sora">
              Hi, I'm Sunny, a passionate Frontend Developer with experience in
              building dynamic and responsive web applications using ReactJS,
              TailwindCSS, and modern web technologies.
            </p>
            <div>
              <a href="">
                {" "}
                <button className="text-[#8750F7] my-4 border hover:bg-[#8750F7] hover:text-white duration-300 transition-all border-[#8750F7] px-8 py-3 rounded-full font-Inter-Sora">
                  Download CV
                </button>
              </a>
            </div>
            <div className="md:flex mt-3 md:mt-8">
              <div className="border-r py-2 px-2 hover:border-r hover:border-r-[#334155] duration-300 transition-all border-r-white">
                <div>
                  <h4 className="text-white font-Inter-Sora text-3xl">10+</h4>
                  <h5 className="text-white font-Inter-Sora">
                    Completed Projects
                  </h5>
                </div>
              </div>
              <div className="border-r py-2 px-4 hover:border-r hover:border-r-[#334155] duration-300 transition-all border-r-white">
                <div>
                  <h4 className="text-white font-Inter-Sora text-3xl">3+</h4>
                  <h5 className="text-white font-Inter-Sora">
                    Hackathons participated
                  </h5>
                </div>
              </div>
              <div className="border-r py-2 px-4 hover:border-r hover:border-r-[#334155] duration-300 transition-all border-r-white">
                <div>
                  <h4 className="text-white font-Inter-Sora text-3xl">10+</h4>
                  <h5 className="text-white font-Inter-Sora">
                    Dsa Questions Solved
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={me}
              className="md:w-[400px] rotate-6 hover:rotate-0 duration-300 transition-all rounded-[25px] hover:border-[#8750f6e3] hover:shadow-[#8750f6e3] shadow shadow-[#8750f66b] border border-[#8750f66b]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
