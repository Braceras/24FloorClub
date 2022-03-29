import React from 'react'
import Nav from './Nav'
import LOGO from '../assets/img/24Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='header__container'>
        <Link to="/"><img className='header__logo' src={LOGO} alt="24FloorClub"/></Link>
        <Nav/>
    </header>
  )
}

export default Header