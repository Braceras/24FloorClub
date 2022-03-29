import React from 'react'
import Cartwidget from './Cartwidget'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
        <nav>
            <NavLink to="/Nosotros/1">Nosotros</NavLink> 
            <NavLink to="/Desarrolladores/2">Desarrolladores</NavLink>
            <NavLink to="/Contacto/3">Contacto</NavLink>
            <Cartwidget/>
            
        </nav>
  )
}

export default Nav 