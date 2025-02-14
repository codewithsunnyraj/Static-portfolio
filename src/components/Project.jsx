import React from "react";
import { assets } from "../constant/constant";

const Project = () => {
  return (
    <div className="py-2 md:py-24">
      <div className="pb-2 md:pb-16">
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl bg-clip-text text-transparent  text-xl">
          My Projects
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="border-t-0 border-b group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://yssteps.com/" target="_blank">
            <img
              src={assets.yss}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              YourSuccessSteps
            </h3>
            <p className="text-justify py-4 text-slate-500">
              Understanding and managing your finances is crucial to building a
              secure future.
            </p>
          </div>
        </div>
        <div className="border-t-0 border-b group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://primetaxiservice.com/">
            <img
              src={assets.taxi}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              Prime Taxi Services
            </h3>
            <p className="text-justify py-4 text-slate-500">
              At Prime Taxi Service, we are committed to providing safe,
              reliable, and comfortable transportation for our valued customers.
            </p>
          </div>
        </div>
        <div className="border-t-0 border-b group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://caplus.in/" target="_blank">
            <img
              src={assets.caplus}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              Caplus
            </h3>
            <p className="text-justify py-4 text-slate-500">
              Welcome to CAPlus, your trusted partner for comprehensive tax,
              compliance, and business registration services in Patna, Bihar.
            </p>
          </div>
        </div>
        <div className="border-t-0 border-b mt-4 group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://skcandfamilyenterprises.in/" target="_blank">
            <img
              src={assets.skc}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              SKC
            </h3>
            <p className="text-justify py-4 text-slate-500">
              Welcome to SKC, your trusted destination for premium saris and
              ethnic wear. At SKC, we believe in preserving tradition while
              embracing modern trends
            </p>
          </div>
        </div>
        <div className="border-t-0 border-b mt-4 group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://yogaherbs.in/" target="_blank">
            <img
              src={assets.yoga}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              Yoga Herb
            </h3>
            <p className="text-justify py-4 text-slate-500">
              Welcome to YOG HERBS , your premier destination for genuine
              Ayurvedic products and comprehensive wellness solutions.
            </p>
          </div>
        </div>
        <div className="border-t-0 border-b mt-4 group relative overflow-hidden transition-all rounded-md hover:duration-300 hover:border-b-[#8750f6e3] p-3">
          <a href="https://prityam.com/" target="_blank">
            <img
              src={assets.prityam}
              className="ease-in-out group-hover:scale-110 duration-300 transition-transform"
              alt=""
            />
          </a>
          <div>
            <h3 className="text-xl font-Inter-Sora text-white pt-4  font-bold">
              Prityam Services Limited
            </h3>
            <p className="text-justify py-4 text-slate-500">
              "Prityam Services Limited is a leading provider of comprehensive
              service solutions designed to support businesses and individuals
              in achieving their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
