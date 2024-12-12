import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Hi There I'm Iroda </h1>
      <h5>I study at <span>Fronted</span> </h5>
      <button>About me </button>
      <div className="img">
        <img src="profile.jpg" alt="" />
        <h3>Iroda</h3>
        <p>I'm a 25-year-old Frontend Developer from Nigeria.</p>
      </div>
      <img src="inst.png" style={{width:'100px'}} alt="" />
    </>
  )
}

export default Home