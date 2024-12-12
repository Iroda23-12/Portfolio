import React from 'react';
import './style.css';

function App() {
  return (
    <div className="main-nav-container">
      <nav>
        <div className="nav-bar-container">
          <div className="nav-links-wrapper">
            <div className="nav-items-list">
              <ul className="nav-links">
                <li><a href="#">New</a></li>
                <li><a href="">All Jewelry</a></li>
                <li><a href="">Rings</a></li>
                <li><a href="">Necklaces</a></li>
                <li><a href="">Earrings</a></li>
                <li><a href="">Bracelets</a></li>
                <li><a href="">Wedding</a></li>
                <li><a href="">Home & Gifts</a></li>
                <li><a href="">Get Zapped</a></li>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </ul>
            </div>
          </div>
        </div>

        <div className="brand-image-wrapper">
          <center><img src="photo_2024-05-31_11-51-49.jpg" alt="Brand Logo" /></center>
          <p className="brand-subtitle">ювелирные изделия</p>
        </div>

        <div className="contact-info-wrapper">
          <div className="contact-location">Chilonzor district of Tashkent city</div>
          <div className="contact-phone">
            <a href="tel:+998946804445"><b>+998 94 680-44-45</b></a>
          </div>
        </div>

        <div className="jewelry-images-gallery">
          <img src="http://s.alicdn.com/@sc04/kf/H22bdf7b127414f56804ddea06e6633c2I.jpg_300x300.jpg" width="223px" height="340px" alt="Jewelry" />
          <img src="https://jewell.uz/thumb/2/22F2KQ9yO87fxeUJ2u1H_Q/940r340/d/img_3837.jpg" alt="Jewelry" />
          <img src="https://jewell.uz/thumb/2/1MByu56-tP4yDXGzd80Bsw/940r340/d/img_6455.jpg" alt="Jewelry" />
          <img src="https://jewell.uz/thumb/2/KtahpOI2zuJAvVWQn8WVow/940r340/d/img_6258.jpg" alt="Jewelry" />
          <img src="https://jewell.uz/thumb/2/C570EJ7VB3d2VtOlF4kTJQ/940r340/d/img_5700_2.jpg" alt="Jewelry" />
        </div>

        <div className="footer-contact-info">
          <div className="footer-phone">
            <div className="footer-phone-title">Telephone:</div>
            <div className="footer-phone-number"><a href="tel:+998946804445">+998 94-680-44-45</a></div>
          </div>
          <div className="working-hours">from 10:00-21:00 seven days a week</div>
          <div className="footer-address">
            <div className="footer-address-title">We are located at:</div>
            <div>Chilonzor district of Tashkent city</div>
          </div>
        </div>

        <div className="social-media-section">
          <p>Join us in social networks</p>
          <a href="https://t.me/m_i_jewellry"><i className="fa-brands fa-telegram" style={{ color: "#74C0FC" }}></i></a>
          <a href="https://www.instagram.com/m_i_jewelry?igsh=MXh6MHZ2YW45amRobw=="><i className="fa-brands fa-instagram" style={{ color: "#ff006f" }}></i></a>
        </div>

        <div className="newsletter-subscription">
          <p>Subscribe to our store's newsletter for great deals</p>
          <center><input type="email" className="newsletter-email" placeholder="Enter your email" /></center>
        </div>
      </nav>
    </div>
  );
}

export default App;
