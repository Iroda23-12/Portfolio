import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const About = () => {
  return (
    <div className="about" style={{
      textAlign: 'center',
      padding: '20vh',
      height: '100vh',
      backgroundColor: '#F7F7F7'
    }}>
      <div className="about1">
        <h1 style={{ fontFamily: 'sans-serif' }}>
          <b> <FontAwesomeIcon icon={faUser} /></b> About <span style={{ color: 'purple' }}>me</span>
        </h1>
        <br />
        <div>
          <p className="typing" style={{
            width: '600px',
            padding: '20px',
            fontSize: '22px',
            borderRadius: '10px'
          }}>
            <b>{aboutText}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
