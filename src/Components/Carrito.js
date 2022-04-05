import React from 'react'
import { useContext } from 'react'
import { contexto } from '../App'

const Carrito = () => {

  const resultado = useContext(contexto)
  console.log(resultado);
  return (
    <div>Carrito</div>
  )
}

export default Carrito