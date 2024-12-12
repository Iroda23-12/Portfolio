// ParticlesBackground.jsx
import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    particlesJS.load('particles-json', '/particles.json', () => {
      console.log('callback - particles.json config loaded');
    });
  }, []);

  return (
    <div id="particles-json" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
  );
};

export default ParticlesBackground;
