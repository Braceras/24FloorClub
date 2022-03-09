import React from 'react'
import { useState } from 'react'

const Main = (props) => {


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
    <div>

      <div className='contador'>
        <h1 className='nameTittle'>{props.nombre} {estado}</h1>
        <button className='btn-contador' onClick={handleSumar}> Sumar </button>
        <button className='btn-contador' onClick={handleResetear}> Resetear </button>
        <button className='btn-contador' onClick={handleRestar}> Restar </button>
      </div>

    </div>
    
    
  )
}

export default Main 