import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import an icon
import React from 'react';
import { useFormAction } from 'react-router-dom';

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
