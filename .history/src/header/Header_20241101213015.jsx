import React from 'react'

const Header = () => {
  return (
    
    <>
      <header >
        <a href="/" className="logo"><i className="fab fa-node-js"></i> <img src="logo.png" width={'100px'} style={{padding:'10px',marginTop:'10px',alignItems:'center',justifyContent:'center'}} alt="" /> </a>
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