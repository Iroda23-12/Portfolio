import React from 'react';
import './StyledPage.css';

function StyledPage() {
  return (
    <div className="styled-page">
      {/* Главный заголовок */}
      <header className="header">
        <h1 className="header-title">Добро пожаловать на наш сайт!</h1>
        <p className="header-subtitle">Мы рады видеть вас здесь.</p>
      </header>

      {/* Секция карточек */}
      <section className="card-section">
        <div className="card">
          <h2 className="card-title">О нас</h2>
          <p className="card-text">Краткая информация о компании и наших ценностях.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Наши услуги</h2>
          <p className="card-text">Услуги, которые мы предоставляем нашим клиентам.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Контакты</h2>
          <p className="card-text">Свяжитесь с нами для дополнительной информации.</p>
        </div>
      </section>

      {/* Кнопка */}
      <div className="button-container">
        <button className="contact-button">Связаться с нами</button>
      </div>
    </div>
  );
}

export default StyledPage;