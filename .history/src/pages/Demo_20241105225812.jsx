import React from 'react';

const Demo = () => {
    const jewelryImages = [
        {
            src: "http://s.alicdn.com/@sc04/kf/H22bdf7b127414f56804ddea06e6633c2I.jpg_300x300.jpg",
            alt: "Jewelry 1"
        },
        {
            src: "https://jewell.uz/thumb/2/22F2KQ9yO87fxeUJ2u1H_Q/940r340/d/img_3837.jpg",
            alt: "Jewelry 2"
        },
        // Add more images here
    ];

    return (
        // <nav>  
        <>
            <header className="navbar">
                <div className="container">
                    <ul className="nav-links">
                        <li><a href="#">New</a></li>
                        <li><a href="#">All Jewelry</a></li>
                        <li><a href="#">Rings</a></li>
                        <li><a href="#">Necklaces</a></li>
                        <li><a href="#">Earrings</a></li>
                        <li><a href="#">Bracelets</a></li>
                        <li><a href="#">Wedding</a></li>
                        <li><a href="#">Home & Gifts</a></li>
                        <li><a href="#">Get Zapped</a></li>
                        <li><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li><i className="fa-solid fa-user"></i></li>
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>
            </header>

            <div className="logo-container" style={{ textAlign: 'center' }}>
                <img style={{ width: '150px', borderRadius: '100%' }} src="photo_2024-05-31_11-51-49.jpg" alt="Jewelry Display" />
                <p>ювелирные изделия</p>
            </div>

            <div className="location-info">
                Chilonzor district of Tashkent city
                <div className="contact-info">
                    <a href="tel:+998946804445"><b>+998 94 680-44-45</b></a>
                </div>
            </div>

            <div className="gallery">
                {jewelryImages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>

            <div className="bot-phone">
                <div className="bot-phone-title">Telephone:</div>
                <div className="bot-phone-body">
                    <div><a href="tel:+998 94-680-44-45">+998 94-680-44-45</a></div>
                </div>
                <div className="work-time">from 10:00-21:00 seven days a week</div>
            </div>

            <div className="bot-address">
                <div className="bot-address-title">We are located at:</div>
                Chilonzor district of Tashkent city
            </div>

            <div className="social-media">
                <p>Join us in social networks</p>
                <a href="https://t.me/m_i_jewellry"><i className="fa-brands fa-telegram" style={{ color: '#74C0FC' }}></i></a>
                <a href="https://www.instagram.com/m_i_jewelry?igsh=MXh6MHZ2YW45amRobw=="><i className="fa-brands fa-instagram" style={{ color: '#ff006f' }}></i></a>
            </div>
            </>
        {/* </nav> */}
    );
};

export default Demo;
