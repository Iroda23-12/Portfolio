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

      <div className="about" style={{
        textAlign: 'center',
        padding: '220px',
        height: '100vh', 
        backgroundImage: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAODw0NEA8OEA8NDQ0NDw0PDw8NDQ8NFREWFhURFRUYHSggGBolHRUVITEhJSkrLy4wFx8zODMsNygtLisBCgoKDg0NDg0ODysZFRkrKy0rNzcrKy0tNystKy0rKzctKystKysrKysrLSsrLSsrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAuEAEAAQIEBAYBAwUAAAAAAAAAAQIRITFRcRJBYZEDgaGxwdHhMkJSEyJy8PH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6uAwoAAAAAAAAAAAAyKgEs846xVHpLUs1a6Yg5i1xjhlOMbIAAAAABIL4ed9Iv9etmW4/TV1mmPefiGAWIXxJx6RhG0L4f6o3uwAtXtgU69t0AFQHpAAAAAAAAAAAAABJRZQCUVAZmOXafhjJ1SY1784+wcxufD0mJ9J9WKqZjOJgARQAAa/bHWqfSI+2Wq/2x0v5zj7WYBvwv1RvDDXh/qp/yj3ZBZ5d0WoAAB6AAAAAAAAAAAAAASUAAABFARNu3Kd4UBjhvlhOmuzDrMfiWK9dc9+YIU03mI1GqP3TpT7zb5kErqvMzr7ckQBrw846Y9sUiFjCJnXCPn/eqQAAAAD0AAAAAAAAAAAAJJMoAAAAAACCygDNUYT5T8fMNExhO35+AcW6cqvL3Ybo0/lFvPl62BhYi5ZZnlH/AECqe0YR9oAAAAAPQJcuChcAAAAuAJcBbogAAAAAAAABKQoCwlU5dZtOyuXiyDCrVrr7oDVX92PP90fLCxNsWrcWWf8AHXb6BkRQAQFHXippwmm8xnPXQBQAAAFQAAAAAAAAAAAAAAAAAcq83VxqzncAAAAGuK+ef8td/tKqZj75T5otNUxlMwDLpEcOM/q5Rp1lP6k69sGQQAHouIAsooCKgAAAAAAAAAAAAAAASADlXGLqx4kAwIoAAAAAAAtkB6OHrHeIOCdO2PsyAKvHrjv9lr5dp+JBkWf93QAAAAAAAAAAAAAAAABFAcqqbI6y51UAgAAACgACA7AAAA3FV8J8p03ZmLYI6R/dFucZdY0BzAAAAAAAAAAAAAAAAAARQGZpiWZ8Pq2oOXBK8EtrcGI8OWo8OFuoFo0hFAY4l4mAHSJHNYqBsSKm4pvtryAmb766kUzp58u5eIyx6zl2JqnUDh6x6z7Fo1nt+U7ey227gWjXvEnBPK07Tj2zLdO03TyBBvi1x3+yaOcY9OcAwAAAACgg1w2znyzk4tI74yCRF14J0ntJNU6yyCzExyntZFiZjKZ7rxa2n37gyNWvl2n7QGRQAAAEBxut0uXBeJumm+2vJnhiMZ55U69Z0hJrmfLKIygHXCOs9cI7H9SZzn8OKWB6BwhqJkHUYituJuAvF57oA1bT8wkTbGCJWde/QGpm+Nt457wzaNbb/cJErMXxjzjT8AcPWO8HD1jvf2ZAaw6zthBx6YbMgAAAtkAAAavfCfKftkBZiyNRPKcvWEmLffKQQABFAeduItjOc5R8ylEc5yjlrOiTN8Z5gTNxFAAAIkQG0IUG6a2nF0oqBpYlAFmCJWMcO30yDWE9Nsjh6x7MgNW6x6ph1n0QBb7F0AFQBUAAVAGoq7aMgNVR2Zap01y35MgAA5V5Uf4zPnxSwAKgAAAqACw0ABTnAA6gApXnO8gCAAAAKgAqAAAKgAAAtOcFec7gAAD/2Q==)',
        backgroundSize: 'cover',
        position: 'relative'
      }}>

        <h1 style={{fontFamily:'sans-serif'}}> <FontAwesomeIcon icon={faUser} /> О себе</h1><br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <p style={{
            width: '600px',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <b>Привет! Меня зовут Ирода. Я учусь в 168-й школе в 8А классе и уже 10 месяцев обучаюсь в Coddy Camp, где развиваю свои навыки в веб-разработке. Моя страсть к программированию началась в школе, и я активно участвую в различных проектах, стремясь создать удобные и привлекательные веб-приложения.
            В своих проектах я использую React и Zustand для управления состоянием. В данный момент я работаю над сайтом "UzbekistanExplorer.com", который направлен на продвижение туризма в Узбекистане.  </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
