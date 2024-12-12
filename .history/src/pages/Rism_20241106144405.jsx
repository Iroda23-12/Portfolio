import React from 'react';
import './style.css'; // Подключаем файл стилей, если он находится в той же директории

const Rism = () => {
  return (
    <section className="yer">
      <nav>
        <h1>2rism</h1>
        <ul>
          <li>home</li>
          <li>hotels</li>
          <li>restaurants</li>
          <li>tours</li>
          <li>destinations</li>
          <li>activities</li>
          <li>contact</li>
        </ul>
        <div className="user">
          <div className="text">
            <p>Holla</p>
            <h6>Ales Anna</h6>
          </div>
          <img
            style={{ width: '50px' }}
            src="https://2rism.netlify.app/Imgs/ProfilePic/124164909_2212008852330390_5501660797980127002_n%20(1).jpg"
            alt="Profile"
          />
        </div>
      </nav>

      <header>
        <h1>Discover the most engaging places</h1>
        <button className="btn">Discover on 3D globe</button>
      </header>

      <div className="menu">
        {[...Array(4)].map((_, index) => (
          <div className="location" key={index}>
            <i className="fa-sharp fa-regular fa-location-dot" style={{ color: '#ffc13b' }}></i>
            <div className="text">
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
