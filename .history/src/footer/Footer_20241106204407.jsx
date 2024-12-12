import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()}  Все права защищены.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-github"><FontAwesomeIcon icon={faGithub}/></i>
          </a>
          <a href="https://linkedin.com/in/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></i>
          </a>
          <a href="https://twitter.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i>
          </a>
          <a href="https://twitter.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-twitter"><FontAwesomeIcon icon={faTelegram}/></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
