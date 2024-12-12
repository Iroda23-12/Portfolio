import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold">Jigar's Portfolio</h2>
          <p className="mt-2">Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          <p className="mt-4 text-xl font-semibold">Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <ul className="mt-4">
            <li>📞 +91 XXX-XXX-XXXX</li>
            <li>📧 jigarsable21@gmail.com</li>
            <li>🌍 Pune, India-412206</li>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white">🔗 LinkedIn</a>
              <a href="#" className="text-white">🐱 GitHub</a>
              <a href="mailto:jigarsable21@gmail.com" className="text-white">✉️ Email</a>
              <a href="#" className="text-white">🐦 Twitter</a>
              <a href="#" className="text-white">📱 Telegram</a>
            </div>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>Designed With ❤️ By Jigar Sable</p>
      </div>
    </footer>
  );
};

export default Footer;
