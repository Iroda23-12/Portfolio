import React from 'react'

const Header = () => {
  return (
    
    <>
      <header >
        <a href="/" className="logo"><i className="fab fa-node-js"></i></a>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header