import React from 'react'


const Header = () => {
  const particlesInit = async (main) => {
    // Инициализируем tsparticles instance
    await loadFull(main);
  };
  return (
    <>
      <header>
        <a href="/" className="logo"><i className="fab fa-node-js"></i> logo</a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#ffffff", // Цвет фона
          },
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#888888", // Цвет частиц
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#888888", // Цвет линий
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
        retina_detect: true,
      }}
    />
    </>
  )
}

export default Header