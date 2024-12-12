import React from 'react';
import './style.css';

function TourismPage() {
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
                        src="https://s3-alpha-sig.figma.com/img/685a/b87e/a5c9de715242a95c58b26a57fc1ec432?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDH1MX2PdYK0xEOrzuPJCb-xPkzvDfVZiA0Zklz5CKTL7zizOhC5hRqEYsQxGXNgP7sp4JUnXaL7UiMHvtlkcee4lHTYbOay5-eyQqb2wR7O7lHSwMJ4lnfkpfZEUB-E-MuxbsBx5oTUL9wpoqASu0rdQdvrPZuZjnZ933i48rMK~ydbcFX1Jpbl170iVPp-yTC5OeeGd~JBNU5toYGNIRGV0chANnRq~AcVpzjXj655Ap6WIasjnud9EpslAfzOR8fLuYm227Dwpz-5Pvgjamsp1h-KI6Z4q0CnG04DFXD6h3NgeQrS9urDn9fi~N0gA6IGp2G~kaCqR6zoNTbtOg__"
                        alt="User"
                        style={{ width: "50px" }}
                    />
                </div>
            </nav>

            <header className="tourism-header">
                <h1>Discover the most engaging places</h1>
                <button className="tourism-btn-discover">Discover on 3D Globe</button>
            </header>

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
    );
}

export default Rism;
