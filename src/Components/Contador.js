import React from 'react'
import { useState } from 'react'

const Contador = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(1)

      const handleSumar = () => {
        if(estado < stock){
          setEstado(estado + 1)
        }
      }
      
      const handleAgregar = () => {
        onAdd(estado) 
      }

      const handleRestar = () => {
        if(estado > initial){
          setEstado(estado - 1)
        }
      }


  return (
    <div className='contador'>
        <button className='btn-contador' onClick={handleSumar}> + </button>
        <p className='numCont'>{estado}</p>
        <button className='btn-contador' onClick={handleRestar}> - </button> <br />
        <button className='btn-cart' onClick={handleAgregar}> Añadir al carrito </button>
      </div>
  )
}

export default Contador