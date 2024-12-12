import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram, faTelegram,
  faArrowAltCircleDown, faCommentDots, faEnvelope, faHeadset, faLaptopCode, faPaperPlane, faPhone, faUser
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [hoveredElement, setHoveredElement] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const aboutText = "Hi! My name is Iroda. I am a student of 168th school in grade 8A and have been studying at Coddy Camp for 10 months now, where I develop my web development skills...";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9ou4xwc', 'template_id', form.current, 'publicKey')
      .then(() => console.log('SUCCESS!'))
      .catch((error) => console.log('FAILED...', error.text));
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#333' : '#F7F7F7',
      color: isDarkMode ? '#FFF' : '#000',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <header>
        <a href="/" className="logo"><i className="fab fa-node-js"></i>💻</a>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
            <select className='language-selector'>
              <option>ENG</option>
              <option>RUS</option>
              <option>UZB</option>
            </select>
            <li onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
              {isDarkMode ? '🌞' : '🌜'}
            </li>
          </ul>
        </nav>
      </header>

      <div className="home" style={{
        backgroundColor: isDarkMode ? '#444' : '#F7F7F7',
        borderBottom: '2px solid purple',
        transition: 'background-color 0.3s'
      }}>
        <div className="intro" style={{ fontSize: '25px', textAlign: 'center', alignItems: 'center' }}>
          <h1>Hi There,<br /> I'm Iroda</h1>
          <h5>I study at <span>Frontend</span></h5>
          <button className="about-button">
            About Me <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          <div className="social-icons" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
            <a href="https://t.me/+998336104445" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#0088cc' }}>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/bxbyy._.i/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#C13584' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="avatar">
          <img src="girl1.png" alt="Avatar" className="avatar-image" />
        </div>
      </div>

      {/* About Section */}
      <div className="about" style={{
        textAlign: 'center',
        padding: '20vh',
        height: '100vh',
        backgroundColor: isDarkMode ? '#444' : '#F7F7F7'
      }}>
        <h1 style={{ fontFamily: 'sans-serif' }}>
          <b> <FontAwesomeIcon icon={faUser} /></b> About <span style={{ color: 'purple' }}>me</span>
        </h1>
        <p className="typing" style={{
          width: '600px',
          padding: '20px',
          fontSize: '22px',
          borderRadius: '10px'
        }}>
          <b>{aboutText}</b>
        </p>
      </div>

      {/* Additional sections with similar color toggling logic */}
    </div>
  );
};

export default Home;
