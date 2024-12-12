import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundColor: '#F7F7F7' }}>
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

      <img src="data:image/jpeg;base64,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" alt="" />
    </>
  );
};

export default Home;
