import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useFormAction } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="about">
        <FontAwesomeIcon icon={useFormAction}/>
        <h1>ABout me</h1>
      </div>
    </>
  )
}

export default About