import React from "react";
import { assets, certificate } from "../constant/constant";
const Certificate = () => {
  return (
    <div className="py-4 px-4  md:py-10" id="Certification">
      <div className="pb-2 md:pb-16">
        <h2 className="font-Inter-Sora text-center font-semibold bg-gradient-to-r from-purple-500 to-pink-500 md:text-2xl lg:text-6xl bg-clip-text text-transparent  text-xl">
          Certificates & More
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-4 md:grid-cols-2">
          {certificate.map((items, index) => (
            <div key={index}>
              <div className="p-4 group border border-slate-700 rounded-t-md">
                <div>
                  <img
                    src={items.img}
                    className=" w-[450px] group-hover:blur-none hover:duration-300 transition-transform blur-sm object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-white text-2xl font-Inter-Sora pt-4 text-center">
                    {items.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
