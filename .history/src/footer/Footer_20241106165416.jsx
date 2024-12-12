import React, { useState } from 'react';
import './styles.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <a href="#" className="logo">Logo <i className="fa fa-logo"></i></a>
        <nav className={`navbar ${isMenuOpen ? 'nav-toggle' : ''}`}>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <i id="menu" className={`fa fa-bars ${isMenuOpen ? 'fa-times' : ''}`} onClick={toggleMenu}></i>
      </header>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="quote">"My Professional Experience"</h2>
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <div className="tag">2024</div>
              <div className="desc">
                <h3>Web Developer</h3>
                <p>Worked on various web development projects, focusing on front-end technologies.</p>
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <div className="tag">2023</div>
              <div className="desc">
                <h3>Junior Developer</h3>
                <p>Started my career as a junior developer, gaining experience in backend technologies.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="morebtn">
          <a href="#all-experience" className="btn">
            <span>View All Experience</span><i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="box-container">
          <div className="box">
            <h3>Contact</h3>
            <p><i className="fa fa-phone"></i> +123 456 789</p>
            <p><i className="fa fa-envelope"></i> email@example.com</p>
          </div>
          <div className="box">
            <h3>Social</h3>
            <div className="social">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <h3>Credit</h3>
            <p className="credit">Designed by <span>Your Name</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
