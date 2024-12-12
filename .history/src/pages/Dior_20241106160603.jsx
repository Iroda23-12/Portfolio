import React from 'react';

const Dior = () => {
  return (
    <div>
        <div className="menu__wrapper">
          <div className="container">
            <div className="image__section">
              <ul>
                <li>FASHION & ACCESSORIES FRAGRANCE & BEAUTY</li>
              </ul>
              <h1 className="brand__title">DIOR</h1>
            </div>
          </div>
        </div>

        <div className="end-menu__container">
          <p className="category__label" style={{}}>MAKEUP</p>
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
  );
}

export default Dior;
