import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Strength from "./components/Strength";
import Project from "./components/Project";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full md:px-6 lg:px-32 relative bg-black">
      <div className="absolute right-0   w-[250px] h-[250px] blur-xl bg-gradient-to-t z-10 from-[#1B1032]"></div>
      {/* <Navbar /> */}
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Strength />
      <Project />
      <Certificate />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
