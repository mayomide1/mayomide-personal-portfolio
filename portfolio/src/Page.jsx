import React, { useState, useEffect } from "react";

import { FaCode } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  function darkMode() {
    setThemeMode(!themeMode);
    if (document.body.classList.toggle("light-mode")) {
      localStorage.setItem("theme", "lightmode");
    } else {
      localStorage.setItem("theme", "darkmode");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "lightmode") {
      document.body.classList.add("light-mode");
      setThemeMode(true);
    }
  }, []);

  return (
    <div className={themeMode ? "light-mode" : ""}>
      <nav className="nav-bar">
        <div>
          <p>
            <FaCode style={{ color: "#A855F7" }} />
            MAYOMIDE
          </p>
        </div>
        <div>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects"> Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="dark-mode-icon" onClick={darkMode}>
          {themeMode ? <FaMoon /> : <FaSun />}
        </div>
        <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
