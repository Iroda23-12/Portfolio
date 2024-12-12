import React from 'react';

const Rism = () => {
  return (
    <section className="yer">
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
            src="https://s3-alpha-sig.figma.com/img/685a/b87e/a5c9de715242a95c58b26a57fc1ec432?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDH1MX2PdYK0xEOrzuPJCb-xPkzvDfVZiA0Zklz5CKTL7zizOhC5hRqEYsQxGXNgP7sp4JUnXaL7UiMHvtlkcee4lHTYbOay5-eyQqb2wR7O7lHSwMJ4lnfkpfZEUB-E-MuxbsBx5oTUL9wpoqASu0rdQdvrPZuZjnZ933i48rMK~ydbcFX1Jpbl170iVPp-yTC5OeeGd~JBNU5toYGNIRGV0chANnRq~AcVpzjXj655Ap6WIasjnud9EpslAfzOR8fLuYm227Dwpz-5Pvgjamsp1h-KI6Z4q0CnG04DFXD6h3NgeQrS9urDn9fi~N0gA6IGp2G~kaCqR6zoNTbtOg__"
            alt=""
          />
        </div>

      <header>
        <h1>Discover the most engaging places</h1>
        <button className="btn">Discover on 3D globe</button>
      <div className="menu">
        {Array(4).fill().map((_, index) => (
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
