import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Designed and Developed by Iroda</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
