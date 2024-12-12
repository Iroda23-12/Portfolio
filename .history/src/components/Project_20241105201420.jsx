import React, { useState } from 'react';

const Project = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    return (
        <div className="project">
            <div className="project-text">
                <h1>My Project</h1>
                <div className="project1">
                    <center>
                        <div
                            className="div"
                            onMouseEnter={() => setHoveredElement(1)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>My first project</p>
                            <img src="1project.jpg" alt="My first project" />
                            {hoveredElement === 1 && (
                                <a href="/dior">
                                    <button className="code-button" style={{ opacity: hoveredElement === 1 ? 1 : 0 }}>
                                        Посмотреть код
                                    </button>
                                </a>
                            )}
                        </div>
                        <div
                            className="div2"
                            onMouseEnter={() => setHoveredElement(2)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>Dior</p>
                            <img src="dior.png" alt="Dior" />
                            {hoveredElement === 2 && (
                                <a href="/dior">
                                    <button className="code-button" style={{ opacity: hoveredElement === 2 ? 1 : 0 }}>
                                        Посмотреть код
                                    </button>
                                </a>
                            )}
                        </div>
                        <div
                            className="div"
                            onMouseEnter={() => setHoveredElement(3)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <p>First demo day</p>
                            <img src="demo.png" alt="First demo day" />
                            {hoveredElement === 3 && (
                                <a href="/first-demo-day">
                                    <button className="code-button" style={{ opacity: hoveredElement === 3 ? 1 : 0 }}>
                                        Посмотреть код
                                    </button>
                                </a>
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
                                <a href="/2rism">
                                    <button className="code-button" style={{ opacity: hoveredElement === 4 ? 1 : 0 }}>
                                        Посмотреть код
                                    </button>
                                </a>
                            )}
                        </div>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Project;
