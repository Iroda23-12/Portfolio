import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <>
      <div className="me">
        <h1>Hi There I'm Iroda </h1>
        <h5>I study at <span>Fronted</span> </h5>
        <button>About me </button>
        <div className="img">
          <img src="tg.png" style={{ width: '40px' }} alt="" />
          <img src="instagram.png" style={{ width: '31px' }} alt="" />
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>


      <div className="skills">

      </div>
    </>
  )
}

export default Home