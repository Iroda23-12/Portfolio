import React from 'react'

const Project = () => {
    return (
        <>
            <div className="project" style={{
                textAlign: 'center',
                marginTop: '100px',
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
                </div>
                <div className="project2">
                    <div className="div2">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" style={{
                            borderRadius: '20px'
                        }} />
                    </div>
                    <div className="div2">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" style={{
                            borderRadius: '20px'
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project