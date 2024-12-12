import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faCommentDots, faEnvelope, faHeadset, faLaptopCode, faMapMarkedAlt, faPaperPlane, faPhone, faPhoneAlt, faUser, } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
const Home = () => {

  const { t } = useTranslation()

  const handleSelectChange = e => {
    const selectedLanguage = e.target.value
    console.log(selectedLanguage)
    i18n.changeLanguage(selectedLanguage)
  }


  const [hoveredElement, setHoveredElement] = useState();


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
            <li><a className="active" href="#home">{t("Home")}</a></li>
            <li><a href="#about">{t(`About`)}</a></li>
            <li><a href="#skills">{t("Skills")}</a></li>
            <li><a href="#Project">{t("Project")}</a></li>
            <li><a href="#contact">{t("Contact")}</a></li>
            <select className='language-selector' onChange={handleSelectChange}>
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
              <option value="uz">UZB</option>
            </select>
          </ul>
        </nav>
      </header>
      <div className="home" style={{
        backgroundColor: '#F7F7F7',
        borderBottom: '2px solid purple',
      }}>
        <div className="intro" style={{ fontSize: '25px', textAlign: 'center', alignItems: 'center' }}>
          <h1>{t("Hi There")}</h1>
          <h1>{t("I'm")}</h1>
          <h5>{t("I study at")} <span>{t("Frontend")}</span></h5>
          <button className="about-button">
            {t("About-button")} <FontAwesomeIcon icon={faArrowAltCircleDown} />
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
        <div className="avatar" >
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
            <b> <FontAwesomeIcon icon={faUser} /></b> About <span style={{ color: 'purple' }}>me</span>
          </h1>
          <br />
          <div>
            <p className="typing" style={{
              width: '600px',
              padding: '20px',
              fontSize: '22px',
              borderRadius: '10px'
            }}>
              <b>{t("AboutMe")}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="skills" id="skills">
        <h1> <FontAwesomeIcon icon={faLaptopCode} />{t(" Skills & ")}<span>{t("Abilities")}</span></h1>
        <div className="skills-icons" style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px'
        }}>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React" />
            <h2>ReactJs</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </div>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />
            <h2>Bootstrap</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="Netlify" />
            <h2>Netlify</h2>
          </div>
          <div className="icon-skill" style={{
            marginLeft: '520px'
          }}>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
            <h2>CSS</h2>
          </div>
          <div className="icon-skill">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" />
            <h2>HTML</h2>
          </div>
        </div>
      </div>
      <div className="project" style={{ backgroundColor: "#F7F7F7", }}>
        <div className="project-text"><br /><br /><br />
          <h1>{t("My Project")}</h1>
          <div className="project1">
            <center>
              <div
                className="div"
                onMouseEnter={() => setHoveredElement(1)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <p>{t("First project")}</p>
                <img src="1project.jpg" alt="My first project" />
                {hoveredElement === 1 && (
                  <a href="/project" >
                    <button className="code-button" >
                      Посмотреть код
                    </button>
                  </a>
                )}
              </div>
              <div
                className="div2"
                onMouseEnter={() => setHoveredElement(2)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <p>{t("Dior")}</p>
                <img src="dior.png" alt="Dior" />
                {hoveredElement === 2 && (
                  <a href="/dior">
                    <button className="code-button" style={{ opacity: hoveredElement === 2 ? 1 : 0 }}>
                      Посмотреть код
                    </button>
                  </a>
                )}
              </div>
              <div
                className="div"
                onMouseEnter={() => setHoveredElement(3)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <p>{t("First demo day")}</p>
                <img src="demo.png" alt="First demo day" />
                {hoveredElement === 3 && (
                  <a href="/demo">
                    <button className="code-button" style={{
                      opacity: hoveredElement === 3 ? 1 : 0,
                    }}>
                      Посмотреть код
                    </button>
                  </a>
                )}
              </div>
              <div
                className="div2"
                onMouseEnter={() => setHoveredElement(4)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <p>{t("2Rism")}</p>
                <img src="2rism.png" alt="2Rism" />
                {hoveredElement === 4 && (
                  <a href="/rism">
                    <button className="code-button" style={{ opacity: hoveredElement === 4 ? 1 : 0 }}>
                      Посмотреть код
                    </button>
                  </a>
                )}
              </div>
            </center>
          </div>
        </div>
      </div>
      <section className="contact" id="contact">
        <h2 className="heading"><FontAwesomeIcon icon={faHeadset} /><b>{t(" Get in ")}<span>{t("Touch")}</span></b></h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="https://i.pinimg.com/564x/24/ff/cf/24ffcfb1e082b236f6898007351d7f76.jpg" alt="Contact Image" />
            </div>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="user_name" placeholder="Name" required />
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                </div>
                <div className="field">
                  <input type="text" name="user_email" placeholder="Email" required />
                  <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
                </div>
                <div className="field">
                  <input type="text" name="user_phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"><FontAwesomeIcon icon={faPhone} /></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"><FontAwesomeIcon icon={faCommentDots} /></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  {t("Submit")} <i className="fa fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="bg-[#1A1A2E] text-white py-10" style={{backgroundColor:'#1A1A2E',}}>
      <div className="container mx-auto flex flex-wrap justify-between space-y-6 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">{t("Iroda Portfolio")}</h2>
          <p className="text-lg mb-4">
            tha
          </p>
          <p className="text-xl font-semibold">Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li><FontAwesomeIcon icon={faPhoneAlt} color='orange'/> +998 (XX)-XXX-XX-XX</li><br />
            <li><FontAwesomeIcon icon={faEnvelope} color='orange'/> iroda6638@gmail.com</li><br />
            <li><FontAwesomeIcon icon={faMapMarkedAlt}color='orange' /> Uzbekistan Tashkent</li><br />
          </ul>
          <div className="mt-4 flex space-x-6" >
            <a href="https://www.instagram.com/bxbyy._.i/" className="text-white hover:text-[#0077b5]" style={{backgroundColor:'white',color:'#333',padding:'.5rem',borderRadius:'100%'}}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white hover:text-[#333]" style={{backgroundColor:'white',color:'#333',padding:'.5rem',borderRadius:'100%'}}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="text-white hover:text-[#1DA1F2]" style={{backgroundColor:'white',color:'#333',padding:'.5rem',borderRadius:'100%'}} >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://t.me/+998336104445" className="text-white hover:text-[#0088cc]" style={{backgroundColor:'white',color:'#333',padding:'.5rem',borderRadius:'100%'}}>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10" style={{borderTop:'1px solid gray',opacity:'10px'}}>
        <p>Designed With ❤️ By Iroda</p>
      </div>
    </div>
    </>
  );
};

export default Home;