import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Skills = () => {
    return (
        <>
            <div className="skills" id="skills">
                <h1> <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span></h1>
                <div className="skills-icons" style={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px'
                }}>
                    <div className="icon-skill" style={{
                        marginLeft: '520px'
                    }}>
                        <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React" />
                        <h2>ReactJs</h2>
                    </div>
                    <div className="icon-skill">
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="icon-skill" style={{
                        marginLeft: '520px'
                    }}>
                        <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />
                        <h2>Bootstrap</h2>
                    </div>
                    <div className="icon-skill">
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="Netlify" />
                        <h2>Netlify</h2>
                    </div>
                    <div className="icon-skill" style={{
                        marginLeft: '520px'
                    }}>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
                        <h2>CSS</h2>
                    </div>
                    <div className="icon-skill">
                        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML" />
                        <h2>HTML</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills