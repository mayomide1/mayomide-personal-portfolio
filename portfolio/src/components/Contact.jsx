import React from "react";
import Socials from "./Socials";
import "../css/Contact.css";

import { IoIosMail } from "react-icons/io";
import {FaLocationDot, } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const Contact = () => {
  return (
    <>
      <h2 className="about-text">
        <div className="dot"></div>GET IN TOUCH
      </h2>
      <p className="head-text">I'm open to new opportunities </p>
      <div className="contactcard">
        <div className="left">
          <h2 className="about-text">
            Have a specific project in mind?
            <br /> <br /> Let's Connect
          </h2>
          <div className="contact-cards">
            <a href="mailto:ayomidemamukuyomi5@gmail.com" target="_blank">
              <div className="contact-card">
                <IoIosMail style={{ fontSize: "30px" }} />
                <div className="card-detail">
                  <p>Email</p>
                  <a href="mailto:ayomidemamukuyomi5@gmail.com" target="_blank">
                    ayomidemamkuyomi5@gmail.com
                  </a>
                </div>
              </div>
            </a>
            <a href="https://wa.me/2347016197076" target="_blank">
              <div className="contact-card">
                <FaWhatsapp style={{ fontSize: "30px" }} />
                <div className="card-detail">
                  <p>Whatsapp</p>
                  <a href="https://wa.me/2347016197076" target="_blank">
                    07016197076
                  </a>
                </div>
              </div>
            </a>
            <div className="contact-card">
              <FaLocationDot style={{ fontSize: "30px" }} />
              <div className="card-detail">
                <p>Location</p>
                <a>LAGOS, NG</a>
              </div>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
