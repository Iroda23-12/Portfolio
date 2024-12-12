import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react';

const About = () => {
  return (
    <>
      <div className="about">
        <FontAwesomeIcon icon={faUser} /> 
        <h1>About Me</h1>
      </div>
    </>
  );
};

export default About;
