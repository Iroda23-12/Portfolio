import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';import useTypingEffect from "../hooks/useTypingEffect";


const About = () => {
  const aboutText = useTypingEffect(
    "Hi! My name is Iroda. I am a student of 168th school in grade 8A and have been studying at Coddy Camp for 10 months now, where I develop my web development skills. My passion for programming started in school, and I am actively involved in various projects, striving to create convenient and attractive web applications. In my projects, I use React and Zustand for state management. At the moment, I am working on the website 'UzbekistanExplorer.com', which is aimed at promoting tourism in Uzbekistan.",
    50 // скорость печати в миллисекундах
  );

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
          <p style={{
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
