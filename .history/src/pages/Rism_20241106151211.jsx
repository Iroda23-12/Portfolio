import React from 'react';

const Rism = () => {
  return (
    <section className="container" style={{
      margin:''
    }}>
      <nav className="navbar">
        <h1 className="logo">2rism</h1>
        <ul className="nav-list">
          <li>home</li>
          <li>hotels</li>
          <li>restaurants</li>
          <li>tours</li>
          <li>destinations</li>
          <li>activities</li>
          <li>contact</li>
        </ul>
        <div className="user-info">
          <div className="user-text">
            <p>Holla</p>
            <h6>Ales Anna</h6>
          </div>
          <img
            className="user-image"
            src="https://2rism.netlify.app/Imgs/ProfilePic/124164909_2212008852330390_5501660797980127002_n%20(1).jpg"
            alt="Profile"
            style={{ width: '50px' }}
          />
        </div>
      </nav>

      <nav className="header1">
        <h1 className="header-title">Discover the most engaging places</h1>
        <button className="discover-button">Discover on 3D globe</button>
      </nav>

      <div className="menu">
        {[...Array(4)].map((_, index) => (
          <div className="menu-item" key={index}>
            <i className="fa-sharp fa-regular fa-location-dot location-icon" style={{ color: '#ffc13b' }}></i>
            <div className="menu-text">
              <p>location</p>
              <h6>Explore nearby</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rism;