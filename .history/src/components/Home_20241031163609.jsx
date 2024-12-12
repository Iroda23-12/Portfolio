import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="intro" style={{ fontSize: '25px', textAlign: 'center', alignItems: 'center' }}>
          <h1>Hi There,<br /> I'm Iroda</h1>
          <h5>I study at <span>Frontend</span></h5>
          <button className="about-button">
            About Me <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
          <div className="social-icons" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
            <a href="https://t.me/+998336104445" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#0088cc' }}>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/bxbyy._.i/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '30px', color: '#C13584' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="avatar">
          <img src="girl1.png" alt="Avatar" className="avatar-image" />
        </div>
      </div>

      <div className="about" style={{ textAlign: 'center', padding: '220px' }}>
        <img src="https://files.oaiusercontent.com/file-VPYlJnzs6N8rdr9CLW8CrsOo?se=2024-10-31T11%3A40%3A26Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd634a0da-42f7-423d-98cf-e866a0af018d.webp&sig=6ckVaBHDQXsYOjF898o5gGvgXSm9D4mSP6Pmfg52YRU%3D" alt="" />
        <h1> <FontAwesomeIcon icon={faUser} />  About Me</h1><br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <p style={{ width: '600px' }}>
            Привет! Меня зовут Ирода. Я учусь в 168-й школе в 8А классе и уже 10 месяцев обучаюсь в Coddy Camp, где развиваю свои навыки в веб-разработке. Моя страсть к программированию началась в школе, и я активно участвую в различных проектах, стремясь создать удобные и привлекательные веб-приложения.
            В своих проектах я использую React и Zustand для управления состоянием. В данный момент я работаю над сайтом "UzbekistanExplorer.com", который направлен на продвижение туризма в Узбекистане. </p>
        </div>
      </div>
    </>
  );
};

export default Home;
