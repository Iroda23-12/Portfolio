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
                    display: 'flex',
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px'
                }}>
                    <div className="div">
                        <p>My first project</p>
                        <img src="1project.jpg" alt=""  />
                    </div>
                    <div className="div">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" />
                    </div>
                    <div className="div2">
                        <p>My first project</p>
                        <img src="1project.jpg" alt=""/>
                    </div>
                    <div className="div2">
                        <p>My first project</p>
                        <img src="1project.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project