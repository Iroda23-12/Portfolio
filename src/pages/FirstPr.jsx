import React from 'react';

const FirstPr = () => {
    return (
        <section className='section2010'>
            <div className="product-preview__container">
                <div className="product-preview__content">
                    <img
                        src="https://ahmed-alaa-attia.github.io/chanelfrontend.github.io/image-product-desktop.jpg"
                        alt="Product Preview"
                    />
                    <div className="product-preview__details" >
                        <h6 className="product-preview__category"style={{fontFamily:'Fraunces'}}>PERFUME</h6>
                        <h1 className="product-preview__name">
                            Gabrielle <br /> Essence Eau De Parfum
                        </h1>
                        <p className="product-preview__description">
                            A floral, solar and voluptuous interpretation composed by <br /> Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL.
                        </p>
                        <div className="product-preview__price">
                            <h1 className="current-price" style={{fontSize:'34px',lineHeight:'1em'}}>$149.99</h1>
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
    );
};

export default FirstPr;
