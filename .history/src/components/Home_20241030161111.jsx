import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className="me">
        <h1>Hi There, <br /> I'm Iroda</h1>
        <h5>I study at <span>Fronted</span> </h5>
        <button>About me <FontAwesomeIcon icon={faArrowAltCircleDown} /></button>
        <div className="img">
          <a href="https://t.me/">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.instagram.com/bxbyy._.i/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <div className='girlphoto'>
            <a href=""></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home