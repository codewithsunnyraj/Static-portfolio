import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        data,
        publicKey
      );
      console.log("Success!", response.status, response.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Try again later!");
    }
    reset(); // Form reset karein
  };
  return (
    <div className="py-6 px-4 md:px-0 md:py-20">
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
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="md:flex my-5 justify-between gap-5">
                <div className="md:w-1/2 my-3 my-lg-0">
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "Enter First Name",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Only Alphabets Are Allowed",
                      },
                    })}
                    placeholder="Enter First Name"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 pl-4">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="md:w-1/2 my-3 my-lg-0">
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Enter Last Name",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Only Alphabets Are Allowed",
                      },
                    })}
                    placeholder="Enter Last Name"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  />
                  {errors.lastName && (
                    <p className="pl-4 text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex my-5 justify-between gap-5">
                <div className="md:w-1/2 my-3 my-lg-0">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    placeholder="Enter Email"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  />
                  {errors.email && (
                    <p className="text-red-500 pl-4">{errors.email.message}</p>
                  )}
                </div>
                <div className="md:w-1/2 my-3 my-lg-0">
                  <input
                    type="text"
                    {...register("number", {
                      required: "Mobile Number Required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    placeholder="Enter Phone Number"
                    className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                  />
                  {errors.number && (
                    <p className="text-red-500 pl-4">{errors.number.message}</p>
                  )}
                </div>
              </div>
              <div className="my-5">
                <input
                  type="text"
                  {...register("subject", {
                    required: "Enter Subject",
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Only alphabets are allowed",
                    },
                  })}
                  placeholder="Enter Subject"
                  className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                />
                {errors.subject && (
                  <p className="text-red-500 pl-4">{errors.subject.message}</p>
                )}
              </div>
              <div className="my-5">
                <textarea
                  type="text"
                  {...register("message", { required: true })}
                  placeholder="Enter Message"
                  className="border-b py-2 px-3 w-full rounded-md border-slate-700 focus:outline-none bg-transparent text-slate-300"
                />
                {errors.message && (
                  <p className="text-red-500 pl-4">Enter Message Here**</p>
                )}
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
