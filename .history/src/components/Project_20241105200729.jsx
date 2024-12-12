import React, { useState } from 'react';

const Project = () => {
    // Состояние для управления видимостью кнопки
    const [showButton, setShowButton] = useState(false);

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
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <p>My first project</p>
                            <img src="1project.jpg" alt="My first project" />
                            {showButton && (
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
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <p>Dior</p>
                            <img src="dior.png" alt="Dior" />
                            {showButton && (
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
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <p>First demo day</p>
                            <img src="demo.png" alt="First demo day" />
                            {showButton && (
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
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                        >
                            <p>2Rism</p>
                            <img src="2rism.png" alt="2Rism" />
                            {showButton && (
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
