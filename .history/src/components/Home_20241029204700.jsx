import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faDownLong, faUpDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className="me">
        <h1>Hi There I'm Iroda </h1>
        <h5>I study at <span>Fronted</span> </h5>
        <button>About me <FontAwesomeIcon icon={fadown}/> </button>
        <div className="img">
          {/* <img src="tg.png" style={{ width: '40px' }} alt="" />
          <img src="instagram.png" style={{ width: '31px' }} alt="" /> */}
          <a href="https://t.me/">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.instagram.com/bxbyy._.i/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <div >
            {/* <img src="girl.png" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home