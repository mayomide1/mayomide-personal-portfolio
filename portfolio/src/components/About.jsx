import React from "react";
import "../css/About.css";
import { FaRegHeart, FaLightbulb, FaUser } from "react-icons/fa";
import { FaCode,} from "react-icons/fa6";
import { VscIssueDraft } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <h2 className="about-text">
        <div className="dot"></div>
        {"Get to Know Me".toUpperCase()}
      </h2>
      <h1>
        {" "}
        <FaUser style={{ color: "#A855F7" }} />
        About Me
      </h1>
      <div className="about-container">
        <div className="left">
          <p>
            I'm a frontend developer with a passion for building clean,
            responsive web experiences. I build with HTML, CSS, JavaScript and
            React and I'm always learning, always improving. <br />
            <br />I care deeply about writing code that is not just functional
            but also readable and maintainable. When I'm not coding, I'm
            exploring new technologies and working on personal projects that
            keep me sharp.
          </p>
        </div>
        <div className="right">
          <div className="container">
            <p>
              <FaCode style={{ fontSize: "25px", color: "#A855F7" }} />
            </p>
            <h2>Clean Code</h2>
            <p>
              I write maintainable, well-documented code that scales with your
              project's growth.
            </p>
          </div>
          <div className="container">
            <p>
              <FaRegHeart style={{ fontSize: "25px", color: "#A855F7" }} />
            </p>
            <h2>User-Focused</h2>
            <p>
              Every design decision I make prioritizes user experience and
              accessibility.
            </p>
          </div>
          <div className="container">
            <p>
              <FaLightbulb style={{ fontSize: "25px", color: "#A855F7" }} />
            </p>
            <h2>Innovative</h2>
            <p>
              I stay updated with the latest technologies to bring fresh
              solutions to projects.
            </p>
          </div>
          <div className="container">
            <p>
              <VscIssueDraft style={{ fontSize: "25px", color: "#A855F7" }} />
            </p>
            <h2>Goal-Oriented</h2>
            <p>
              I focus on delivering results that meet both user needs and
              business objectives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
