import React from 'react'
import Nav from './Nav'
import LOGO from '../assets/img/24Logo.png'

const Header = () => {
  return (
    <header className='header__container'>
        <a href="#"><img className='header__logo' src={LOGO} alt="24FloorClub"/></a>
        <Nav/>
    </header>
  )
}

export default Header