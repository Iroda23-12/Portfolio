import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className="me">
        <h1>Hi There,</h1>
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
            <center>
              <img src="girl.png" alt="" style={{backgroundColor:'yellow', borderRadius:'100%', width:'300px',height:'300px'}} />
            </center>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home