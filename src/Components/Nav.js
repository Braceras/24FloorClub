import React from 'react'
import Cartwidget from './Cartwidget'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
        <nav>
            <NavLink to="/MutantCats/MutantCats" className='nav__link'>Mutant Cats</NavLink>
            <NavLink to="/Doodles/Doodles" className='nav__link'>Doodles</NavLink>
            <NavLink to="/BoredApes/BoredApes" className='nav__link'>Bored Apes</NavLink>
            <NavLink to="/CryptoPunks/CryptoPunks" className='nav__link'>Crypto Punks</NavLink>
            <Cartwidget/>
            
        </nav>
  )
}

export default Nav 