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

      <div className="about" style={{ 
        textAlign: 'center', 
        padding: '220px', 
        backgroundImage: 'data:image/jpeg;base64,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 no-repeat', 
        backgroundSize: 'cover', 
        position: 'relative' 
      }}>
        <h1> <FontAwesomeIcon icon={faUser} />  About Me</h1><br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <p style={{ 
            width: '600px', 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Устанавливаем полупрозрачный фон для текста
            padding: '20px', 
            borderRadius: '10px' 
          }}>
            Привет! Меня зовут Ирода. Я учусь в 168-й школе в 8А классе и уже 10 месяцев обучаюсь в Coddy Camp, где развиваю свои навыки в веб-разработке. Моя страсть к программированию началась в школе, и я активно участвую в различных проектах, стремясь создать удобные и привлекательные веб-приложения.
            В своих проектах я использую React и Zustand для управления состоянием. В данный момент я работаю над сайтом "UzbekistanExplorer.com", который направлен на продвижение туризма в Узбекистане.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
