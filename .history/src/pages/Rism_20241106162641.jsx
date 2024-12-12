import React from 'react';
function Rism() {
    return (
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Rism;
