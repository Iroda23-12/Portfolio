import { faCommentDots, faEnvelope, faHeadset, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'service_9ou4xwc', form.current, {
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

export default Contact;
