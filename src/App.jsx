import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-full px-2 md:px-32 relative bg-black">
      <div className="absolute right-0  w-[250px] h-[250px] blur-xl bg-gradient-to-t z-10 from-[#1B1032]"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
    </div>
  );
};

export default App;
