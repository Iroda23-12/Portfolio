import React from 'react';

function Project() {
  return (
    <div className="styled-page">
      {/* Главный заголовок */}

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

export default Project;
