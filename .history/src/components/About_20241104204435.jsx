import React, { useState, useEffect } from 'react';

const About = () => {
  const fullText = "Hi! My name is Iroda. ...";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // скорость печати

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{displayedText}</p>
    </div>
  );
};

export default About;
