import React from 'react'
import { useState } from 'react'

const Contador = () => {

    const [estado, setEstado] = useState(0)

      function handleSumar(){
        setEstado(estado + 1)
      }
      function handleResetear(){
        setEstado(0)
      }
      function handleRestar(){
        setEstado(estado - 1)
      }


  return (
    <div className='contador'>
        <h1 className='nameTittle'>Contador: {estado}</h1>
        <button className='btn-contador' onClick={handleSumar}> Sumar </button>
        <button className='btn-contador' onClick={handleResetear}> Resetear </button>
        <button className='btn-contador' onClick={handleRestar}> Restar </button>
      </div>
  )
}

export default Contador