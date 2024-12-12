import React from 'react'

const Allproject = () => {
    return (
        <>
        {/* <h1 style={{textAlign:'center'}}>Dior</h1> */}
            <div>
                <div className="menu__wrapper">
                    <div className="container3">
                        <div className="image__section">
                            <ul>
                                <li>FASHION & ACCESSORIES FRAGRANCE & BEAUTY</li>
                            </ul>
                            <h1 className="brand__title">DIOR</h1>
                        </div>
                    </div>
                </div>

                <div className="end-menu__container">
                    <p className="category__label" style={{ color: 'black' }}>MAKEUP</p>
                </div>

                <div className="product__section">
                    <h3 className="product__title">
                        ROUGE DIOR
                    </h3>
                    <a className="cta__button cta__button--secondary" href="#" target="_self" aria-label="Discover ROUGE DIOR">
                        Discover
                    </a>
                </div>

                <div className="image__container">
                    <img
                        className="image__item"
                        src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw09ae364d/images/beauty/0-HOME/FRAGRANCES/2024/4-APRIL/A24_F095_LCP-CRUISE_GammeSansBoite_5550x2000_LCP.jpg"
                        alt="Fragrance"
                    />
                </div>

                <div className="category__description">
                    <p className="category__label">FRAGRANCE</p>
                    <h3 className="product__title">LA COLLECTION PRIVÉE CHRISTIAN DIOR</h3>
                    <a className="cta__button cta__button--secondary" href="#" target="_self" aria-label="Discover ROUGE DIOR">
                        Discover
                    </a>
                </div>

                <div className="image__container">
                    <img
                        className="image__item"
                        src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw477fb1df/images/beauty/0-HOME/SKINCARE/2024/1_JANUARY/CT_Hyalushot24_Mood_Solo_Texture_5550X2000.jpg"
                        alt="Skincare"
                    />
                </div>

                <div className="category__description">
                    <p className="category__label">SKINCARE</p>
                    <h3 className="product__title">HYALUSHOT</h3>
                    <a className="cta__button cta__button--secondary" href="#" target="_self" aria-label="Discover ROUGE DIOR">
                        Discover
                    </a>
                </div>

                <div className="image__container">
                    <img
                        className="image__item"
                        src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw360d3f6e/images/beauty/0-HOME/BEAUTY/2024/4-APRIL/Adorables_Gamme_5550X2000_WFRAG.jpg"
                        alt="Beauty"
                    />
                </div>

                <div className="category__description">
                    <p className="category__label">FRAGRANCE</p>
                    <h3 className="product__title">J'ADORE</h3>
                    <a className="cta__button cta__button--secondary" href="#" target="_self" aria-label="Discover ROUGE DIOR">
                        Discover
                    </a>
                </div>

                <div className="image__container">
                    <img
                        className="image__item"
                        src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw7242fcac/images/beauty/0-HOME/FRAGRANCES/2024/1_JANUARY/DH24_Ecom_Instit_Intense_5550x2000.jpg"
                        alt="Fragrance"
                    />
                </div>

                <div className="category__description">
                    <p className="category__label">FRAGRANCE</p>
                    <h3 className="product__title">DIOR HOMME</h3>
                    <a className="cta__button cta__button--secondary" href="#" target="_self" aria-label="Discover ROUGE DIOR">
                        Discover
                    </a>
                </div>

                <div className="end-nav__container">
                    <ul className="end-nav__list">
                        <li><a href="#"><b>EXPLORE MORE</b></a></li>
                        <li><a href="#">Dior Bath & Body Soap</a></li>
                        <li><a href="#">Nail Polish Lacquers</a></li>
                        <li><a href="#">La Collection Privée</a></li>
                        <li><a href="#">Rouge Dior</a></li>
                    </ul>
                </div>
            </div>
            <h1 style={{textAlign:'center',backgroundColor:'skyblue'}}>First Project</h1>
            <section className='section2010'>
                <div className="product-preview__container">
                    <div className="product-preview__content">
                        <img
                            src="https://ahmed-alaa-attia.github.io/chanelfrontend.github.io/image-product-desktop.jpg"
                            alt="Product Preview"
                        />
                        <div className="product-preview__details" >
                            <h6 className="product-preview__category" style={{ fontFamily: 'Fraunces' }}>PERFUME</h6>
                            <h1 className="product-preview__name">
                                Gabrielle <br /> Essence Eau De Parfum
                            </h1>
                            <p className="product-preview__description">
                                A floral, solar and voluptuous interpretation composed by <br /> Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL.
                            </p>
                            <div className="product-preview__price">
                                <h1 className="current-price" style={{ fontSize: '34px', lineHeight: '1em' }}>$149.99</h1>
                                <h3 className="original-price">$169.99</h3>
                            </div>
                            <button className="product-preview__btn">
                                <img
                                    src="https://ahmed-alaa-attia.github.io/chanelfrontend.github.io/icon-cart.svg"
                                    alt="Cart Icon"
                                />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <h1 style={{textAlign:'center'.b}}>Demo day1</h1>
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
            <h1 style={{textAlign:'center'}}>2Rism</h1>
            <section className="tourism-background">
                <nav className="tourism-nav">
                    <h1 className="tourism-logo">2rism</h1>
                    <ul className="tourism-nav-list">
                        <li className="tourism-nav-item">Home</li>
                        <li className="tourism-nav-item">Hotels</li>
                        <li className="tourism-nav-item">Restaurants</li>
                        <li className="tourism-nav-item">Tours</li>
                        <li className="tourism-nav-item">Destinations</li>
                        <li className="tourism-nav-item">Activities</li>
                        <li className="tourism-nav-item">Contact</li>
                    </ul>
                    <div className="tourism-user-info">
                        <div className="tourism-user-text">
                            <p>Hello</p>
                            <h6>Ales Anna</h6>
                        </div>
                        <img
                            className="tourism-user-image"
                            src="https://2rism.netlify.app/Imgs/ProfilePic/124164909_2212008852330390_5501660797980127002_n%20(1).jpg"
                            alt="User"
                            style={{ width: "50px" }}
                        />
                    </div>
                </nav>

                <div className="tourism-header">
                    <h1>Discover the most engaging places</h1>
                    <button className="tourism-btn-discover">Discover on 3D Globe</button>
                </div>

                <div className="tourism-menu">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div className="tourism-menu-item" key={index}>
                            <i className="fas fa-location-dot tourism-location-icon" style={{ color: "#ffc13b" }}></i>
                            <div className="tourism-location-text">
                                <p>Location</p>
                                <h6>Explore Nearby</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Allproject