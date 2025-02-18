import React from "react";

const About = () => {
  return (
    <div className="w-full px-6 lg:px-0  py-2 md:py-24"  id="about">
      <div className="grid xl:grid-cols-2">
        <div>
          <div className="">
            <h2 className="font-Inter-Sora font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-2xl">
              Education
            </h2>
          </div>
          <div className="relative">
            <div className="flex flex-col before:h-[560px] sm:before:h-[430px] md:before:h-[500px] lg:before:h-[520px]  before:absolute before:w-[2px] before:bg-red-500 justify-center ">
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 transition-all before:w-5 before:h-5 before:rounded-full before:bg-green-600 hover:before:bg-sky-500 before:absolute  before:left-[-10px]  hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">2018-2020</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  High School Qualification (2018-2020)
                </h2>
                <p className="font-Inter-Sora text-white">
                  B.Sc. with a 72.6% Percentage <br /> Completed my high school
                  education with a focus on Physics, Chemistry, Math, English,
                  Hindi. Achieved a solid academic performance with a 72.6%
                  overall percentage, which laid the foundation for further
                  studies.
                </p>
              </div>
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 before:w-5 before:h-5 before:rounded-full before:bg-green-600 hover:before:bg-sky-500 before:absolute  before:left-[-10px] transition-all  hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">2023 - 2027</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  Bachelor of Computer Applications(BCA)
                </h2>
                <p className="font-Inter-Sora text-white">
                  Bachelor of Computer Applications with a 72.6% Percentage{" "}
                  Completed my Bachelor's degree in Computer Applications with a
                  focus on programming, data structures, and software
                  development. Achieved a 72.6% overall percentage, further
                  enhancing my skills in computer science and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <h2 className="font-Inter-Sora font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-2xl">
              Experience
            </h2>
          </div>
          <div className="relative">
            <div className="flex flex-col before:h-[560px] sm:before:h-[430px] md:before:h-[500px] lg:before:h-[520px]  before:absolute before:w-[2px] before:bg-red-500 justify-center">
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 transition-all  before:w-5 before:h-5 before:rounded-full before:bg-green-600 hover:before:bg-sky-500 before:absolute  before:left-[-10px] hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">Dec 2023 - Feb 2024</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  Website Developer Intern at Camwel Solution
                </h2>
                <p className="font-Inter-Sora text-white">
                  Website Developer intern at Camwel Solution (Dec 2023 - Feb
                  2024). Gained experience with HTML, CSS, JavaScript,
                  Bootstrap, ReactJS, TailwindCSS, and PHP. Contributed to
                  building dynamic, user-friendly websites, improving frontend
                  and backend skills. Resume for details.
                </p>
              </div>
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 before:w-5 before:h-5 before:rounded-full before:bg-green-600 before:absolute hover:before:bg-sky-500  before:left-[-10px] transition-all  hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">Feb 2024 - Present</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  Website Developer Experience at Camwel Solution
                </h2>
                <p className="font-Inter-Sora text-white">
                  Currently working as a Website Developer on a live project
                  (Feb 2024 - Present). Involved in designing, developing, and
                  maintaining dynamic websites, using modern technologies and
                  frameworks to ensure responsive, user-friendly, and
                  high-performance web solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
