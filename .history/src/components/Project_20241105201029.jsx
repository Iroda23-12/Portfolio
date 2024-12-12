import React, { useState } from 'react';
import './Project.css'; // Импортируйте ваш CSS-файл

const Project = () => {
    const [hoveredElement, setHoveredElement] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content); // Устанавливаем содержимое для модального окна
        setIsModalOpen(true); // Открываем модальное окно
    };

    const closeModal = () => {
        setIsModalOpen(false); // Закрываем модальное окно
        setModalContent(null); // Сбрасываем содержимое
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
                                    onClick={() => openModal('Код для My first project')}
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
                                    onClick={() => openModal('Код для Dior')}
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
                                    onClick={() => openModal('Код для First demo day')}
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
                                    onClick={() => openModal('Код для 2Rism')}
                                    style={{ opacity: hoveredElement === 4 ? 1 : 0 }} // Плавное появление
                                >
                                    Посмотреть код
                                </button>
                            )}
                        </div>
                    </center>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-modal" onClick={closeModal}>×</button>
                        <h2>Содержимое кода:</h2>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
