import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faCommentDots, faEnvelope, faHeadset, faLaptopCode, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [hoveredElement, setHoveredElement] = useState();
  const [language, setLanguage] = useState('ENG'); // Default language
  const aboutText = {
    ENG: "Hi! My name is Iroda. I am a student of 168th school in grade 8A and have been studying at Coddy Camp for 10 months now, where I develop my web development skills. My passion for programming started in school, and I am actively involved in various projects, striving to create convenient and attractive web applications. In my projects, I use React and Zustand for state management. At the moment, I am working on the website 'UzbekistanExplorer.com', which is aimed at promoting tourism in Uzbekistan.",
    RUS: "Привет! Меня зовут Ирода. Я учусь в 168-й школе в 8A классе и уже 10 месяцев занимаюсь веб-разработкой в Coddy Camp. Моя страсть к программированию началась в школе, и я активно участвую в различных проектах, стремясь создавать удобные и привлекательные веб-приложения. В своих проектах я использую React и Zustand для управления состоянием. В данный момент я работаю над сайтом 'UzbekistanExplorer.com', который направлен на продвижение туризма в Узбекистане.",
    UZB: "Salom! Mening ismim Iroda. Men 168-maktabning 8A sinfida o‘qiyapman va Coddy Campda 10 oy davomida veb-ishlab chiqish bo‘yicha ta’lim olayapman. Dasturlashga bo‘lgan qiziqishim maktabda boshlangan va hozirda men turli loyihalarda ishtirok etib, qulay va jozibador veb-ilovalar yaratishga intilaman. Loyihalarimda React va Zustandni holatni boshqarish uchun ishlataman. Hozirda men 'UzbekistanExplorer.com' veb-sayti ustida ishlamoqdaman, u O‘zbekistonda turizmni rivojlantirishga qaratilgan."
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9ou4xwc', 'service_9ou4xwc', form.current, {
        publicKey: 'eOn9CpaFXZtRBUxkd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <header>
        <a href="/" className="logo"><i className="fab fa-node-js"></i>💻</a>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
            <select className='language-selector' onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option value="ENG">ENG</option>
              <option value="RUS">RUS</option>
              <option value="UZB">UZB</option>
            </select>
            <li>🌝🌕</li>
            <li>🌚🌑</li>
          </ul>
        </nav>
      </header>

      <div className="home" style={{
        backgroundColor: '#F7F7F7',
        borderBottom: '2px solid purple',
      }}>
        <div className="intro" style={{ fontSize: '25px', textAlign: 'center', alignItems: 'center' }}>
          <h1>{language === 'ENG' ? 'Hi There,' : language === 'RUS' ? 'Привет,' : 'Salom,'}<br /> {language === 'ENG' ? "I'm Iroda" : language === 'RUS' ? "Меня зовут Ирода" : "Mening ismim Iroda"}</h1>
          <h5>{language === 'ENG' ? "I study at Frontend" : language === 'RUS' ? "Я учусь на фронтенде" : "Men frontend o‘qiyman"}</h5>
          <button className="about-button">
            {language === 'ENG' ? 'About Me' : language === 'RUS' ? 'Обо мне' : 'Men haqimda'} <FontAwesomeIcon icon={faArrowAltCircleDown} />
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
        padding: '20vh',
        height: '100vh',
        backgroundColor: '#F7F7F7'
      }}>
        <div className="about1">
          <h1 style={{ fontFamily: 'sans-serif' }}>
            <b> <FontAwesomeIcon icon={faUser} /></b> {language === 'ENG' ? 'About Me' : language === 'RUS' ? 'Обо мне' : 'Men haqimda'}
          </h1>
          <br />
          <div>
            <p className="typing" style={{
              width: '600px',
              padding: '20px',
              fontSize: '22px',
              borderRadius: '10px'
            }}>
              <b>{aboutText[language]}</b>
            </p>
          </div>
        </div>
      </div>
      {/* Continue with the rest of the content like Skills, Projects, etc. */}
    </>
  );
};

export default Home;
