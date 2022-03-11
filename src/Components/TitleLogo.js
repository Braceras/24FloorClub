import React from 'react'
import H1 from '../assets/img/H1.png'

const TitleLogo = () => {

    function AnimateH1(){
      
    }
  return (
    <div className='H1__Container'>
          <img onClick={AnimateH1} className='H1-img' src={H1} alt="24 Floor Club" />
      </div>
  )
}

export default TitleLogo