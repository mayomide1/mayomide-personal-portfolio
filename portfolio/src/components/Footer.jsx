import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Socials from "./Socials";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>
          <FaCode style={{ color: "#A855F7" }} />
          MAYOMIDE
        </p>
        <Socials />
        <p>
          <FaRegCopyright /> {new Date().getFullYear()} Mamukuyomi Ayomide
        </p>
      </footer>
    </>
  );
};

export default Footer;
