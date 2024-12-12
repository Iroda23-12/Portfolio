import React, { useState } from 'react';
const Project = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const openCodeInNewTab = (codeContent) => {
        // Создаем новый Blob с кодом
        const blob = new Blob([codeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank'); // Открываем новый лист
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
                            onMouseEnter={() => setHoveredElement(1)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>My first project</p>
                            <img src="1project.jpg" alt="My first project" />
                            {hoveredElement === 1 && (
                                <button 
                                    className="code-button" 
                                    onClick={() => openCodeInNewTab('Код для My first project')}
                                    style={{ opacity: hoveredElement === 1 ? 1 : 0 }} // Плавное появление
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
                                    onClick={() => openCodeInNewTab('Код для Dior')}
                                    style={{ opacity: hoveredElement === 2 ? 1 : 0 }} // Плавное появление
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
                                    onClick={() => openCodeInNewTab('Код для First demo day')}
                                    style={{ opacity: hoveredElement === 3 ? 1 : 0 }} // Плавное появление
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
                                    onClick={() => openCodeInNewTab('Код для 2Rism')}
                                    style={{ opacity: hoveredElement === 4 ? 1 : 0 }} // Плавное появление
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>
                    </center>
                </div>
            </div>
            <a href=""></a>
        </div>
    );
}

export default Project;
