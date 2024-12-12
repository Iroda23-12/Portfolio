import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faJava, faJs, faReact, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faLaptop, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home" style={{
        backgroundColor: '#F7F7F7',
        borderBottom: '2px solid purple',
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

        <div className="about" style={{
          textAlign: 'center',
          padding: '220px',
          height: '100vh',
          backgroundColor: '#F7F7F7'
        }}>

          <h1 style={{ fontFamily: 'sans-serif' }}> <b> <FontAwesomeIcon icon={faUser} /></b> About <span style={{ color: 'purple' }}>me</span></h1><br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
            <p style={{
              width: '600px',
              padding: '20px',
              fontSize: '22px',
              borderRadius: '10px'
            }}>
              <b>Hi! My name is Iroda. I am a student of 168th school in grade 8A and have been studying at Coddy Camp for 10 months now, where I develop my web development skills. My passion for programming started in school, and I am actively involved in various projects, striving to create convenient and attractive web applications. In my projects, I use React and Zustand for state management. At the moment, I am working on the website "UzbekistanExplorer.com", which is aimed at promoting tourism in Uzbekistan.      </b>
            </p>
          </div>
        </div>
      <div className="skills">
        <h1><FontAwesomeIcon icon={faLaptopCode} />Skills & <span>Abilities</span></h1>
        <h2><FontAwesomeIcon icon={faReact} color='skyblue' />ReactJs</h2>
        <h2><FontAwesomeIcon icon={faJs} color='yellow' />ReactJs</h2>
        <h2><FontAwesomeIcon icon={fatailwind} color='yellow' />ReactJs</h2>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="24" // Измените размер, если нужно
      height="24" // Измените размер, если нужно
    >
      <path
        fill="#06B6D4"
        d="M24 0C10.74 0 0 10.74 0 24c0 13.26 10.74 24 24 24 13.26 0 24-10.74 24-24C48 10.74 37.26 0 24 0z"
      />
      <path
        fill="#fff"
        d="M32.914 30.614c-.226 0-.463-.024-.693-.08-.115.26-.353.466-.66.466H23.5c-2.88 0-5.208-2.436-5.208-5.446 0-2.21 1.307-4.085 3.093-4.91 1.33-.609 2.067-1.15 2.067-1.688 0-.335-.26-.513-.668-.513H14.655c-.271 0-.537.155-.645.398-.288.692-.11 1.556.57 2.306 1.134 1.47 3.23 3.482 6.005 3.482 1.002 0 1.983-.16 2.934-.468.285-.09.566-.187.837-.293.271-.106.454-.217.578-.265.232-.088.46-.169.68-.169 1.022 0 1.675.572 1.675 1.521 0 1.438-1.905 2.507-3.95 2.507H16.42c-.363 0-.716-.104-1.01-.24-.067-.03-.137-.063-.21-.086-.073-.023-.148-.046-.224-.046-.51 0-.82.43-.82.9 0 .57.318.925.836.925H30.87c.09 0 .185.006.274.016a4.09 4.09 0 0 0 3.413-1.65 4.035 4.035 0 0 0 .644-2.252 3.988 3.988 0 0 0-3.242-3.627zm0 0"
      />
    </svg>
      </div>
    </>
  );
};

export default Home;
