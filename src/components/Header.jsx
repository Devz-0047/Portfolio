import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col opacity-85 "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
          
           
            <h1 className="text-white text-6xl font-bold">Hi! I'm Devender</h1>
            <p className="text-white py-4 max-w-lg text-xl font-semibold">
            I am a passionate Full Stack Developer with a strong focus on building interactive, responsive, and user-centric web applications. Proficient in React.js, Next.js, Redux Toolkit, and modern frontend technologies, I thrive on creating seamless digital experiences that enhance user engagement.
            </p>
            <button className="  text-white text-3xl font-semibold">
              <AnchorLink href="#contact">Let's Connect</AnchorLink>        
            </button>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
