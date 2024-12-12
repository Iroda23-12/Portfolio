import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Jigar's Portfolio</h2>
          <p className="text-lg mb-4">Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          <p className="text-xl font-semibold">Keep Rising 🚀. Connect with me over live chat!</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-[#FF6347]">Home</a></li>
            <li><a href="#about" className="hover:text-[#FF6347]">About</a></li>
            <li><a href="#skills" className="hover:text-[#FF6347]">Skills</a></li>
            <li><a href="#education" className="hover:text-[#FF6347]">Education</a></li>
            <li><a href="#work" className="hover:text-[#FF6347]">Work</a></li>
            <li><a href="#experience" className="hover:text-[#FF6347]">Experience</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li>📞 +91 XXX-XXX-XXXX</li>
            <li>📧 jigarsable21@gmail.com</li>
            <li>🌍 Pune, India-412206</li>
          </ul>
          <div className="mt-4 flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" className="text-white hover:text-[#0077b5]">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" className="text-white hover:text-[#333]">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:jigarsable21@gmail.com" className="text-white hover:text-[#FF6347]">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://twitter.com" target="_blank" className="text-white hover:text-[#1DA1F2]">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://t.me" target="_blank" className="text-white hover:text-[#0088cc]">
              <i className="fab fa-telegram"></i> Telegram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Designed With ❤️ By Jigar Sable</p>
      </div>
    </footer>
  );
};

export default Footer;
