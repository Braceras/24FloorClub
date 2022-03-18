import React from 'react'


const Item = ({ producto }) => {


  return (
    <div>
      <img src={producto.img} alt="Nonchalantly" />
      <h2>{producto.nombre}</h2>
      <p>{producto.detalle}</p>

      
    </div>
    
  )
}

export default Item