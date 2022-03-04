import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header__container'>
        <a href="#"><img className='header__logo' src="" alt="24FloorClub"/></a>
        <Nav/>
    </header>
  )
}

export default Header