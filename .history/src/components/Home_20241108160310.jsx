import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [hoveredElement, setHoveredElement] = useState();
  const form = useRef();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="#home">{t('home')}</a></li>
            <li><a href="#about">{t('about')}</a></li>
            <li><a href="#skills">{t('skills')}</a></li>
            <li><a href="#Project">{t('project')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
            <select
              className="language-selector"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
              <option value="uz">UZB</option>
            </select>
          </ul>
        </nav>
      </header>

      {/* Пример перевода в других частях */}
      <section id="contact">
        <h2>{t('contact')}</h2>
        <form ref={form}>
          <input type="text" placeholder={t('name')} name="user_name" required />
          <input type="email" placeholder={t('email')} name="user_email" required />
          <input type="text" placeholder={t('phone')} name="user_phone" />
          <textarea placeholder={t('message')} name="message" required></textarea>
          <button type="submit">{t('submit')}</button>
        </form>
      </section>
    </>
  );
};

export default Home;
