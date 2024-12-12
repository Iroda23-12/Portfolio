import React from 'react'

const Header = () => {
  return (
    
    <>
      <header style={{
                backgroundImage: 'url(https://img.freepik.com/premium-photo/beige-background-abstract-blurred-defocused-effect-elegant-background-websites-layouts_7954-3906.jpg)',

      }}>
        <a href="/" className="logo"><i className="fab fa-node-js"></i> logo</a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header