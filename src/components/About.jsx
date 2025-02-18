import React from "react";

const About = () => {
  return (
    <div className="w-full px-6 lg:px-0  py-2 md:py-24">
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
                  High School Degree
                </h2>
                <p className="font-Inter-Sora text-white">
                  Graduated from Sheiling House School Activities: Debate |
                  Dance | Declamation | MUN's | Creative Writing | Event
                  Management
                </p>
              </div>
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 before:w-5 before:h-5 before:rounded-full before:bg-green-600 hover:before:bg-sky-500 before:absolute  before:left-[-10px] transition-all  hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">2023 - 2027</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  Bachelor's Degree
                </h2>
                <p className="font-Inter-Sora text-white">
                  Currently studying at Bennett University Societies : IEEE (Jr.
                  Tech Member) | Google Developer's Society Club (Jr. Management
                  member - Sr. Sponsorships Head) | GeeksForGeeks (Jr. PR &
                  Outreach Member) | Codechef (Jr. Tech Team Member) Activities
                  : Entrepreneurship & Tech Hackathons | Coding Competitions |
                  Mentorship | Creative Writing | Event Management
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
                <p className="text-red-500">2018-2020</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  High School Degree
                </h2>
                <p className="font-Inter-Sora text-white">
                  Graduated from Sheiling House School Activities: Debate |
                  Dance | Declamation | MUN's | Creative Writing | Event
                  Management
                </p>
              </div>
              <div className="bg-[#1e293b6c] md:ml-5 ml-4 my-6 w-full border-black border md:w-[450px] hover:border duration-300 before:w-5 before:h-5 before:rounded-full before:bg-green-600 before:absolute hover:before:bg-sky-500  before:left-[-10px] transition-all  hover:border-[#8750f6e3] p-4">
                <p className="text-red-500">2023 - 2027</p>
                <h2 className="font-Inter-Sora text-white my-2">
                  Bachelor's Degree
                </h2>
                <p className="font-Inter-Sora text-white">
                  Currently studying at Bennett University Societies : IEEE (Jr.
                  Tech Member) | Google Developer's Society Club (Jr. Management
                  member - Sr. Sponsorships Head) | GeeksForGeeks (Jr. PR &
                  Outreach Member) | Codechef (Jr. Tech Team Member) Activities
                  : Entrepreneurship & Tech Hackathons | Coding Competitions |
                  Mentorship | Creative Writing | Event Management
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
