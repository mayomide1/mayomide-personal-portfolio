import React from "react";
import "../css/Projects.css";

import weather_app from "../assets/weather-app.jpeg";
import movie_app from "../assets/movie-app.png";
import tic_tac_toe from "../assets/tic-tac-toe.png";
import devfinder from "../assets/devfinder.png";
import EventEase from "../assets/EventEase.jpeg";
import EodBalancing from "../assets/Eod-balancing.png";
import bingeTracker from "../assets/binge-tracker.png";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { VscFolderActive } from "react-icons/vsc";

const Projects = () => {
  return (
    <>
      <h2 className="about-text">
        <div className="dot"></div>
        {"WHat i have Built".toUpperCase()}
      </h2>
      <h1>
        {" "}
        <VscFolderActive style={{ color: "#A855F7" }} />
        Projects
      </h1>

      <div className="project-cards">
        <div className="project-card">
          <img src={EodBalancing} />
          <p>EOD Balancing</p>
          <p>
            EOD Balancing is a simple cash and POS balancing tool designed to
            help businesses track daily cash capital, sales, POS transactions,
            remaining balances, and profit or loss. It automatically calculates
            the day's figures and generates a clear breakdown of the results.
          </p>
          <a href="https://eod-balancing.vercel.app/" target="_blank">
            <button>Check Live Demo</button>
          </a>
        </div>
        <div className="project-card">
          <img src={bingeTracker} />
          <p>Binge Tracker</p>
          <p>
            Binge Tracker is a simple web app for keeping track of TV shows and
            episodes watched. Users can add shows, record episode counts, search
            their watchlist, and monitor their overall viewing progress.
          </p>
          <a href="https://binge-tracker-iota.vercel.app/" target="_blank">
            <button>Check Live Demo</button>
          </a>
        </div>
        <div className="project-card">
          <img src={EventEase} />
          <p>EventEase</p>
          <p>
            EventEase is a full-featured, web-based event ticketing and
            management platform I built specifically for campus and small-scale
            events. It bridges the gap between organizers and attendees by
            providing a seamless, all-in-one solution for creating, promoting,
            and booking events.
          </p>
          <a href="#" target="_blank">
            <button>Check Live Demo</button>
          </a>
        </div>
        <div className="project-card">
          <img src={devfinder} />
          <p>DevFinder</p>
          <p>
            DevFinder is a responsive website that allows you to instantly
            discover any developer's GitHub profile. Simply enter the GitHub
            username of the developer and view their name, username, bio,
            numbers of repositories, followers and location. Perfect for
            developers, recruiters and students looking for inspiration, or
            collaboration
          </p>
          <a href="https://dev-finder-com.vercel.app/" target="_blank">
            <button>Check Live Demo</button>
          </a>
        </div>
        <div className="project-card">
          <img src={movie_app} />
          <p>FilmSpot</p>
          <p>
            FilmSpot is a movie discovery web application that allows users to
            explore both newly released and older movies. It integrates with a
            movie API to fetch real-time data and presents it in a clean,
            responsive, and user-friendly interface.
          </p>
          <a href="https://film-spot-1.vercel.app/" target="_blank">
            <button>
              <BsBoxArrowUpRight />
              Check Live Demo
            </button>
          </a>
        </div>
        <div className="project-card">
          <img src={weather_app} />
          <p>Weather App</p>
          <p>
            A responsive weather application that allows users to search for any
            city and view real-time weather information such as temperature,
            weather conditions, humidity, and wind speed. The app fetches live
            data from a weather API and presents it in a clean and user-friendly
            interface.
          </p>
          <a href="https://weather-check-1.vercel.app/" target="_blank">
            <button>
              <BsBoxArrowUpRight />
              Check Live Demo
            </button>
          </a>
        </div>
        <div className="project-card">
          <img src={tic_tac_toe} />
          <p>TicTacToe Game</p>
          <p>
            A classic Tic Tac Toe game built with React. Play against the
            computer in a clean, minimal and responsive interface. Built to
            strengthen my understanding of React state management and game
            logic. Built with: HTML, CSS, ReactJS
          </p>
          <a
            href="https://tic-tac-toe-alpha-one-23.vercel.app/"
            target="_blank"
          >
            <button>
              <BsBoxArrowUpRight />
              Check Live Demo
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
