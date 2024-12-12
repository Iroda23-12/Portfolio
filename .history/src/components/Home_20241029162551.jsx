import React from 'react'

const Home = () => {
  return (
    <>
      <div className="portfolio">
      <header className="portfolio-header">
        <h1>Моё Портфолио</h1>
        <p>Краткое описание вашего опыта и навыков.</p>
      </header>
      
      <section className="projects">
        <h2>Проекты</h2>
        <div className="project-card">
          <h3>Проект 1</h3>
          <p>Описание проекта.</p>
        </div>
        <div className="project-card">
          <h3>Проект 2</h3>
          <p>Описание проекта.</p>
        </div>
      </section>
      
      <section className="contact">
        <h2>Контакты</h2>
        <p>Email: example@example.com</p>
      </section>
    </div>
    </>
  )
}

export default Home