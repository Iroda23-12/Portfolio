import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Iroda. Все права защищены.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-linkedin"><FontAwesomeIcon icon={faTwitter}/></i>
          </a>
          <a href="https://twitter.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
