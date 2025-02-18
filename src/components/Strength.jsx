import React from "react";

const Strength = () => {
  return (
    <div className="px-4 px-lg-0" id="strength">
      <div className="pb-2 md:pb-16">
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-xl">
          My Strengths
        </h2>
        <p className="text-center text-slate-500 my-4">
          Grit, hard work and a 'figure-it-out' attitude rank among the top 3
          tools in my toolkit.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 py-4">
        <div className="p-4 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                01
              </h2>
            </div>
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Creativity
            </h3>
            <p className="text-justify text-slate-500">
              I always strive to think outside the box, bringing innovative
              solutions to challenges and ensuring that my designs and projects
              stand out with originality.
            </p>
          </div>
        </div>
        <div className="p-4 mt-10 md:mt-0 lg:mt-lg-0 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                02
              </h2>
            </div>
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Communication
            </h3>
            <p className="text-justify text-slate-500">
              Clear and effective communication is key. I excel in conveying
              ideas, collaborating with teams, and keeping stakeholders informed
              at every step of a project.
            </p>
          </div>
        </div>
        <div className="p-4 mt-10 md:mt-0 lg:mt-lg-0 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                03
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Problem-Solving
            </h3>
            <p className="text-justify text-slate-500">
              I thrive in finding efficient solutions to complex problems.
              Whether it's a design challenge or technical issue, I approach
              problems logically and creatively.
            </p>
          </div>
        </div>
        <div className="p-4 mt-10  lg:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                04
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Adaptability
            </h3>
            <p className="text-justify text-slate-500">
              I am quick to learn new skills and adapt to changing environments,
              making sure that I stay up to date with industry trends and
              technologies.
            </p>
          </div>
        </div>
        <div className="p-4 mt-10 md:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                05
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Teamwork
            </h3>
            <p className="text-justify text-slate-500">
              I value collaboration and teamwork, always working closely with
              colleagues and clients to ensure we meet goals efficiently and
              achieve the best results together.
            </p>
          </div>
        </div>
        <div className="p-4 mt-10  md:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                06
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-10 pb-3">
              Time Management
            </h3>
            <p className="text-justify text-slate-500">
              I manage my time effectively by prioritizing tasks, staying
              organized, and meeting deadlines, which ensures that projects are
              delivered on time and within budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
