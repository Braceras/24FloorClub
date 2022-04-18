import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './miContexto'

const Cartwidget = () => {

    const {cantidad} = useContext(contexto)

  return (
    <Link to='carrito'>
    <span className='material-icons'>
      shopping_cart
    </span>
            {cantidad}
    </Link>
  )
}

export default Cartwidget