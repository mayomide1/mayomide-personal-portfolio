import React, {useState} from 'react'

import weather_app from './assets/weather-app.jpeg';
import movie_app from './assets/movie-app.png';
import tic_tac_toe from './assets/tic-tac-toe.png';
import profile_pic from './assets/profile-pic.jpeg';

import { FaCode,FaLocationDot,FaSquareXTwitter } from "react-icons/fa6";
import { FaRegHeart,FaLightbulb,FaGithub,FaLinkedin,FaRegCopyright,FaHtml5,FaCss3Alt,FaGitAlt,FaReact,FaUser,      } from "react-icons/fa";
import { VscIssueDraft } from "react-icons/vsc";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiJavascript,SiNpm  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { VscVscode } from "react-icons/vsc";
import { VscFolderActive,VscTools } from "react-icons/vsc";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";



const Page = () => {
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

    <div className='nav-bar'>
    <div>
        <p><FaCode style={{color:"#A855F7"}}/>MAYOMIDE</p>
    </div>
    <div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'> Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
     <div className='hamburger-icon' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}</div>
    </div>

    <section id='home'>
    <div className='right'>
    <h1>Hi, I'm <br/> Mamukuyomi Ayomide</h1>
    <p>Frontend Developer</p>
    <p>I build clean, responsive websites with simple code and user-friendly designs. Specializing in modern web technologies to create exceptional digital experiences.</p>
    <div className='buttons'>
        <a href='#projects'><button>View my works</button></a>
        <a href='#contact'><button>Get in Touch</button></a>
    </div>
    </div>
    <div className='left'>
        <div className='image'><img src={profile_pic}/></div>
        <p className='about-text text'><div className='dot'></div>Available for work</p>
        <div className='socials home-socials'>
        <a href='https://github.com/mayomide1' target='_blank' className='social-icons'><FaGithub style={{fontSize:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/ayomide-mamukuyomi/' target='_blank' className='social-icons'><FaLinkedin  style={{fontSize:"30px"}}/></a>
        <a href='https://x.com/mayomide_1' target='_blank' className='social-icons'><FaSquareXTwitter style={{fontSize:"30px"}}/></a>
        <a href='mailto:ayomidemamukuyomi5@gmail.com' target='_blank' className='social-icons'><CiMail style={{fontSize:"30px"}}/></a>
        </div>
    </div>
    </section>

    <section id='about' >
    <h2 className='about-text'><div className='dot'></div>{"Get to Know Me".toUpperCase()}</h2>
    <h1> <FaUser style={{color:"#A855F7"}}/>About Me</h1>
    <div className='about-container'>
    <div className='left'>
    <p>I'm a frontend developer with a passion for building clean, responsive web experiences. I build with HTML, CSS, JavaScript and React and I'm always learning, always improving. <br/><br/> 
    I care deeply about writing code that is not just functional but also readable and maintainable. When I'm not coding, I'm exploring new technologies and working on personal projects that keep me sharp.</p>
    </div>
    <div className='right'>
    <div className='container'>
    <p><FaCode style={{fontSize:"25px", color:"#A855F7" }}/></p>
    <h2>Clean Code</h2>
    <p>I write maintainable, well-documented code that scales with your project's growth.</p>
    </div>
    <div className='container'>
    <p><FaRegHeart style={{fontSize:"25px", color:"#A855F7"}}/></p>
    <h2>User-Focused</h2>
    <p>Every design decision I make prioritizes user experience and accessibility.</p>
    </div>
    <div className='container'>
    <p><FaLightbulb style={{fontSize:"25px", color:"#A855F7"}}/></p>
    <h2>Innovative</h2>
    <p>I stay updated with the latest technologies to bring fresh solutions to projects.</p>
    </div>
    <div className='container'>
    <p><VscIssueDraft style={{fontSize:"25px", color:"#A855F7"}}/></p>
    <h2>Goal-Oriented</h2>
    <p>I focus on delivering results that meet both user needs and business objectives.</p>
    </div>
    </div>
    </div>
    </section>

    <section id='skills'>
    <h2 className='about-text'><div className='dot'></div> WHAT I WORK WITH</h2>
    <h1><FaCode style={{color:"#A855F7"}}/>Skills & <VscTools style={{color:"#A855F7"}}/>Technologies</h1>
    
    <div className='technologies'>
        <div className='tech'> <FaHtml5 style={{color:"#A855F7"}}/>HTML5</div>
        <div className='tech'><FaCss3Alt style={{color:"#A855F7"}}/>CSS</div>
        <div className='tech'><SiJavascript style={{color:"#A855F7"}}/>JavaScript (ES6+)</div>
        <div className='tech'> <FaGitAlt style={{color:"#A855F7"}}/>Git</div>
        <div className='tech'> <FaGithub style={{color:"#A855F7"}}/>Github</div>
        <div className='tech'><FaReact style={{color:"#A855F7"}}/>React</div>
        <div className='tech'><RiTailwindCssFill style={{color:"#A855F7"}}/>Tailwind CSS</div>
        <div className='tech'><SiNpm style={{color:"#A855F7"}}/>npm</div>
        <div className='tech'><VscVscode style={{color:"#A855F7"}}/>VS Code</div>
    </div>
    <div className='about-text'><div className='dot'></div>Always learning and exploring new skills & technologies</div>
    </section> 

    <section id='projects'>
        <h2 className='about-text'><div className='dot'></div>{"WHat i have Built".toUpperCase()}</h2>
        <h1> <VscFolderActive style={{color:"#A855F7"}}/>Projects</h1>

        <div className="project-cards">
            {/* <div className="project-card">
                <img src=''/>
                <p></p>
                <a href='' target='_blank'><button>Check Live Demo</button></a>
            </div> */}
            <div className="project-card">
                <img src={movie_app}/>
                <p>FilmSpot</p>
                <p>FilmSpot is a movie discovery web application that allows users to explore both newly released and older movies. It integrates with a movie API to fetch real-time data and presents it in a clean, responsive, and user-friendly interface.</p>
                <a href='https://film-spot-1.vercel.app/' target='_blank'><button><BsBoxArrowUpRight/>Check Live Demo</button></a>
            </div>
            <div className="project-card">
                <img src={weather_app}/>
                <p>Weather App</p>
                <p>
                    A responsive weather application that allows users to search for any city and view real-time weather information such as temperature, weather conditions, humidity, and wind speed. The app fetches live data from a weather API and presents it in a clean and user-friendly interface.
                </p>
                <a href='https://weather-check-1.vercel.app/' target='_blank'><button><BsBoxArrowUpRight/>Check Live Demo</button></a>
            </div>
            <div className="project-card">
                <img src={tic_tac_toe}/>
                <p>TicTacToe Game</p>
                <p> A classic Tic Tac Toe game built with React. Play against the computer in a clean, minimal and responsive interface. Built to strengthen my understanding of React state management and game logic.
                    Built with: HTML, CSS, ReactJS</p>
                <a href='https://tic-tac-toe-alpha-one-23.vercel.app/' target='_blank'><button><BsBoxArrowUpRight/>Check Live Demo</button></a>
            </div>
        </div>
    </section>

    <section id='contact'>
    <h2 className='about-text'><div className='dot'></div>GET IN TOUCH</h2>
    <p className='head-text'>I'm open to new opportunities </p>
   <div className="contactcard">
    <div className='left'>
         <h1>Let's Connect</h1>
    <div className='contact-cards'>
        <a href='mailto:ayomidemamukuyomi5@gmail.com'>
        <div className='contact-card'>
        <IoIosMail style={{fontSize:"30px"}}/>
        <div className="card-detail">
        <p>Email</p>
        <a href='mailto:ayomidemamukuyomi5@gmail.com'>ayomidemamkuyomi5@gmail.com</a>
        </div>
        </div>
        </a>
        <a href='tel:+2347016197076'>
        <div className='contact-card'>
        <BsFillTelephoneOutboundFill style={{fontSize:"30px"}}/>
        <div className="card-detail">
        <p>Phone</p>
        <a href='tel:+2347016197076'>07016197076</a>
        </div>
        </div>
        </a>
        <div className='contact-card'>
        <FaLocationDot style={{fontSize:"30px"}}/>
        <div className="card-detail">
        <p>Location</p>
        <a >LAGOS, NG</a>
        </div>
        </div>
        <div className='socials'>
        <a href='https://github.com/mayomide1' target='_blank' className='social-icons'><FaGithub style={{fontSize:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/ayomide-mamukuyomi/' target='_blank' className='social-icons'><FaLinkedin  style={{fontSize:"30px"}}/></a>
        <a href='https://x.com/mayomide_1' target='_blank' className='social-icons'><FaSquareXTwitter style={{fontSize:"30px"}}/></a>
        <a href='mailto:ayomidemamukuyomi5@gmail.com' target='_blank' className='social-icons'><CiMail style={{fontSize:"30px"}}/></a>
        </div>
    </div>
    </div>

    <div className='right'>
    <h2 className='about-text'>Have a specific project in mind?</h2>
    <form>
    <div className='contact-info'>
        <div className='contact-info-group'>
        <label className='label'>Your Name</label>
        <input type='text' placeholder='Enter Your Full Name' />
        </div>
        <div className='contact-info-group'>
        <label className='label'>Your Email</label>
        <input type='email' placeholder='Enter Your Email Address' />
        </div>
    </div>
    <label className='label'>Your Message</label>
    <textarea placeholder='Write your message here' rows={5} />
    <button type='submit'><a href='mailto:ayomidemamukuyomi5@gmail.com'>Send Message</a></button>
    </form>
    </div>
    </div>
    </section>

    <div className='footer'>
        <p><FaCode style={{color:"#A855F7"}}/>MAYOMIDE</p>
        <div className='socials'>
        <a href='https://github.com/mayomide1' target='_blank' className='social-icons'><FaGithub style={{fontSize:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/ayomide-mamukuyomi/' target='_blank' className='social-icons'><FaLinkedin  style={{fontSize:"30px"}}/></a>
        <a href='https://x.com/mayomide_1' target='_blank' className='social-icons'><FaSquareXTwitter style={{fontSize:"30px"}}/></a>
        <a href='mailto:ayomidemamukuyomi5@gmail.com' target='_blank' className='social-icons'><CiMail style={{fontSize:"30px"}}/></a>
        </div>
        <p><FaRegCopyright /> {new Date().getFullYear()} Mamukuyomi Ayomide</p>
    </div>
    </div>
  )
}

export default Page
