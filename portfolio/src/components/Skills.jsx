import React from "react";
import "../css/Skills.css";

import { FaCode } from "react-icons/fa6";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiNpm } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode, VscTools } from "react-icons/vsc";

const Skills = () => {
  return (
    <div>
      <h2 className="about-text">
        <div className="dot"></div> WHAT I WORK WITH
      </h2>
      <h1>
        <FaCode style={{ color: "#A855F7" }} />
        Skills & <VscTools style={{ color: "#A855F7" }} />
        Technologies
      </h1>

      <div className="technologies">
        <div className="tech">
          {" "}
          <FaHtml5 style={{ color: "#A855F7" }} />
          HTML5
        </div>
        <div className="tech">
          <FaCss3Alt style={{ color: "#A855F7" }} />
          CSS
        </div>
        <div className="tech">
          <SiJavascript style={{ color: "#A855F7" }} />
          JavaScript (ES6+)
        </div>
        <div className="tech">
          {" "}
          <FaGitAlt style={{ color: "#A855F7" }} />
          Git
        </div>
        <div className="tech">
          {" "}
          <FaGithub style={{ color: "#A855F7" }} />
          Github
        </div>
        <div className="tech">
          <FaReact style={{ color: "#A855F7" }} />
          React
        </div>
        <div className="tech">
          <RiTailwindCssFill style={{ color: "#A855F7" }} />
          Tailwind CSS
        </div>
        <div className="tech">
          <SiNpm style={{ color: "#A855F7" }} />
          npm
        </div>
        <div className="tech">
          <VscVscode style={{ color: "#A855F7" }} />
          VS Code
        </div>
      </div>
      <div className="about-text">
        <div className="dot"></div>Always learning and exploring new skills &
        technologies
      </div>
    </div>
  );
};

export default Skills;
