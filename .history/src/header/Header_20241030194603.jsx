import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <a href="/" className="logo"><i class="fab fa-node-js"></i> Jigar</a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
            <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
</header>
    </>
  )
}

export default Header