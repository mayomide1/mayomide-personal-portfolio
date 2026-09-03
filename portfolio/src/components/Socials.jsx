import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import "../css/Socials.css";

const Socials = () => {
  return (
    <>
      <div className="socials">
        <a
          href="https://github.com/mayomide1"
          target="_blank"
          className="social-icons"
        >
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayomide-mamukuyomi/"
          target="_blank"
          className="social-icons"
        >
          <FaLinkedin style={{ fontSize: "30px" }} />
        </a>
        <a
          href="https://x.com/mayomide_1"
          target="_blank"
          className="social-icons"
        >
          <FaSquareXTwitter style={{ fontSize: "30px" }} />
        </a>
        <a
          href="mailto:ayomidemamukuyomi5@gmail.com"
          target="_blank"
          className="social-icons"
        >
          <CiMail style={{ fontSize: "30px" }} />
        </a>
      </div>
    </>
  );
};

export default Socials;
