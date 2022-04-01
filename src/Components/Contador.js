import React from 'react'
import { useState } from 'react'

const Contador = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(0)

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
        <p className='nameTittle'>Cantidad: {estado}</p>
        <button className='btn-contador' onClick={handleSumar}> Sumar </button>
        <button className='btn-contador' onClick={handleAgregar}> Añadir al carrito </button>
        <button className='btn-contador' onClick={handleRestar}> Restar </button>
      </div>
  )
}

export default Contador