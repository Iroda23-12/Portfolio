import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faInstagram, faJava, faJs, faReact, faTelegram } from '@fortawesome/free-brands-svg-icons';
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
      <div className="skills" id="skills">
        <h1> <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span></h1>
        <div className="skills-icons" style={{
          justifyContent:'center',
          display: 'grid',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '10px'
        }}>
          <div className="icon-skill" style={{
            marginLeft:'600px'
          }}>
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React" />
            <h2>ReactJs</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </div>
          <div className="icon-skill"  style={{
            marginLeft:'600px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />
            <h2>Bootstrap</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" />
            <h2>HTML</h2>
          </div>
          <div className="icon-skill"  style={{
            marginLeft:'600px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
            <h2>CSS</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;