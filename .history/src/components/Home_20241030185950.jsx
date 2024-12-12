import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Hi There</h1><br />
        <h5>I study at <span  >Frontend</span></h5>
        <button className="about-button">
          About Me <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </button>
        <div className="social-icons">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.instagram.com/bxbyy._.i/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="avatar">
        <img src="girl.png" alt="Avatar" className="avatar-image" />
      </div>
    </div>
  );
};

export default Home;