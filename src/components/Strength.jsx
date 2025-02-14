import React from "react";

const Strength = () => {
  return (
    <div className="">
      <div className="pb-2 md:pb-16">
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-xl">
          My Strengths
        </h2>
        <p className="text-center text-slate-500 my-4">
          Grit, hard work and a 'figure-it-out' attitude rank among the top 3
          tools in my toolkit.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 py-4">
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
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Research and Analysis
            </h3>
            <p className="text-justify text-slate-500">
              Research and analysis encompass systematic enquiry and evaluation
              across various fields, including intelligence, education, and
              market behavior.
            </p>
          </div>
        </div>
        <div className="p-4 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                02
              </h2>
            </div>
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Visual Design
            </h3>
            <p className="text-justify text-slate-500">
              Visual design in tech focuses on creating aesthetically pleasing
              and user-friendly digital interfaces that effectively communicate
              a brand's message and enhance the overall user experience
            </p>
          </div>
        </div>
        <div className="p-4 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                03
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Database Management
            </h3>
            <p className="text-justify text-slate-500">
              A Database Management System (DBMS) is a software application
              designed to store, manage, and facilitate access to structured
              data, allowing users to perform operations such as creating,
              reading, updating, and deleting data efficiently
            </p>
          </div>
        </div>
        <div className="p-4 mt-3 md:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                04
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Generating Leads, Listings and Leverages{" "}
            </h3>
            <p className="text-justify text-slate-500">
              Generating leads quickly involves optimizing lead capture pages,
              scoring leads, and leveraging SEO, LinkedIn prospecting, and CRM
              tools.
            </p>
          </div>
        </div>
        <div className="p-4 mt-3 md:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                05
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Flutter Developement
            </h3>
            <p className="text-justify text-slate-500">
              Flutter is an open-source UI toolkit developed by Google for
              building beautiful, natively compiled, multi-platform applications
              from a single codebase.
            </p>
          </div>
        </div>
        <div className="p-4 mt-3 md:mt-14 relative border border-slate-700 rounded-sm">
          <div>
            <div className="absolute top-[-40px] right-2 bg-black w-20 flex justify-center items-center rounded-full  h-20 border">
              <h2
                className="bg-gradient-to-r from-pink-900 to-blue-900 text-5xl text-transparent bg-clip-text "
                style={{ WebkitTextStroke: "1px white" }}
              >
                06
              </h2>
            </div>{" "}
            <h3 className="text-white text-2xl font-Inter-Sora pt-12 pb-3">
              Event Management
            </h3>
            <p className="text-justify text-slate-500">
              Event management is the comprehensive process of planning,
              organizing, and executing events, encompassing all aspects from
              budgeting and venue selection to marketing and logistics, to
              ensure successful outcomes and memorable experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
