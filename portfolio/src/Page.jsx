import React from 'react'

import { FaCode } from "react-icons/fa6";
import { FaRegHeart,FaLightbulb,FaGithub,FaLinkedin,FaRegCopyright,FaHtml5,FaCss3Alt,FaGitAlt,FaReact,FaLongArrowAltRight         } from "react-icons/fa";
import { VscIssueDraft } from "react-icons/vsc";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6"; 
import { TiStarburstOutline } from "react-icons/ti";
import { SiJavascript,SiNpm  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { VscVscode } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

const Page = () => {
  return (
    <div>

    <div className='nav-bar'>
    <div>
        <p>MAYOMIDE</p>
    </div>
    <div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
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
        <div className='image'>
            <img src=''/>
        </div>
        <p className='about-text text'>Available for freelance</p>
        <div className='socials home-socials'>
        <a href='https://github.com/mayomide1' target='_blank' className='social-icons'><FaGithub style={{fontSize:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/ayomide-mamukuyomi/' target='_blank' className='social-icons'><FaLinkedin  style={{fontSize:"30px"}}/></a>
        <a href='https://x.com/mayomide_1' target='_blank' className='social-icons'><FaSquareXTwitter style={{fontSize:"30px"}}/></a>
        <a href='mailto:ayomidemamukuyomi5@gmail.com' target='_blank' className='social-icons'><CiMail style={{fontSize:"30px"}}/></a>
        </div>
    </div>
    </section>

    <section id='about' >
    <h2 className='about-text'>{"Get to Know Me".toUpperCase()}</h2>
    <h1>About Me</h1>

    <div className='about-container'>
    <div className='left'>
    <p>I'm a frontend developer with a passion for building clean, responsive web experiences. I build with HTML, CSS, JavaScript and React and I'm always learning, always improving. <br/><br/> 
    I care deeply about writing code that is not just functional but also readable and maintainable. When I'm not coding, I'm exploring new technologies and working on personal projects that keep me sharp.</p>
    </div>

    <div className='right'>
    <div className='container'>
    <p><FaCode style={{fontSize:"25px"}}/></p>
    <h2>Clean Code</h2>
    <p>I write maintainable, well-documented code that scales with your project's growth.</p>
    </div>
    <div className='container'>
    <p><FaRegHeart style={{fontSize:"25px"}}/></p>
    <h2>User-Focused</h2>
    <p>Every design decision I make prioritizes user experience and accessibility.</p>
    </div>
    <div className='container'>
    <p><FaLightbulb style={{fontSize:"25px"}}/></p>
    <h2>Innovative</h2>
    <p>I stay updated with the latest technologies to bring fresh solutions to projects.</p>
    </div>
    <div className='container'>
    <p><VscIssueDraft style={{fontSize:"25px"}}/></p>
    <h2>Goal-Oriented</h2>
    <p>I focus on delivering results that meet both user needs and business objectives.</p>
    </div>
    </div>
    </div>
    </section>

    <section id='skills'>
    <h2 className='about-text'> WHAT I WORK WITH</h2>
    <h1>Skills & Technologies</h1>
    
    <div className='technologies'>
        <div className='tech'> <FaHtml5 />HTML5</div>
        <div className='tech'><FaCss3Alt />CSS</div>
        <div className='tech'><SiJavascript/>JavaScript (ES6+)</div>
        <div className='tech'> <FaGitAlt />Git & <FaGithub />Github</div>
        <div className='tech'><FaReact />React</div>
        <div className='tech'><RiTailwindCssFill/>Tailwind CSS</div>
        <div className='tech'><SiNpm />npm</div>
        <div className='tech'><VscVscode/>VS Code</div>
    </div>

    <div className='about-text'>Always learning and exploring new technologies</div>

    </section> 

    <section id='contact'>
    <h2 className='about-text'>GET IN TOUCH</h2>
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
    <br/>
    <h2 className='about-text form-header'>Have a specific project in mind?</h2>
<p>I love working on unique challenges and innovative solutions. <br/>Let's discuss your vision and make it reality.</p>
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
    </section>

    <div className='footer'>
        <p>MAYOMIDE</p>
        <div className='socials'>
        <a href='https://github.com/mayomide1' target='_blank' className='social-icons'><FaGithub style={{fontSize:"30px"}}/></a>
        <a href='https://www.linkedin.com/in/ayomide-mamukuyomi/' target='_blank' className='social-icons'><FaLinkedin  style={{fontSize:"30px"}}/></a>
        <a href='https://x.com/mayomide_1' target='_blank' className='social-icons'><FaSquareXTwitter style={{fontSize:"30px"}}/></a>
        <a href='mailto:ayomidemamukuyomi5@gmail.com' target='_blank' className='social-icons'><CiMail style={{fontSize:"30px"}}/></a>
        </div>
        <p><FaRegCopyright /> {new Date().getFullYear()}</p>
    </div>
    </div>
  )
}

export default Page
