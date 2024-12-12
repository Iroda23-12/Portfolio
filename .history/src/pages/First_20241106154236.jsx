import React from 'react'

const First = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <img src="https://ahmed-alaa-attia.github.io/chanelfrontend.github.io/image-product-desktop.jpg">
                        <div className="product">
                            <h6>PERFUME</h6>
                            <h1>Gabrielle Essence Eau De Parfum</h1>
                            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                                Perfumer-Creator for the House of CHANEL.</p>
                            <div class="price">
                                <h1>$149.99</h1>
                                <h3>$169.99</h3>
                            </div>
                            <button className="btn"><img src="	https://ahmed-alaa-attia.github.io/chanelfrontend.github.io/icon-cart.svg" alt="">Add to Cart</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default First