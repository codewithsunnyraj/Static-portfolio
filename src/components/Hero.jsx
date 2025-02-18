import React from "react";
import me from "../assets/me1.png";
const Hero = () => {
  return (
    <div
      className="container mx-auto px-4 lg:px-0 py-6 relative md:py-14 lg:py-20 xl:py-30"
      id="home"
    >
      <div className="grid md:grid-cols-2">
        <div className="flex items-center">
          <div>
            <h3 className="text-white font-Inter-Sora text-xl py-3 md:text-2xl  lg:text-5xl">
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
              <a href="../assets/sunnyCv.pdf" download={true} target="_blank">
                {" "}
                <button className="text-[#8750F7] lg:my-4 border hover:bg-[#8750F7] hover:text-white duration-300 transition-all border-[#8750F7] my-2 px-3 lg:px-8 lg:py-3 py-2 rounded-full font-Inter-Sora">
                  Download CV
                </button>
              </a>
            </div>
            <div className="md:flex mt-3 md:mt-8">
              <div className="lg:border-r lg:border-b-0 border-b py-2 px-2 lg:hover:border-r hover:border-b hover:lg:border-b-0 hover:border-r-[#334155] duration-300 transition-all lg:border-r-white border-b-slate-200">
                <div>
                  <h4 className="text-white font-Inter-Sora text-xl lg:text-3xl">
                    10+
                  </h4>
                  <h5 className="text-white font-Inter-Sora">
                    Completed Projects
                  </h5>
                </div>
              </div>
              <div className="lg:border-r lg:border-b-0 border-b py-2 px-2 lg:hover:border-r hover:lg:border-b-0 hover:border-b-[#334155] hover:border-r-[#334155] duration-300 transition-all lg:border-r-white border-b-slate-200">
                <div>
                  <h4 className="text-white font-Inter-Sora text-xl lg:text-3xl">
                    3+
                  </h4>
                  <h5 className="text-white font-Inter-Sora">
                    Hackathons participated
                  </h5>
                </div>
              </div>
              <div className="lg:border-r lg:border-b-0 border-b py-2 px-2 lg:hover:border-r hover:lg:border-b-0 hover:border-b-[#334155] hover:border-r-[#334155] duration-300 transition-all lg:border-r-white border-b-slate-200">
                <div>
                  <h4 className="text-white font-Inter-Sora text-xl lg:text-3xl">
                    10+
                  </h4>
                  <h5 className="text-white font-Inter-Sora">
                    Dsa Questions Solved
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-center md:justify-end py-14 lg:py-0">
          <div>
            <img
              src={me}
              className="xl:w-[400px] w-[250px]  rotate-6 hover:rotate-0 duration-300 transition-all rounded-[25px] hover:border-[#8750f6e3] hover:shadow-[#8750f6e3] shadow shadow-[#8750f66b] border border-[#8750f66b]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
