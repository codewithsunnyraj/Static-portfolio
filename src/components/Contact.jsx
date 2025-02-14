import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="py-6 md:py-20">
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="px-6 pt-8 pb-10 bg-[#140C1C]">
          <div>
            <h2 className="text-2xl md:text-4xl font-Inter-Sora font-bold text-center bg-gradient-to-r from-sky-400 via-slate-400 to-white  bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-slate-600 py-2 text-center font-Inter-Sora">
              Lets learn from each other and make better projects together.
            </p>
          </div>
          <div>
            <form action="">
              <div className="md:flex my-5 justify-between gap-5">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="md:flex my-5 justify-between gap-5">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  name=""
                  id=""
                />
              </div>
              <div className="my-5">
                <textarea
                  type="text"
                  placeholder="Enter Message"
                  className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  name=""
                  id=""
                />
              </div>
              <div className="my-5">
                <button className="bg-sky-400 py-2 text-center w-full rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <div>
            <div className="flex my-8 items-center gap-4">
              <div className="w-14 h-14  bg-gradient-to-t from-indigo-900 to-indigo-400 flex justify-center items-center text-white rounded-full bg-black p-2">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="font-Inter-Sora font-semibold text-white">
                  Phone
                </p>
                <a
                  href="tel:+91 8936811660"
                  className="text-white font-Inter-Sora font-bold"
                >
                  +91 8936811660
                </a>
              </div>
            </div>
            <div className="flex my-8  items-center gap-4">
              <div className="w-14 h-14  bg-gradient-to-t from-indigo-900 to-indigo-400 flex justify-center items-center text-white rounded-full bg-black p-2">
                <FaEnvelope size={22} />
              </div>
              <div>
                <p className="font-Inter-Sora font-semibold text-white">
                  Email
                </p>
                <a
                  href="tel:+91 8936811660"
                  className="text-white font-Inter-Sora font-bold"
                >
                  +91 8936811660
                </a>
              </div>
            </div>
            <div className="flex my-8 items-center gap-4">
              <div className="w-14 h-14  bg-gradient-to-t from-indigo-900 to-indigo-400 flex justify-center items-center text-white rounded-full bg-black p-2">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="font-Inter-Sora font-semibold text-white">
                  Address
                </p>
                <a
                  href="javascript:void(0);"
                  className="text-white font-Inter-Sora font-bold"
                >
                  Bhagwat nagar, kumhrar patna
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
