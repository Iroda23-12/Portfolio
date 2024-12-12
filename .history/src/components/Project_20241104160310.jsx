import React from 'react'

const Project = () => {
    return (
        <>
            <div className="project" style={{
                textAlign: 'center',
            }}>
                <h1>My Project</h1><br />
                <div className="project1" style={{
                    marginTop: '100px',
                    display: 'flex'
                }}>
                    <div className="div">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" style={{
                            borderRadius: '20px'
                        }} />
                    </div>
                    <div className="div">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" style={{
                            borderRadius: '20px'
                        }} />
                    </div>
                    <div className="div">
                    <p>My first project</p>
                        <img src="1project.jpg" alt="" style={{
                            borderRadius: '20px'
                        }} />
                    </div>
                    <div className="div">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project