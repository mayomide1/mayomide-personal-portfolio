import React from "react";
import Socials from "./Socials";
import "../css/Home.css";
import profile_pic from "../assets/profile-pic.jpeg";

const Home = () => {
  return (
    <>
      <div className="right">
        <h1>
          Hi, I'm <br /> Mamukuyomi Ayomide
        </h1>
        <p>Frontend Developer</p>
        <p>
          I build clean, responsive websites with simple code and user-friendly
          designs. Specializing in modern web technologies to create exceptional
          digital experiences.
        </p>
        <div className="buttons">
          <a href="#projects">
            <button>View my works</button>
          </a>
          <a href="#contact">
            <button>Get in Touch</button>
          </a>
        </div>
      </div>
      <div className="left">
        <div className="image">
          <img src={profile_pic} />
        </div>
        <p className="about-text text">
          <div className="dot"></div>Available for work
        </p>
        <Socials />
      </div>
    </>
  );
};

export default Home;
