import React from 'react';

function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-500 text-white font-sans">
      {/* Главный заголовок */}
      <header className="text-center py-10">
        <h1 className="text-yellow-400 font-bold text-5xl">Добро пожаловать на наш сайт!</h1>
        <p className="text-yellow-300 text-lg mt-4">Мы рады видеть вас здесь.</p>
      </header>
      {/* Секция карточек */}
      <section className="flex flex-wrap justify-center gap-8 px-6 py-12">
        <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
          <h2 className="text-yellow-300 font-semibold text-2xl">О нас</h2>
          <p className="mt-4">Краткая информация о компании и наших ценностях.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
          <h2 className="text-yellow-300 font-semibold text-2xl">Наши услуги</h2>
          <p className="mt-4">Услуги, которые мы предоставляем нашим клиентам.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
          <h2 className="text-yellow-300 font-semibold text-2xl">Контакты</h2>
          <p className="mt-4">Свяжитесь с нами для дополнительной информации.</p>
        </div>
      </section>

      {/* Кнопка */}
      <div className="text-center py-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full transition-colors duration-300">
          Связаться с нами
        </button>
      </div>
    </div>
  );
}

export default Project;
