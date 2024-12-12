import React, { useState } from 'react';

const Project = () => {
    // Состояние для хранения ID текущего элемента
    const [hoveredElement, setHoveredElement] = useState(null);

    // Функция для открытия нового окна с кодом проекта
    const openCodeWindow = (url) => {
        window.open(url, '_blank'); // Открывает новое окно
    };

    return (
        <div className="project">
            <div className="project-text">
                <h1>My Project</h1>
                <div className="project1">
                    <center>
                        {/* Первый проект */}
                        <div
                            className="div"
                            onMouseEnter={() => setHoveredElement(1)} // Устанавливаем ID элемента
                            onMouseLeave={() => setHoveredElement(null)} // Сбрасываем ID
                        >
                            <p>My first project</p>
                            <img src="1project.jpg" alt="My first project" />
                            {hoveredElement === 1 && ( // Проверяем, является ли текущий элемент тем, который мы навели
                                <button 
                                    className="code-button" 
                                    onClick={() => openCodeWindow('https://example.com/my-first-project')}
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>

                        {/* Dior */}
                        <div
                            className="div2"
                            onMouseEnter={() => setHoveredElement(2)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>Dior</p>
                            <img src="dior.png" alt="Dior" />
                            {hoveredElement === 2 && (
                                <button 
                                    className="code-button" 
                                    onClick={() => openCodeWindow('https://example.com/dior')}
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>

                        {/* Первый демонстрационный день */}
                        <div
                            className="div"
                            onMouseEnter={() => setHoveredElement(3)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>First demo day</p>
                            <img src="demo.png" alt="First demo day" />
                            {hoveredElement === 3 && (
                                <button 
                                    className="code-button" 
                                    onClick={() => openCodeWindow('https://example.com/first-demo-day')}
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>

                        {/* 2Rism */}
                        <div
                            className="div2"
                            onMouseEnter={() => setHoveredElement(4)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>2Rism</p>
                            <img src="2rism.png" alt="2Rism" />
                            {hoveredElement === 4 && (
                                <button 
                                    className="code-button" 
                                    onClick={() => openCodeWindow('https://example.com/2rism')}
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Project;
