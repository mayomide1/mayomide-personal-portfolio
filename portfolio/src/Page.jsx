import React from 'react'

import { FaCode } from "react-icons/fa6";
import { FaRegHeart,FaLightbulb  } from "react-icons/fa";
import { VscIssueDraft } from "react-icons/vsc";

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

    <section id='about' >
    <h2 className='about-text'>{"- Get to Know Me".toUpperCase()}</h2>
    <h1>About Me</h1>

    <div className='about-container'>
    <div className='left'>
    <p>I'm a frontend developer with a passion for building clean, responsive web experiences. I build with HTML, CSS, JavaScript and React and I'm always learning, always improving. <br/><br/> 
    I care deeply about writing code that is not just functional but also readable and maintainable. When I'm not coding, I'm exploring new technologies and working on personal projects that keep me sharp.</p>
    </div>

    <div className='right'>
    <div className='container'>
    <p><FaCode/></p>
    <h2>Clean Code</h2>
    <p>I write maintainable, well-documented code that scales with your project's growth.</p>
    </div>
    <div className='container'>
    <p><FaRegHeart/></p>
    <h2>User-Focused</h2>
    <p>Every design decision I make prioritizes user experience and accessibility.</p>
    </div>
    <div className='container'>
    <p><FaLightbulb /></p>
    <h2>Innovative</h2>
    <p>I stay updated with the latest technologies to bring fresh solutions to projects.</p>
    </div>
    <div className='container'>
    <p><VscIssueDraft/></p>
    <h2>Goal-Oriented</h2>
    <p>I focus on delivering results that meet both user needs and business objectives.</p>
    </div>
    </div>
    </div>
    </section>

    <section id='skills'>
    <h2 className='about-text'> - WHAT I WORK WITH</h2>
    <h1>Skills & Technologies</h1>
    
    <div className='technologies'>
        <div className='tech'>HTML5</div>
        <div className='tech'>CSS</div>
        <div className='tech'>JavaScript (ES6+)</div>
        <div className='tech'>Git & Github</div>
        <div className='tech'>React</div>
        <div className='tech'>Tailwind CSS</div>
        <div className='tech'>npm</div>
        <div className='tech'>VS Code</div>
    </div>

    <div className='about-text'>Always learning and exploring new technologies</div>

    </section> 

    <section id='contact'>
    <h2 className='about-text'> - GET IN TOUCH</h2>
    <h1>Let's Connect</h1>
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
    <button type='submit'>Send Message</button>
    </form>
    </section>
    </div>
  )
}

export default Page
