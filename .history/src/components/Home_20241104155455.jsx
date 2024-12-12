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
        <div className="avatar" >
          <img src="girl1.png" alt="Avatar" className="avatar-image" />
        </div>
      </div>

      
      <div className="skills" id="skills">
        <h1> <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span></h1>
        <div className="skills-icons" style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px'
        }}>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React" />
            <h2>ReactJs</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </div>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />
            <h2>Bootstrap</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="Netlify" />
            <h2>Netlify</h2>
          </div>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
            <h2>CSS</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" />
            <h2>HTML</h2>
          </div>
        </div>
      </div>
      <div className="project" style={{
        textAlign: 'center',
      }}>
        <h1>My Project</h1><br />
        <div className="project1" style={{
          marginTop: '100px',
          display: 'flex'
        }}>
          <div className="div1">
            <p>My first project</p>
            <img src="1project.jpg" alt="" style={{
              width: '600px',
              borderRadius: '20px'
            }} />
          </div>
          <div className="div2">
          <p>My first project</p>
          <img src="1project.jpg" alt="" style={{
            width:'600px',
            borderRadius:'20px'
          }} />
          </div>
          <div className="div3">
          <p>My first project</p>
          <img src="1project.jpg" alt="" style={{
            width:'600px',
            borderRadius:'20px'
          }} />
          </div>
          <div className="div4">
          <p>My first project</p>
          <img src="1project.jpg" alt="" style={{
            width:'600px',
            borderRadius:'20px'
          }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;