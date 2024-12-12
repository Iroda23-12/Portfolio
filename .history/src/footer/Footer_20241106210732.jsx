import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-container">
    //     <p className="footer-text">
    //       &copy; {new Date().getFullYear()}  Все права защищены.
    //     </p>
    //     <div className="footer-icons">
    //       <a href="https://github.com/ваш-профиль" target="_blank" rel="noopener noreferrer" className="footer-link">
    //         <i className="fab fa-github"><FontAwesomeIcon icon={faGithub}/></i>
    //       </a>
    //       <a href="https://t.me/+998336104445" target="_blank" rel="noopener noreferrer" className="footer-link">
    //         <i className="fab fa-twitter"><FontAwesomeIcon icon={faTelegram}/></i>
    //       </a>
    //       <a href="https://www.instagram.com/bxbyy._.i/" target="_blank" rel="noopener noreferrer" className="footer-link">
    //         <i className="fab fa-twitter"><FontAwesomeIcon icon={faInstagram}/></i>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-text">
             <h3>Iroda Portfolio</h3>
             <h5>Thank you for visiting my personal portfolio <br /> website. Connect with me over socials.</h5>
             <h5>Keep Rising 🚀. Connect with me over live chat!</h5>
          </div>
          <h2>Contact Info</h2>
          <h5><FontAwesomeIcon icon={faPhoneAlt}/>+998 (XX)-XXX-XX-XX</h5>
          <h5><FontAwesomeIcon icon={}/></h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
