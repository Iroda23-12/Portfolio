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

      <div className="about" style={{ textAlign: 'center', padding: '40px' }}>
        <h1> <FontAwesomeIcon icon={faUser} />  About Me</h1>
        <p>
          О себе
          Привет! Меня зовут [Ваше Имя] [Ваше Отчество], и я - страстный разработчик, специализирующийся на веб-технологиях. Моя любовь к программированию началась в школе, где я активно участвовал в [упомяните о каких-либо курсах, проектах или кружках]. Эти опыты стали основой моего пути в IT.

          Я имею опыт работы с React и использую Zustand для управления состоянием в своих проектах. Мое творчество и подход к дизайну выражаются в моем последнем проекте - [название проекта], где я стремился создать интуитивно понятный и эстетически приятный интерфейс. Также я активно работаю над созданием сайта "UzbekistanExplorer.com", направленного на продвижение туризма в Узбекистане.
        </p>
      </div>
    </>
  );
};

export default Home;
