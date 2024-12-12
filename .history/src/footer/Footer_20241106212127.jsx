import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-[#1A1A2E] text-white py-10" style={{backgroundColor:'#1A1A2E',width:''}}>
      <div className="container mx-auto flex flex-wrap justify-between space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Iroda Portfolio</h2>
          <p className="text-lg mb-4">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
          <p className="text-xl font-semibold">Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li><FontAwesomeIcon icon={faPhoneAlt} /> +998 (XX)-XXX-XX-XX</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> iroda6638@gmail.com</li>
            <li><FontAwesomeIcon icon={faMapMarkedAlt} /> Uzbekistan Tashkent</li>
          </ul>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-white hover:text-[#0077b5]">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white hover:text-[#333]">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="text-white hover:text-[#1DA1F2]">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-[#0088cc]">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>Designed With ❤️ By Iroda</p>
      </div>
    </div>
  );
};

export default Footer;
