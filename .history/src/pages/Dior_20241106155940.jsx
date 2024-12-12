import React from 'react';

function Dior() {
    return (
        <div>
            <header>
                <div className="menuWrapper">
                    <div className="container">
                        <div className="bannerBackground">
                            <ul className="bannerContent">
                                <li>FASHION & ACCESSORIES FRAGRANCE & BEAUTY</li>
                            </ul>
                            <h1 className="mainTitle">DIOR</h1>
                        </div>
                    </div>
                </div>

                <div className="subHeader">
                    <p>MAKEUP</p>
                </div>

                <div className="centeredSection">
                    <h3 className="sectionTitle">ROUGE DIOR</h3>
                    <a className="button buttonSecondary" href="#" target="_self">Discover</a>
                </div>

                <div className="imageSection">
                    <img
                        src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw09ae364d/images/beauty/0-HOME/FRAGRANCES/2024/4-APRIL/A24_F095_LCP-CRUISE_GammeSansBoite_5550x2000_LCP.jpg"
                        alt=""
                    />
                </div>

                <div className="centeredSection">
                    <p>FRAGRANCE</p>
                    <h3 className="sectionTitle">LA COLLECTION PRIVÉE CHRISTIAN DIOR</h3>
                    <a className="button buttonSecondary" href="#" target="_self">Discover</a>
                </div>

                {/* Add additional sections as needed */}
        </div>
    );
}

export default Dior;
