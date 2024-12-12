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
        backgroundImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ0NDw8NDQ4ODQ8ODQ0ODQ8NDg0NFREYFhURFRUYHygiGBslGxMXITEhJikrLi4uFx8zODMtNygtLi8BCgoKDQ0NDg0NDisZFRkrLSs3LTcrNys3KystKysrKysrKysrKzctNysrKysrLSsrKysrLSsrKysrKysrKysrLf/AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAA1EAEBAAEBBAcHAwIHAAAAAAAAAQIRITFRcQNBYYGRsdEEEhOhweHwQlLxMsIiYnKCkqKy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7XaxalrNoLaxaWsWgtrFpayqFoAAAAAAAAAAADXR4W3zvBjbsk326Tm9eGOk0nfeN4gY4ybJ96oiKIIACAAioWt4Ydd3+X3To518N3Pi6IoIACAAgCWs2pazaoWs2paCAAAAAAAAAAAAAJderfdk5g6+zY7blw2Y/W/Txd2ccdJJN0mnPtVFEEABAEBUEvCdd0+4vR/1cp879pUV18urkIgKIACAAAONrNoKgAAAAAAAAAAAACW6Arp0GP6u7H61Oj6K3blsnDrvPhHcUQRABAEAQQBRei/Ve3Twk9WWui3d99PoDaAAIAqIKiiAOIAAAAAAYY3LZjNeN3Sd7vj7LP1W3smyeoPPbEmU6tvLa9uPRYTdjjz01vjW9UV4dL+3P/jT3Mv25eGj2oDyfDz/b/wBsfVZ0Of8AlnO2+UepAcJ7PevLwn1rph0eOO2Tbxu2tCggiACAICoIAogiIN9H/TO//wBVztdMd2P+nHx0UUQAEBVQRBRAHMBUAAG+h6L3tt2Y/PL7M4Ye9lMerfleEe2cJsk3QUkkmk2SboCIAgACAIIACAAgCAqCAiiCKggAmW3Zx2eOx1tc8N+vDzv21+TYoCIKggiiCgL7t7PGQBzAARV6PD3stOqbcuXAHo9mw0x1u/LbeXVPzi6iIogAAgCCAAgAIIIIoqCIoCKggAJ59Ra1jNN+/wApwBZNJp8+N4giCoIoqanY1JpzBJj/AB1tAiggI5jpfZs+OHjl6Lj7Lf1Zd2M0+dUcZLbpNt8u2vZ0XRzGad9vGrhhMZpJp9VRRAABAEEABAAQQQRQBEUBFQQAEWTX16lmk9fzcBJpt6/L7ggKggKm/Z+SHZN9/NXTGafm+ikmn5vAAQQQAB7EERRAAEAEEABAAQQQRQBEUA07fDaqIjWzhrzpcv43QE93jpDZz5+iALaggKggKlv2nGjeGGm27/IFwx053f6KAogiIAigIA9iAiiAAggCAAgCCCKAJr3+SKunhxTWc+foloqLaiNYYW7d0436cQZJt3beW13x6OTt5+jVorh8PLhpzsX4V4z5+jqiDn8Lt+R8Lt+TYDn8Pt+X3Phzt8m0VEk0AFEBEEEUEABAQexBBVQQBAAQRUAQBFrOvz39k6oirb9+1EFQS3QdPZ8NdM7/ALJ/cKvR9F15d2PDm60EEBAEABBFQBBRAQEEVBAAQAAAeoERRAAQQQBFAERUv3vKfknelpx7p52+UQQELVFwx97L3eqbcuXVO/6V664+zY6YS9eX+K9+75aOqKIIAgAIIqAIKAiAgioAgCAAAAAD0oCKIoIyAogCKiAqM8ef0iAAx0k1mnGzHxugA91QEVBABFARAVEARUQFRBABAQAFAAAAH//Z no-repeat', 
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
