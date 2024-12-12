import React from 'react';
const Header = () => {
  return (
    <header className="header">
      <div className="intro">
        <h1>Hi There,</h1>
        <h2>I'm Jigar <span className="highlight">Sable</span></h2>
        <p>I Am Into <span className="highlight">Web Development</span></p>
        <button className="about-btn">About Me</button>
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://telegram.org" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://dev.to" target="_blank" rel="noreferrer">Dev</a>
      </div>
    </header>
  );
};

export default Header;
