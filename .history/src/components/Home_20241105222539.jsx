import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleDown, faCommentDots, faEnvelope, faHeadset, faPaperPlane, faPhone, faUser, } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const aboutText = "Hi! My name is Iroda. I am a student of 168th school in grade 8A and have been studying at Coddy Camp for 10 months now, where I develop my web development skills. My passion for programming started in school, and I am actively involved in various projects, striving to create convenient and attractive web applications. In my projects, I use React and Zustand for state management. At the moment, I am working on the website 'UzbekistanExplorer.com', which is aimed at promoting tourism in Uzbekistan.";
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
      <div className="home" style={{
        backgroundColor: '#F7F7F7',
        borderBottom: '2px solid purple',
      }}>
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
              <b>{aboutText}</b>
            </p>
          </div>
        </div>
      </div>
      
      <section className="contact" id="contact">
        <h2 className="heading"><FontAwesomeIcon icon={faHeadset} /><b> Get in <span>Touch</span></b></h2>
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
                  Submit <i className="fa fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;