// ParticlesBackground.jsx
import React, { useEffect } from 'react';
import particlesJS from '<particles className="json"></particles>/particles';

const ParticlesBackground = () => {
  useEffect(() => {
    particlesJS.load('particles-js', '/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <div id="particles-json" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>
  );
};

export default ParticlesBackground;